import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Api from "../../services/api";
import { queryClient } from "../../services/queryClient";

export function useLogout() {
   const router = useRouter();

   const handleLogout = async () => {
      try {
         await Api.post("/logout");
         queryClient.clear();
         router.push("/");
         toast.success("Good bye! Your're logged off the system");
      } catch (error) {
         console.log(error);
         toast.error(error);
      }
   };
   return { handleLogout };
}

export default useLogout;
