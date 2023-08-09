import React from "react";
import Button from "../Button/Button";

function TopMenu() {
   return (
      <div className="flex bg-slate-900  w-full mr-5 ml-5 h-full p-5 pl-10 gap-2 justify-start items-center pt-10  ">
         <span className="w-fit flex gap-5">
            <Button
               className="text-white w-fit hover:bg-violet-400 font-bold "
               bgColor="bg-violet-500"
               type={"button"}
            >
               GAMIFICATION
            </Button>
         </span>
      </div>
   );
}

export default TopMenu;
