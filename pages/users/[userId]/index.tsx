import React from "react";

import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
import useMe from "../../../hooks/Me/useMe";

import CreateRoutineForm from "../../../components/Form/Routines/CreateRoutineForm";
import Dashboard from "./dashboard";

function UserIdIndexPage() {
   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading size={50} className={"spinner"} color="white" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   return routines && routines?.length === 0 ? (
      <CreateRoutineForm isNewUser={false} />
   ) : (
      <Dashboard />
   );
}
export default UserIdIndexPage;
