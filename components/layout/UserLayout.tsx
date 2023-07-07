import React from "react";
import { IoIosCreate } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import UserMenuButton from "../Button/UserMenuButton";
import { GoSignOut } from "react-icons/go";
import useMe from "../../hooks/Me/useMe";

export function UserLayout({ children }) {
   return (
      <main className="flex bg-black ">
         <div className="grid w-[300px] top-0 left-0 p-4 h-screen text-white relative mt-20 ">
            <div className="grid h-full">
               <ul className="self-start">
                  <li className="flex flex-col items-start">
                     <UserMenuButton path={`/users/:userid/routines`}>
                        <IoIosCreate />
                        My Routines
                     </UserMenuButton>

                     <UserMenuButton path={`/users/:userid/dashboard`}>
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
         <div className="mt-[8rem] flex justify-center w-full"> {children}</div>
      </main>
   );
}

export default UserLayout;
