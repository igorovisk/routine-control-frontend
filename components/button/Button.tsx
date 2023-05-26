import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
   bgColor?: string;
   children: string;
   handleClick?: () => void;
   type: "submit" | "button" | "reset";
   hoverBgColor?: string;
   className?: string;
}

function Button(props: ButtonProps) {
   return (
      <button
         type={props.type}
         className={`text-xl text-white border-green-500 p-4 rounded ${props.bgColor} flex-1 items-center justify-center flex gap-2 hover:bg-${props.hoverBgColor}`}
         onClick={props.handleClick}
      >
         {props.children}
      </button>
   );
}

export default Button;
