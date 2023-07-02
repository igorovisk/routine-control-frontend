import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../me/useMe";

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
         const response = await Api.post(`users/${user.id}/routines`, routine);
         console.log(response, "response do routines post");
         return response;
      } catch (error) {}
   }

   return {
      postRoutine,
   };
}

export default useRoutines;
