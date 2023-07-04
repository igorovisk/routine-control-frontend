import React from "react";

import CreateTaskForm from "../form/tasks/CreateTaskForm";
import { useRouter } from "next/router";
import UserLayout from "../layout/UserLayout";
import Task from "../form/tasks/Task";
import { TypeRoutine, TypeUser, TypeTask } from "../../types";

interface TaskCheckerProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function TaskChecker(props: TaskCheckerProps) {
   const { user, routine } = props;
   const router = useRouter();

   const onSubmit = () => {
      router.push(`/users/${user.id}/dashboard`);
   };

   return (
      <div className="grid w-full bg-slate-800 p-20">
         {routine && (
            <div className="flex flex-col gap-5 bg-white p-6 rounded">
               <h1 className="bg-green-200">{routine.name} NOME DA ROTINAAA</h1>
               {routine.tasks.map((task: TypeTask) => {
                  return <Task task={task} />;
               })}
               <h1 className="text-red">New Task</h1>
            </div>
         )}
      </div>
   );
}

export default TaskChecker;
