import React from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import CreateTaskForm from "../../../../../../components/form/tasks/CreateTaskForm";
import useMe from "../../../../../../hooks/me/useMe";
import CreateRoutineForm from "../../../../../../components/form/routines/CreateRoutineForm";
import UserLayout from "../../../../../../components/layout/UserLayout";
import { useRouter } from "next/router";
import { TypeRoutine } from "../../../../../../types";
function NewTask() {
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
export default NewTask;
