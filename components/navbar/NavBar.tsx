import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import useMe from "../../hooks/Me/useMe";
import UserMenuButton from "../Button/UserMenuButton";
import { IoIosCreate } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import useLogout from "../../hooks/Auth/useLogout";

export function NavBar() {
   const { data: me, isFetching, isLoading } = useMe();
   const [openedMenu, setOpenedMenu] = useState(false);
   const [navTextColor, setNavTextColor] = useState("white");
   const [navBgColor, setNavBgColor] = useState("black");

   const { handleLogout } = useLogout();
   useEffect(() => {
      const changeColors = () => {
         if (window.scrollY > 90) {
            setNavTextColor("black");
            setNavBgColor("white");
         } else {
            setNavTextColor("white");
            setNavBgColor("black");
         }
      };

      window.addEventListener("scroll", changeColors);
   }, []);

   return (
      <nav className={`fixed top-0 left-0 ease-in duration-300 z-10 w-full `}>
         <div
            className={`flex items-center justify-between p-5 z-[2] text-${navTextColor}`}
            style={{ backgroundColor: navBgColor }}
         >
            <Link href="/">
               <h1 className="font-bold text-2xl">RoutineWorks</h1>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center ">
               {me?.user && (
                  <>
                     <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                     />
                     <li className="p-4">
                        <Link href={`/users/${me.user.id}/profile`}>
                           {me.user.fullname}
                        </Link>
                     </li>
                     <li className="p-4 font-bold">|</li>
                  </>
               )}
               <li className="p-4">
                  <Link href="/home">Home</Link>
               </li>
               <li className="p-4">
                  <Link href="/documentation">Documentation</Link>
               </li>
               <li className="p-4">
                  <Link href="/contact">Contact</Link>
               </li>
               {me?.isLoggedIn && (
                  <li
                     className="p-4 flex items-center gap-2 cursor-pointer hover:text-red-400"
                     onClick={handleLogout}
                  >
                     <GoSignOut /> Logout
                  </li>
               )}
            </ul>

            {/* Hamburguer Button */}
            <div
               className="block md:hidden z-10"
               onClick={() => setOpenedMenu(!openedMenu)}
            >
               {openedMenu ? (
                  <AiOutlineClose
                     size={35}
                     className="cursor-pointer hover:text-amber-300 duration-300"
                     onClick={() => setOpenedMenu(!openedMenu)}
                  />
               ) : (
                  <AiOutlineMenu
                     size={35}
                     className="cursor-pointer hover:text-amber-300 duration-300"
                  />
               )}
            </div>

            {/* Mobile Menu */}

            <div
               className={
                  openedMenu
                     ? `md:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 text-${navTextColor}`
                     : `md:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 text-${navTextColor}`
               }
               style={{ backgroundColor: navBgColor }}
            >
               <ul
                  className={`flex flex-col justify-start gap-10 text-${navTextColor} h-fit`}
               >
                  <li
                     className="p-4 text-2xl"
                     onClick={() => setOpenedMenu(false)}
                  >
                     <Link href="/">Home</Link>
                  </li>
                  <li
                     className="p-4 text-2xl"
                     onClick={() => setOpenedMenu(false)}
                  >
                     <Link href="/documentation">Documentation</Link>
                  </li>
                  <li
                     className="p-4 text-2xl"
                     onClick={() => setOpenedMenu(false)}
                  >
                     <Link href="/contact">Contact</Link>
                  </li>
                  {me?.isLoggedIn && (
                     <>
                        <li
                           className="flex items-center gap-2 cursor-pointer p-4 text-2xl m-auto"
                           onClick={() => {
                              setOpenedMenu(false);
                              return handleLogout();
                           }}
                        >
                           <GoSignOut /> Logout
                        </li>
                        <hr className="flex h-2 text-white w-full mt-10" />
                        <li onClick={() => setOpenedMenu(false)}>
                           <UserMenuButton
                              path={`/users/:userid/routines`}
                              textColor={navTextColor}
                              fontSize="text-2xl"
                           >
                              <IoIosCreate />
                              Edit Routines/Tasks
                           </UserMenuButton>
                        </li>
                        <li onClick={() => setOpenedMenu(false)}>
                           <UserMenuButton
                              path={`/users/:userid/dashboard`}
                              textColor={navTextColor}
                              fontSize="text-2xl"
                           >
                              <BsBarChartLineFill />
                              Dashboard
                           </UserMenuButton>
                        </li>
                     </>
                  )}
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
