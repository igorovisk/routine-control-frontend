import { toast } from "react-toastify";
import Api from "../../services/api";
import router from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMe } from "../Me/useMe";
import { queryClient } from "../../services/queryClient";

interface LoginParams {
   email: string;
   password: string;
}

export function useSignIn(onSuccess?: () => {}, onError?: () => {}) {
   return useMutation(async ({ email, password }: LoginParams) => {
      try {
         const response = await Api.post("/login", {
            email,
            password,
         }).then(async (res) => {
            if (res.status === 200) {
               toast.success("Nice! You're now logged in! :)");
               await queryClient.invalidateQueries(["me"]);
               router.push("/home");
            }
         });
         console.log(response, "response do api");
      } catch (error) {
         console.log(error, "error no hook");
         toast.error(error);
      }
   });
}
