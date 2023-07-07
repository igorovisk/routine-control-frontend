import { useRouter } from "next/router";
import React from "react";
import useMe from "../../hooks/Me/useMe";

interface UserMenuButtonProps {
   children: any;
   path: string;
   textColor?: string;
   fontSize?: string;
}

export function UserMenuButton(props: UserMenuButtonProps) {
   const router = useRouter();

   return (
      <button
         className={`${props.fontSize} text-${
            props.textColor ? props.textColor : "white"
         } border-green-500 p-4 rounded flex-1 items-center justify-center flex gap-2 hover:text-green-500`}
         onClick={() => router.push(props.path)}
      >
         {props.children}
      </button>
   );
}

export default UserMenuButton;
