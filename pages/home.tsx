import React, { useEffect, useState } from "react";
import useMe from "../hooks/Me/useMe";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import CreateRoutineForm from "../components/Form/Routines/CreateRoutineForm";
import UserLayout from "../components/Layout/UserLayout";
import RoutineListCheck from "../components/Routine/RoutineCheck/RoutineListCheck";

function HomePage() {
   const { data: me, isFetching, isLoading } = useMe();
   if (isFetching || isLoading) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }

   const { user } = me;
   const { routines } = user;

   return routines.length > 0 ? (
      <UserLayout>
         <RoutineListCheck user={user} />
      </UserLayout>
   ) : (
      <CreateRoutineForm />
   );
}
export default HomePage;
