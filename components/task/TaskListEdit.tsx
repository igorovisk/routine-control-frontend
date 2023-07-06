import React from "react";

import CreateTaskForm from "../form/tasks/CreateTaskForm";
import { useRouter } from "next/router";
import UserLayout from "../layout/UserLayout";

import { TypeRoutine, TypeUser, TypeTask } from "../../types";
import { AiFillEdit, AiFillFileAdd } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import Task from "./TaskEdit";
import TaskCheck from "./task-checker/TaskCheck";
import TaskEdit from "./TaskEdit";

interface TaskListProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function TaskListEdit(props: TaskListProps) {
   const { user, routine } = props;
   const router = useRouter();

   const onSubmit = () => {
      router.push(`/users/${user.id}/dashboard`);
   };

   const createNewTask = () => {};

   return (
      <div className="flex flex-col h-fit">
         {routine && (
            <div
               className={`flex flex-col h-fit gap-4 bg-white rounded w-fit relative`}
            >
               <h1
                  className={`p-5 text-lg ${
                     routine.color !== "white" && routine.color !== "black"
                        ? `bg-${routine.color}-500`
                        : `bg-${routine.color}`
                  }  flex gap-5 items-baseline font-bold`}
               >
                  {routine.name}
                  <button
                     className={`${
                        routine.color === "white" ? "bg-gray-200" : "bg-white"
                     } rounded p-2`}
                  >
                     <AiFillEdit size={20} color="green" />
                  </button>
               </h1>
               {routine.tasks.length > 0 ? (
                  routine.tasks.map((task: TypeTask) => {
                     return <TaskEdit task={task} />;
                  })
               ) : (
                  <p className="p-5 text-center flex items-center justify-center gap-2">
                     <BsListUl />
                     No tasks found
                  </p>
               )}
               <button
                  onClick={createNewTask}
                  className="text-white p-5 text-center rounded bg-green-500 flex items-center justify-center gap-2 font-semibold cursor-pointer"
               >
                  <AiFillFileAdd /> New Task
               </button>
            </div>
         )}
      </div>
   );
}

export default TaskListEdit;
