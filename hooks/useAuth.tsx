import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Api from "../services/api";
import { useRouter } from "next/router";

interface LoginParams {
   email: string;
   password: string;
}

interface SignUpParams {
   email: string;
   username: string;
   fullname: string;
   birthdate: string;
   password: string;
}

export function useAuth() {
   const router = useRouter();

   const handleSignUp = async (event, payload: SignUpParams) => {
      event.preventDefault();
      const response = await Api.post("/users", payload);
      response.status === 200 &&
         toast.success(
            "Nice! Your user was created! :). We will automatically redirect you..."
         );
      handleLogin(event, { email: payload.email, password: payload.password });
   };

   const handleLogin = async (event, { email, password }: LoginParams) => {
      event.preventDefault();
      const response = await Api.post("/login", { email, password });
      if (response.status === 200) {
         toast.success("Nice! You're now logged in! :)");
         router.push("/home");
      } else {
         toast.error("Wrong email or password :(");
      }
   };

   const handleLogout = async () => {
      const response = await Api.post('/logout')
      if(response.status === 200){
         toast.success("Good bye! Your're logged off the system");
         router.push('/')
      } else{
         toast.error("Error while logging off :(");
      }
   }

   return {
      handleLogin,
      handleLogout,
      handleSignUp,
   };
}

export default useAuth;
