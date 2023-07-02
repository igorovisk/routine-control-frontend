import React from "react";

interface UserMenuButtonProps {
   children: any;
}

export function UserMenuButton(props: UserMenuButtonProps) {
   return (
      <button
         className={` text-white border-green-500 p-4 rounded flex-1 items-center justify-center flex gap-2`}
      >
         {props.children}
      </button>
   );
}

export default UserMenuButton;
