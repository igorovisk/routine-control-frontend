import { useRouter } from "next/router";
import React from "react";

interface UserMenuButtonProps {
   children: any;
   path: string;
   textColor?: string;
   fontSize?: string;
   className?: string;
}

export function UserMenuButton(props: UserMenuButtonProps) {
   const router = useRouter();

   return (
      <button
         className={` border-green-500 p-4 rounded flex-1 items-center justify-center text-left flex gap-2 hover:text-green-500 ${props.className}`}
         onClick={() => router.push(props.path)}
      >
         {props.children}
      </button>
   );
}

export default UserMenuButton;
