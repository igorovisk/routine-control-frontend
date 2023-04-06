import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import useAuth from "../hooks/useAuth";
function NavBar() {
   const [openedMenu, setOpenedMenu] = useState(false);
   const [navTextColor, setNavTextColor] = useState("white");
   const [navBgColor, setNavBgColor] = useState("black");
   const { handleLogout } = useAuth();
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
            className={`flex items-center justify-between p-4  z-[2] text-${navTextColor}`}
            style={{ backgroundColor: navBgColor }}
         >
            <Link href="/">
               <h1 className="font-bold text-4xl">RoutineWorks</h1>
            </Link>
            <ul className="hidden sm:flex ">
               <li className="p-4">
                  <Link href="/">Home</Link>
               </li>
               <li className="p-4">
                  <Link href="/documentation">Documentation</Link>
               </li>
               <li className="p-4">
                  <Link href="/contact">Contact</Link>
               </li>
               <li
                  className="p-4 flex items-center gap-2 cursor-pointer hover:text-red-400"
                  onClick={handleLogout}
               >
                  <GoSignOut /> Logout
               </li>
            </ul>

            {/* Hamburguer Button */}
            <div
               className="block sm:hidden z-10"
               onClick={() => setOpenedMenu(!openedMenu)}
            >
               {openedMenu ? (
                  <AiOutlineClose
                     size={20}
                     className="cursor-pointer hover:text-amber-300 duration-300"
                     onClick={() => setOpenedMenu(!openedMenu)}
                  />
               ) : (
                  <AiOutlineMenu
                     size={20}
                     className="cursor-pointer hover:text-amber-300 duration-300"
                  />
               )}
            </div>

            {/* Mobile Menu */}

            <div
               className={
                  openedMenu
                     ? `sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 text-${navTextColor}`
                     : `sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300 text-${navTextColor}`
               }
               style={{ backgroundColor: navBgColor }}
            >
               <ul className={`justify-start gap-10 text-${navTextColor}`}>
                  <li className="p-4 text-4xl">
                     <Link href="/">Home</Link>
                  </li>
                  <li className="p-4 text-4xl">
                     <Link href="/documentation">Documentation</Link>
                  </li>
                  <li className="p-4 text-4xl">
                     <Link href="/contact">Contact</Link>
                  </li>
                  <div
                     className="p-4 flex items-center gap-2 cursor:pointer"
                     onClick={handleLogout}
                  >
                     <GoSignOut /> Logout
                  </div>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
