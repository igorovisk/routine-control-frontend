import { useRouter } from "next/router";
import React from "react";
import { TypeRoutine, TypeUser } from "../../../../../../types";
import Routine from "../../../../../../components/Routine/Routine";

interface IndexProps {
   user: TypeUser;
}

function TasksIndexPage(props: IndexProps) {
   const { user } = props;
   const router = useRouter();
   const { routineId } = router.query;
   const { routines } = user;

   if (routines.length === 0) {
      router.push(`/user/${user.id}/routines`);
   }

   const routine = routines?.filter(
      (routine: TypeRoutine) => routine.id === routineId
   );
   return (
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
         {routine && <Routine user={user} routine={routine} />}
      </div>
   );
}

export default TasksIndexPage;
