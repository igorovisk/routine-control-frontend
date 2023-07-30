import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast } from "react-toastify";

type TaskPayload = {
   name?: string;
   description?: string;
   routineId: string;
};

function usePostTask() {
   const queryClient = useQueryClient();
   const { data: me, isFetching } = useMe();
   const { user } = me;
   return useMutation(
      ["postTask"],
      async (task: TaskPayload) => {
         const response = await Api.post(
            `users/${user.id}/routines/${task.routineId}/tasks`,
            task
         );
         toast.success(`New task added to routine..`, {
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

export default usePostTask;
