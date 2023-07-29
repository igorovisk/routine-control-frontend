import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast, useToast } from "react-toastify";
import { TypeTask } from "../../types";
import { AxiosError } from "axios";

function useCheckTask(onSuccess?: () => {}, onError?: () => {}) {
   const queryClient = useQueryClient();
   const { data: me, isFetching } = useMe();
   const { user } = me;
   return useMutation(
      ["checkTask"],
      async (task: TypeTask) => {
         return await Api.post(
            `users/${user.id}/routines/${task.routineId}/tasks/${task.id}`,
            task
         );
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["me"]);
            toast.success(`Task Done..`, {
               position: "top-right",
            });
         },
         onError: (error: AxiosError | any) => {
            console.log(error.response?.data?.error as AxiosError);
            toast.error(`${error.response?.data?.error}`);
         },
         retry: false,
      }
   );
}

export default useCheckTask;
