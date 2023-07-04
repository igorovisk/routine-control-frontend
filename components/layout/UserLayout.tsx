import React from "react";
import { IoIosCreate } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import UserMenuButton from "../button/UserMenuButton";
import { GoSignOut } from "react-icons/go";
import useMe from "../../hooks/me/useMe";
export function UserLayout({ children }) {
   const { data: me, isFetching } = useMe();
   const { user } = me;
   return (
      <main className="flex bg-black">
         <div className="grid w-[300px] top-0 left-0 p-4 h-screen text-white relative mt-20 ">
            <div className="grid h-full">
               <ul className="self-start">
                  <li className="flex flex-col items-start">
                     <UserMenuButton path={`/users/${user.id}/routines`}>
                        <IoIosCreate />
                        My Routines
                     </UserMenuButton>

                     <UserMenuButton path={`/users/${user.id}/dashboard`}>
                        <BsBarChartLineFill />
                        Dashboard
                     </UserMenuButton>
                  </li>
               </ul>
            </div>
            <ul className="self-end">
               <li className="">
                  <UserMenuButton path={`/logout`}>
                     <GoSignOut /> Logout
                  </UserMenuButton>
               </li>
            </ul>
         </div>

         {children}
      </main>
   );
}

export default UserLayout;
