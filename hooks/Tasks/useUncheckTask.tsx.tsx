import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast } from "react-toastify";
import { TypeTask } from "../../types";
import { AxiosError } from "axios";

function useUncheckTask(onSuccess?: () => {}, onError?: () => {}) {
   const queryClient = useQueryClient();
   const { data: me } = useMe();
   const { user } = me;

   return useMutation(
      ["uncheckTask"],
      async (task: TypeTask) => {
         await Api.delete(`users/${user.id}/tasks/${task.id}/undo`);
         return task;
      },
      {
         onSuccess: async (task: TypeTask) => {
            await queryClient.invalidateQueries(["me"]);
            return toast.success(`${task.name} unchecked :/`);
         },
         onError: (error: any) => {
            const errorMessage = error.response?.data?.error;
            toast.error(errorMessage);
         },

         retry: false,
      }
   );
}

export default useUncheckTask;
