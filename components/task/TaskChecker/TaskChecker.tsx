import React, { useState } from "react";

import { useRouter } from "next/router";

import { AiFillDelete, AiFillEdit, AiFillFileAdd } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import TaskCheck from "./TaskCheck";
import { TypeRoutine, TypeTask, TypeUser } from "../../../types";
import CreateTaskForm from "../../Form/Tasks/CreateTaskForm";
import useDeleteRoutine from "../../../hooks/Routines/useDeleteRoutine";

interface TaskCheckerProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function TaskChecker(props: TaskCheckerProps) {
   const router = useRouter();
   const { user, routine } = props;
   const [displayNewTaskForm, setDisplayNewTaskForm] = useState(false);
   const deleteHook = useDeleteRoutine();

   const deleteRoutine = async () => {
      try {
         await deleteHook.mutateAsync(routine.id);
         console.log("Routine deleted successfully!");
      } catch (error) {
         console.error("Error deleting routine:", error);
      }
   };
   console.log(displayNewTaskForm, "display");

   return routine ? (
      <div
         className={`flex flex-col h-fit gap-4 bg-white rounded  max-w-[400px] min-w-[200px] w-[400px] shadow-2xl  shadow-black `}
      >
         <h1
            className={`p-5 text-xl bg-slate-100 flex gap-5 items-baseline font-bold  justify-between rounded-t`}
         >
            <span className="flex gap-2 items-center">
               <div
                  className={`w-[20px] h-[20px] rounded-full ${
                     routine.color !== "white" && routine.color !== "black"
                        ? `bg-${routine.color}`
                        : `bg-${routine.color}`
                  }`}
               ></div>
               <p className="line-clamp-3">{routine.name}</p>
            </span>

            <div className="flex gap-2">
               <button
                  className={`${
                     routine.color === "white" ? "bg-gray-200" : "bg-white"
                  } rounded p-2 hoverItem hover:bg-${routine.color} hoverItem`}
                  onClick={() =>
                     router.push(`users/${user.id}/routines/${routine.id}`)
                  }
               >
                  <AiFillEdit size={20} color="green" />
               </button>
               <button
                  className={`${
                     routine.color === "white" ? "bg-gray-200" : "bg-white"
                  } rounded p-2 hoverItem hover:bg-red-600`}
                  onClick={deleteRoutine}
               >
                  <AiFillDelete size={20} color="black" />
               </button>
            </div>
         </h1>
         {routine.tasks.length > 0 ? (
            routine.tasks.map((task: TypeTask) => {
               return (
                  <TaskCheck key={task.id} task={task} routineId={routine.id} />
               );
            })
         ) : (
            <p className="p-5 text-center flex items-center justify-center gap-2">
               <BsListUl />
               No tasks found...
            </p>
         )}

         <div className="flex justify-end pr-2 pb-2">
            <div
               onClick={() => setDisplayNewTaskForm(!displayNewTaskForm)}
               className="text-white z-10 hoverItem bg-gradient-to-br from-green-400 to-green-600  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
               <AiFillFileAdd />
            </div>
         </div>

         {displayNewTaskForm && (
            <div className="flex flex-col mt-[-5rem]">
               <CreateTaskForm routine={routine} />
            </div>
         )}
      </div>
   ) : null;
}

export default TaskChecker;
