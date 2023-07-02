import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";

type User = {
   routines: any;
   id: number;
   fullname: string;
   login: string;
   email: string;
   admin: boolean;
   active: boolean;
   createdAt: string;
};
type MeResponse = {
   user: User;
   isLoggedIn: boolean;
};

export async function getMe(): Promise<MeResponse> {
   try {
      const response = await Api.get("/me");
      const user = response.data as User;
      return { user, isLoggedIn: true };
   } catch {
      return { user: null, isLoggedIn: false };
   }
}

export function useMe() {
   return useQuery(["me"], async () => getMe(), {});
}

export default useMe;
