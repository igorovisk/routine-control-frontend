import React from "react";
import useMe from "../hooks/Me/useMe";

import CreateRoutineForm from "../components/Form/Routines/CreateRoutineForm";
import UserLayoutDesktop from "../components/Layout/UserDesktopLayout";
import RoutineListCheck from "../components/Routine/RoutineCheck/RoutineListCheck";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
import TopMenu from "../components/TopMenu/TopMenu";

export function HomePage() {
   const { data: me, isFetching, isLoading } = useMe();

   if (isFetching || isLoading) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading size={50} className={"spinner"} color="white" />;
         </div>
      );
   }

   const { user } = me;
   const { routines } = user;
   console.log(user, "user");

   return (
      <UserLayoutDesktop user={user}>
         {routines.length > 0 ? (
            <div className="flex flex-col w-full items-center justify-center h-full">
               <TopMenu />
               <RoutineListCheck user={user} />
            </div>
         ) : (
            <CreateRoutineForm
               isNewUser={new Date(user.createdAt) > new Date()}
            />
         )}
      </UserLayoutDesktop>
   );
}
export default HomePage;
