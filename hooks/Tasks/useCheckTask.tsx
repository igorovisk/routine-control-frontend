import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast, useToast } from "react-toastify";
import { TypeTask } from "../../types";
import { AxiosError, AxiosResponse } from "axios";

function useCheckTask(onSuccess?: () => {}, onError?: () => {}) {
   const queryClient = useQueryClient();
   const { data: me } = useMe();
   const { user } = me;

   return useMutation(
      ["checkTask"],
      async (task: TypeTask) => {
         try {
            return await Api.post(
               `users/${user.id}/routines/${task.routineId}/tasks/${task.id}`,
               task
            );
         } catch (error) {
            throw new Promise((resolve, reject) => {
               resolve(error);
            });
         }
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["me"]);
            toast.success(`Task Done..`, {
               position: "top-right",
            });
         },
         onError: async (error: any) => {
            error.then((res: any) => {
               const errorMessage = res.response?.data?.error;
               toast.error(errorMessage);
            });
         },

         retry: false,
      }
   );
}

export default useCheckTask;
