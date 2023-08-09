import React from "react";
import { IoIosCreate } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import UserMenuButton from "../Button/UserMenuButton";
import { GoSignOut } from "react-icons/go";
import { GiTomato } from "react-icons/gi";
import { useRouter } from "next/router";
import useMe from "../../hooks/Me/useMe";
import { TypeUser } from "../../types";

type UserDesktopLayoutProps = {
   children: any;
   user?: TypeUser;
};
export function UserDesktopLayout({ children, user }: UserDesktopLayoutProps) {
   const router = useRouter();

   return (
      <main className="flex bg-slate-900 pt-20 h-full ">
         <div className="hidden sm:grid w-[300px] top-0 left-0 p-4 text-white relative border-violet-800 border-r-2">
            <div className="grid ">
               <div className="self-start">
                  <ul className="flex flex-col items-start gap-2 pt-10">
                     <li>
                        <UserMenuButton
                           path={`/users/${user?.id}/routines/create-routine`}
                           active={
                              router.pathname === "/users/[userId]/routines"
                           }
                        >
                           <IoIosCreate />
                           Add new Routine
                        </UserMenuButton>
                     </li>
                     <li>
                        <UserMenuButton
                           path={`/home`}
                           active={router.pathname === "/home"}
                        >
                           <IoIosCreate />
                           Check Tasks
                        </UserMenuButton>
                     </li>
                     <li>
                        <UserMenuButton
                           path={`/users/${user?.id}/dashboard`}
                           active={
                              router.pathname === "/users/[userId]/dashboard"
                           }
                        >
                           <BsBarChartLineFill />
                           Dashboard
                        </UserMenuButton>
                     </li>
                     <hr className="flex h-2 border-violet-800 mt-5 w-[50%] justify-start self-start" />
                     <li>
                        <UserMenuButton
                           path={`/pomodoro`}
                           active={router.pathname === "/pomodoro"}
                        >
                           <GiTomato />
                           Pomodoro Timer
                        </UserMenuButton>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="flex justify-center w-full min-h-[100vh] ">
            {children}
         </div>
      </main>
   );
}

export default UserDesktopLayout;
