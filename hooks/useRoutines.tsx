import { useQuery } from "@tanstack/react-query";
import Api from "../services/api";
import useMe from "./useMe";

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
   async function adminGetRoutines(): Promise<RoutineResponse> {
      const { data: userData } = useMe();
      const userId = userData?.id;
      try {
         const response = await Api.get(`users/${userId}/routines`);
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
      const { data: userData } = useMe();
      const userId = userData?.id;
      try {
         const response = await Api.post(`users/${userId}/routines`, routine);
         return response;
      } catch (error) {}
   }

   return {
      postRoutine,
   };
}

export default useRoutines;
