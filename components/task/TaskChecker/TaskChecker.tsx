import React, { useState } from "react";

import { useRouter } from "next/router";

import { AiFillEdit, AiFillFileAdd } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import TaskCheck from "./TaskCheck";
import { TypeRoutine, TypeTask, TypeUser } from "../../../types";
import CreateTaskForm from "../../Form/Tasks/CreateTaskForm";

interface TaskCheckerProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function TaskChecker(props: TaskCheckerProps) {
   const router = useRouter();
   const { user, routine } = props;
   const [displayNewTaskForm, setDisplayNewTaskForm] = useState(false);

   return (
      <div className="flex flex-col h-fit rounded">
         {routine && (
            <div
               className={`flex flex-col h-fit gap-4 bg-white rounded w-fit  max-w-[400px] min-w-[400px] `}
            >
               <h1
                  className={`p-5 text-xl ${
                     routine.color !== "white" && routine.color !== "black"
                        ? `bg-${routine.color}`
                        : `bg-${routine.color}`
                  }  flex gap-5 items-baseline font-bold rounded justify-between `}
               >
                  <p className="line-clamp-3">{routine.name}</p>

                  <button
                     className={`${
                        routine.color === "white" ? "bg-gray-200" : "bg-white"
                     } rounded p-2 customHover hover:bg-gray-200`}
                     onClick={() => router.push(`users/${user.id}/routines`)}
                  >
                     <AiFillEdit size={20} color="green" />
                  </button>
               </h1>
               {routine.tasks.length > 0 ? (
                  routine.tasks.map((task: TypeTask) => {
                     return (
                        <TaskCheck
                           key={task.id}
                           task={task}
                           routineId={routine.id}
                        />
                     );
                  })
               ) : (
                  <p className="p-5 text-center flex items-center justify-center gap-2">
                     <BsListUl />
                     No tasks found...
                  </p>
               )}
               {!displayNewTaskForm && (
                  <div
                     onClick={() => setDisplayNewTaskForm(!displayNewTaskForm)}
                     className="text-white p-5 text-center rounded bg-green-500 flex items-center justify-center gap-2 font-semibold customHover hover:bg-green-400"
                  >
                     <AiFillFileAdd /> New Task
                  </div>
               )}
               {displayNewTaskForm && (
                  <div className="flex flex-col mt-[-5rem]">
                     <CreateTaskForm user={user} routine={routine} />
                  </div>
               )}
            </div>
         )}
      </div>
   );
}

export default TaskChecker;
