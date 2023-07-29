import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useMe from "../../hooks/Me/useMe";
import Routine from "./Routine";

import { TypeRoutine } from "../../types";

function RoutineList() {
   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-slate-900  rounded">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   return routines.length > 0 ? (
      <div className="flex flex-wrap  h-full gap-10 bg-gray-700 p-10 flex-col  items-center mt-10 sm:w-full ">
         {routines?.map((routine: TypeRoutine) => {
            return <Routine user={user} key={routine.id} routine={routine} />;
         })}
      </div>
   ) : (
      <p>oi</p>
   );
}
export default RoutineList;
