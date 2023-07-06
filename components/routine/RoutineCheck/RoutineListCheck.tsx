import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Routine from "./RoutineCheck";
import { TypeRoutine } from "../../../types";
import useMe from "../../../hooks/Me/useMe";
import RoutineCheck from "./RoutineCheck";

function RoutineListCheck() {
   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full  bg-slate-900 p-20 rounded">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   return routines.length > 0 ? (
      <div className="flex flex-wrap h-full w-full gap-10 bg-violet-800 p-10 rounded">
         {routines?.map((routine: TypeRoutine) => {
            return (
               <RoutineCheck user={user} key={routine.id} routine={routine} />
            );
         })}
      </div>
   ) : (
      <p>oi</p>
   );
}
export default RoutineListCheck;
