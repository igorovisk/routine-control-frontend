import { useRouter } from "next/router";
import useLogout from "../hooks/Auth/useLogout";

export function Logout() {
   const router = useRouter();
   const hook = useLogout();
   hook.handleLogout();

   return <p>oi</p>;
}

export default Logout;
