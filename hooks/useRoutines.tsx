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

export function useRoutines() {
   const { data: userData } = useMe();
   const userId = userData?.id;
   //---> GET USER ROUTINES BY ID IF ADMin
   async function getRoutines(): Promise<RoutineResponse> {
      try {
         const response = await Api.get(`users/${userId}/routines`);
         if (response.status === 200) {
            return response.data;
         }
         return null;
      } catch (error) {}
   }
   const routinesQuery = useQuery(["routines"], async () => getRoutines(), {
      onError: (e) => {
         console.log(e, "error or event");
         return e;
      },
      retry: false,
   });
   // GET USER ROUTINES BY ID IF ADMin<---

   //---> POST USER ROUTINE
   async function postRoutine(routine: RoutinePayload): Promise<{}> {
      try {
         console.log(routine, "routine payload");
         const response = await Api.post(`users/${userId}/routines`, routine);
         return response;
      } catch (error) {}
   } //POST USER ROUTINE <---

   return {
      routinesQuery,
      postRoutine,
   };
}

export default useRoutines;
