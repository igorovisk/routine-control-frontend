import { toast } from "react-toastify";
import Api from "../../services/api";
import router from "next/router";
import { useMutation } from "@tanstack/react-query";

interface LoginParams {
   email: string;
   password: string;
}

export function useSignIn() {
   return useMutation(
      async ({ email, password }: LoginParams) => {
         const response = await Api.post("/login", {
            email,
            password,
         });
      },
      {
         onSuccess: async () => {
            toast.success("Success.. Redirecting to home page");
            router.push("/home");
         },
         onError: async (erro: any) => {
            console.log(erro, "erro");
            toast.error(erro.response.data.error);
         },
      }
   );
}
