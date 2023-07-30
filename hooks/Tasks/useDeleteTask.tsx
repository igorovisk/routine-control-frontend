import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast } from "react-toastify";

function useDeleteTask() {
   const queryClient = useQueryClient();
   const { data: me, isFetching } = useMe();
   const { user } = me;

   return useMutation(
      ["deleteTask"],
      async function ({
         taskId,
         routineId,
      }: {
         taskId: string;
         routineId: string;
      }) {
         const response = await Api.delete(
            `users/${user.id}/routines/${routineId}/tasks/${taskId}`
         );
         toast.success(`Deleted task..`, {
            position: "top-right",
         });
         return response.data;
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["me"]);
         },
         onError: (error: any) => {
            console.log(error, "ERROR");
            toast.error(`${error.response.data}`);
         },
      }
   );
}

export default useDeleteTask;
