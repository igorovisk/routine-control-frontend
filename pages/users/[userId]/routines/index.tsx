import { useRouter } from "next/router";
import React from "react";
import UserLayout from "../../../../components/layout/UserLayout";
import { TypeRoutine, TypeUser } from "../../../../types";
import Routine from "../../../../components/routine/Routine";
import useMe from "../../../../hooks/me/useMe";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import RoutineList from "../../../../components/routine/RoutineList";

function RoutinesIndexPage() {
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
   const { routines } = user;

   if (routines.length === 0) {
      router.push(`/home`);
   }

   return (
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-violet-500 p-20">
         <RoutineList />
      </div>
   );
}

export default RoutinesIndexPage;
