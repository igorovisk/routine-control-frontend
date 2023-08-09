import React from "react";
import useMe from "../hooks/Me/useMe";

import CreateRoutineForm from "../components/Form/Routines/CreateRoutineForm";
import UserLayout from "../components/Layout/UserDesktopLayout";
import RoutineListCheck from "../components/Routine/RoutineCheck/RoutineListCheck";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import TopMenu from "../components/TopMenu/TopMenu";

export function HomePage() {
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
      <UserLayout user={user}>
         <div className="flex flex-col w-full items-center justify-center ">
            <TopMenu />
            <RoutineListCheck user={user} />
         </div>
      </UserLayout>
   ) : (
      <CreateRoutineForm isNewUser={true} />
   );
}
export default HomePage;
