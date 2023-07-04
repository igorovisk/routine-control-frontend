import { useRouter } from "next/router";
import React from "react";

interface UserMenuButtonProps {
   children: any;
   path: string;
}

export function UserMenuButton(props: UserMenuButtonProps) {
   const router = useRouter();
   return (
      <button
         className={` text-white border-green-500 p-4 rounded flex-1 items-center justify-center flex gap-2`}
         onClick={() => router.push(props.path)}
      >
         {props.children}
      </button>
   );
}

export default UserMenuButton;
