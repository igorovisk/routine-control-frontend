import { useRouter } from "next/router";
import React from "react";
import UserLayout from "../../../../components/layout/UserLayout";
import { TypeRoutine, TypeUser } from "../../../../types";
import Routine from "../../../../components/routine/Routine";
import useMe from "../../../../hooks/me/useMe";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import RoutineList from "../../../../components/routine/RoutineList";

function Index() {
   console.log("CAIU NA INDEX");
   const { data: me, isFetching } = useMe();
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const router = useRouter();
   const { routineId } = router.query;
   const { routines } = user;

   if (routines.length === 0) {
      router.push(`/home`);
   }

   const routine = routines?.filter(
      (routine: TypeRoutine) => routine.id === routineId
   );
   return (
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
         {routine && <RoutineList />}
      </div>
   );
}

export default Index;
