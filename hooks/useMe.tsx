import { useQuery } from "@tanstack/react-query";
import Api from "../services/api";

type User = {
   routines: any;
   id: number;
   name: string;
   login: string;
   email: string;
   admin: boolean;
   active: boolean;
   createdAt: string;
};

export function useMe() {
   async function getMe(): Promise<User> {
      const response = await Api.get("/me");
      if (response.status === 200) {
         return response.data;
      }
      return null;
   }

   const query = useQuery(["me"], async () => getMe(), {
      onError: (e) => {
         console.log(e, "error or event");
         return e;
      },
      retry: false,
   });

   return query;
}

export default useMe;
