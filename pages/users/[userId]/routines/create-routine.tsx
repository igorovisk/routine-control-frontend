import React from "react";

import CreateRoutineForm from "../../../../components/Form/Routines/CreateRoutineForm";
import useMe from "../../../../hooks/Me/useMe";
import { AiOutlineLoading } from "react-icons/ai";
import UserDesktopLayout from "../../../../components/Layout/UserDesktopLayout";

function CreateRoutinePage() {
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
   return (
      <UserDesktopLayout>
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
            <CreateRoutineForm isNewUser={routines.length === 0} />
         </div>
      </UserDesktopLayout>
   );
}

export default CreateRoutinePage;
