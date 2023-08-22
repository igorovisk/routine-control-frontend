import React from "react";

import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

import useMe from "../../../../../../hooks/Me/useMe";
import UserLayout from "../../../../../../components/Layout/UserDesktopLayout";
import { useRouter } from "next/router";
import EditTaskForm from "../../../../../../components/Form/Tasks/EditTaskForm";
import { TypeTask } from "../../../../../../types";

function TaskIdPage() {
   const { data: me, isFetching } = useMe();
   const router = useRouter();
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading size={50} className={"spinner"} color="white" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   const { tasks } = routines;
   const { taskId, routineId } = router.query;

   const task = tasks?.filter((task: TypeTask) => taskId === task.id);

   if (routines.length === 0) router.push("/home");
   return (
      <UserLayout user={user}>
         <EditTaskForm task={task} routineId={routineId as string} />
      </UserLayout>
   );
}
export default TaskIdPage;
