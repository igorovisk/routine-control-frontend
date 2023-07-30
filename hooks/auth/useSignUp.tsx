import { toast } from "react-toastify";
import Api from "../../services/api";
import { useSignIn } from "./useSignIn";

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

export function useSignUp() {
   const signInHook = useSignIn();

   const handleSignUp = async (event: any, payload: SignUpParams) => {
      event.preventDefault();
      const response = await Api.post("/users", payload);
      response.status === 200 &&
         toast.success(
            "Nice! Your user was created! :). We will automatically redirect you..."
         );
      await signInHook.mutateAsync({
         email: payload.email,
         password: payload.password,
      });
   };

   return { handleSignUp };
}

export default useSignUp;
