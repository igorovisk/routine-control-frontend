import React from "react";
import { IoIosCreate } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import UserMenuButton from "../button/UserMenuButton";
import { GoSignOut } from "react-icons/go";
export function UserLayout({ children }) {
   return (
      <main className="flex bg-black">
         <div className="grid w-[300px] top-0 left-0 p-4 h-screen text-white relative mt-20 ">
            <div className="grid h-full">
               <ul className="self-start">
                  <li className="flex flex-col items-start">
                     <UserMenuButton>
                        <IoIosCreate />
                        New Task
                     </UserMenuButton>

                     <UserMenuButton>
                        <BsBarChartLineFill />
                        Monitor
                     </UserMenuButton>
                  </li>
               </ul>
            </div>
            <ul className="self-end">
               <li className="">
                  <UserMenuButton>
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
