import React from "react";
import { TypeRoutine, TypeUser } from "../../../types";
import RoutineCheck from "./RoutineCheck";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function RoutineListCheck(props: { user: TypeUser }) {
   const { user } = props;
   const { routines } = user;

   return routines.length > 0 ? (
      <div className="flex flex-wrap w-full gap-10 bg-slate-800 rounded justify-center sm:justify-start h-fit sm:p-10 p-5 ">
         {routines?.map((routine: TypeRoutine) => {
            return (
               <RoutineCheck user={user} key={routine.id} routine={routine} />
            );
         })}
      </div>
   ) : (
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
         <AiOutlineLoading3Quarters size={100} color="blue" />;
      </div>
   );
}
export default RoutineListCheck;
