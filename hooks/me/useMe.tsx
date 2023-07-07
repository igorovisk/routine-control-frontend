import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { TypeUser } from "../../types";

type MeResponse = {
   user: TypeUser;
   isLoggedIn: boolean;
};

export async function getMe(): Promise<MeResponse> {
   try {
      const response = await Api.get("/me");
      const user = response.data as TypeUser;
      return { user, isLoggedIn: true };
   } catch {
      return { user: null, isLoggedIn: false };
   }
}

export function useMe() {
   return useQuery(["me"], async () => getMe(), {
      staleTime: 1000,
   });
}

export default useMe;
