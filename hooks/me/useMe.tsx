import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { TypeUser } from "../../types";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type MeResponse = {
   user: TypeUser;
   isLoggedIn: boolean;
};

// export async function getMe(): Promise<MeResponse> {
//    try {
//       const response = await Api.get("/me");
//       const user = response.data as TypeUser;
//       return { user, isLoggedIn: true };
//    } catch {
//       return { user: null, isLoggedIn: false };
//    }
// }

// export function useMe() {
//    return useQuery(["me"], async () => getMe(), {
//       staleTime: 20000,
//    });
// }

export function useMe() {
   async function getMe(): Promise<MeResponse | null> {
      try {
         const response = await Api.get("/me");
         const user = response.data as TypeUser;
         if (!user) {
            throw new Error("error");
         }
         return { user, isLoggedIn: true };
      } catch (error) {
         router.push("/logout");
         throw error;
      }
   }

   const router = useRouter();

   return useQuery(["me"], async () => await getMe(), {
      enabled: router.pathname !== "/",
      onSuccess: (me: MeResponse) => {
         console.log(me, "ME SUCCESS");
         return me;
      },
      onError: (error: any) => {
         toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
         return { user: null, isLoggedIn: false };
      },
      retry: true,
   });
}

export default useMe;
