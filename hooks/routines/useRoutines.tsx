import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";

type RoutineResponse = {
   id: number;
   userId: string;
   name: string;
   createdAt: Date;
   updatedAt: Date;
   description?: string | null;
   tasks?: Array<[]>;
};

type RoutinePayload = {
   name?: string;
   description?: string;
   tasks?: Array<[]>;
};

function useRoutines() {
   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return null;
   }

   const { user } = me;

   async function adminGetRoutines(): Promise<RoutineResponse> {
      try {
         const response = await Api.get(`users/${user.id}/routines`);
         if (response.status === 200) {
            return response.data;
         }
         return null;
      } catch (error) {}

      const routinesQuery = useQuery(
         ["routines"],
         async () => adminGetRoutines(),
         {
            onError: (e) => {
               console.log(e, "error or event");
               return e;
            },
            retry: false,
         }
      );
   }
   async function postRoutine(routine: RoutinePayload): Promise<{}> {
      try {
         console.log(user.id, "user na funcao");
         console.log(routine, "routine no post Routine");
         const response = await Api.post(`users/${user.id}/routines`, routine);

         return response;
      } catch (error) {}
   }

   return {
      postRoutine,
   };
}

export default useRoutines;
