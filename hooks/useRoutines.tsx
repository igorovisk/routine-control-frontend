import { useQuery } from "@tanstack/react-query";
import Api from "../services/api";
import useMe from "./useMe";

type Routine = {
   id: number;
   userId: string;
   name: string;
   createdAt: Date;
   updatedAt: Date;
   description: string | null;
   tasks?: Array<[]>;
};

export function useRoutines() {
      const me = useMe();
      
//IF ADMIN
   async function getRoutines(): Promise<Routine> {
      const response = await Api.get("/routines/");
      if (response.status === 200) {
         return response.data;
      }
      return null;
   }

   const query = useQuery(["routine"], async () => getRoutines(), {
      onError: (e) => {
         console.log(e, "error or event");
         return e;
      },
      retry: false,
   });

   return query;
}

export default useRoutines;
