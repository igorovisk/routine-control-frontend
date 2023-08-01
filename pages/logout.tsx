import { useRouter } from "next/router";
import useLogout from "../hooks/Auth/useLogout";

export function Logout() {
   const hook = useLogout();
   const router = useRouter();
   router.push("/");
   hook.handleLogout();
   return null;
}

export default Logout;
