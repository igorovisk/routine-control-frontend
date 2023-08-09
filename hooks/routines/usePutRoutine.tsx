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
   color?: string;
};

type RoutinePayload = {
   id: String;
   name?: string;
   description?: string;
   tasks?: Array<[]>;
   color: string;
};

function usePutRoutine() {
   const queryClient = useQueryClient();
   const { data: me, isFetching } = useMe();
   const { user } = me;
   return useMutation(
      ["postRoutine"],
      async (routine: RoutinePayload): Promise<RoutineResponse> => {
         const response = await Api.put(
            `users/${user.id}/routines/${routine.id}`,
            routine
         );

         return response.data;
      },
      {
         onSuccess: async () => {
            await queryClient.invalidateQueries(["me"]);
            toast.success(`Routine sucessfully edited..`, {
               position: "top-right",
            });
         },
         onError: (error: any) => {
            console.log(error, "ERROR");
            toast.error(`${error.response.data}`);
         },
      }
   );
}

export default usePutRoutine;
