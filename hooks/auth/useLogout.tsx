import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Api from "../../services/api";
import { queryClient } from "../../services/queryClient";

export function useLogout() {
   const router = useRouter();

   const handleLogout = async () => {
      try {
         const response = await Api.post("/logout");
         if (response.status === 200) {
            toast.success("Good bye! Your're logged off the system");
         }
         queryClient.clear();
         router.push("/");
      } catch (error) {
         console.log(error);
         toast.error(error);
      }
   };
   return { handleLogout };
}

export default useLogout;
