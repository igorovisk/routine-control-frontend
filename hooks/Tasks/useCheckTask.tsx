import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast, useToast } from "react-toastify";
import { TypeTask } from "../../types";

function useCheckTask() {
   const queryClient = useQueryClient();
   const { data: me, isFetching } = useMe();
   const { user } = me;
   return useMutation(
      ["postTask"],
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
         onError: (error: any) => {
            toast.error(`${error.response.data.error}`);
         },
      }
   );
}

export default useCheckTask;
