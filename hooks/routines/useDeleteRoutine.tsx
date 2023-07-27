import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast } from "react-toastify";

type RoutineResponse = {
   id: number;
   userId: string;
   name: string;
   createdAt: Date;
   updatedAt: Date;
   description?: string | null;
   tasks?: Array<[]>;
   color: string;
};

function useDeleteRoutine() {
   const queryClient = useQueryClient();
   const { data: me, isFetching } = useMe();
   const { user } = me;
   return useMutation(
      ["deleteRoutine"],
      async (routineId: string): Promise<RoutineResponse> => {
         const response = await Api.delete(
            `users/${user.id}/routines/${routineId}`
         );

         toast.success(`New routine added..`, {
            position: "top-right",
         });
         console.log(response, "response");
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

export default useDeleteRoutine;
