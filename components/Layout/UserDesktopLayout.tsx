import React from "react";
import { IoIosCreate } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import UserMenuButton from "../Button/UserMenuButton";
import { GoSignOut } from "react-icons/go";
import { GiTomato } from "react-icons/gi";

export function UserDesktopLayout({ children }) {
   return (
      <main className="flex bg-black pt-20">
         <div className="hidden sm:grid  w-[300px] top-0 left-0 p-4 h-screen text-white relative ">
            <div className="grid h-full  ">
               <ul className="self-start">
                  <li className="flex flex-col items-start ">
                     <UserMenuButton path={`/users/:userid/routines`}>
                        <IoIosCreate />
                        Edit Routine/Tasks
                     </UserMenuButton>

                     <UserMenuButton path={`/users/:userid/dashboard`}>
                        <BsBarChartLineFill />
                        Dashboard
                     </UserMenuButton>
                     <hr className="flex h-2 border-amber-500 mt-5 w-[50%] justify-start self-start" />
                     <UserMenuButton path={`/pomodoro`}>
                        <GiTomato />
                        Pomodoro Timer
                     </UserMenuButton>
                  </li>
               </ul>
            </div>
         </div>
         <div className="flex justify-center w-full"> {children}</div>
      </main>
   );
}

export default UserDesktopLayout;
