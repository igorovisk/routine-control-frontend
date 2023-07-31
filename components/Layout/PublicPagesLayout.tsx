import React from "react";
import { IoIosCreate } from "react-icons/io";
import { BsBarChartLineFill } from "react-icons/bs";
import UserMenuButton from "../Button/UserMenuButton";
import { GoSignOut } from "react-icons/go";

export function PublicPagesLayout({ children }) {
   return (
      <main className="flex bg-black w-full h-fit mt-[6rem]">{children}</main>
   );
}

export default PublicPagesLayout;
