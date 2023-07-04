import React from "react";
import RoutineForm from "../components/form/routines/CreateRoutineForm";
import useMe from "../hooks/me/useMe";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Dashboard from "../components/dashboard/Dashboard";
import { useRouter } from "next/router";
import Routine from "../components/routine/Routine";
import CreateRoutineForm from "../components/form/routines/CreateRoutineForm";
import RoutineList from "../components/routine/RoutineList";
import UserLayout from "../components/layout/UserLayout";

function Home() {
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
      <UserLayout>
         <RoutineList />
      </UserLayout>
   ) : (
      <CreateRoutineForm />
   );
}
export default Home;
