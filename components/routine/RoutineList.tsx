import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/router";
import useMe from "../../hooks/me/useMe";
import Routine from "./Routine";
import UserLayout from "../layout/UserLayout";
import { TypeRoutine } from "../../types";

function RoutineList() {
   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   return routines.length > 0 ? (
      routines?.map((routine: TypeRoutine) => {
         return <Routine user={user} routine={routine} />;
      })
   ) : (
      <p>oi</p>
   );
}
export default RoutineList;
