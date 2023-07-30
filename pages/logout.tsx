import useLogout from "../hooks/Auth/useLogout";

export function Logout() {
   const hook = useLogout();
   return hook.handleLogout();
}

export default Logout;
