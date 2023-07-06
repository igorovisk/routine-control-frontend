import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useMe from "../../hooks/Me/useMe";
import Routine from "./Routine";

import { TypeRoutine } from "../../types";

function RoutineList() {
   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full  bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   return routines.length > 0 ? (
      <div className="flex flex-wrap h-full w-full gap-10 bg-violet-800 p-10 ">
         {routines?.map((routine: TypeRoutine) => {
            return <Routine user={user} key={routine.id} routine={routine} />;
         })}
      </div>
   ) : (
      <p>oi</p>
   );
}
export default RoutineList;
