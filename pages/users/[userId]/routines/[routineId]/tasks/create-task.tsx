import React from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import CreateTaskForm from "../../../../../../components/form/Tasks/CreateTaskForm";
import useMe from "../../../../../../hooks/Me/useMe";
import CreateRoutineForm from "../../../../../../components/Form/Routines/CreateRoutineForm";
import UserLayout from "../../../../../../components/Layout/UserDesktopLayout";
import { useRouter } from "next/router";
import { TypeRoutine } from "../../../../../../types";

function CreateTaskPage() {
   const { data: me, isFetching } = useMe();
   const router = useRouter();
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   const { routineId } = router.query;

   const routine = routines?.filter(
      (routine: TypeRoutine) => routine.id === routineId
   );
   return (
      <UserLayout>
         {routines && routines?.length === 0 ? (
            <CreateRoutineForm />
         ) : (
            <CreateTaskForm user={user} routine={routine} />
         )}
      </UserLayout>
   );
}
export default CreateTaskPage;
