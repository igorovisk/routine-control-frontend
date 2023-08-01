import React, { useState } from "react";
import { BsListUl } from "react-icons/bs";
import TaskEdit from "./TaskEdit";
import useDeleteRoutine from "../../hooks/Routines/useDeleteRoutine";
import { TypeRoutine, TypeTask, TypeUser } from "../../types";
import { useRouter } from "next/router";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

interface TaskListProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function TaskListEdit(props: TaskListProps) {
   const [isDropdownVisible, setDropdownVisibility] = useState(false);
   const router = useRouter();
   const deleteHook = useDeleteRoutine();
   const { user, routine } = props;
   const toggleDropdown = () => {
      setDropdownVisibility((prevState) => !prevState);
   };

   const onSubmit = () => {
      router.push(`/users/${user.id}/dashboard`);
   };

   const deleteRoutine = async () => {
      try {
         await deleteHook.mutateAsync(routine.id);
         console.log("Routine deleted successfully!");
      } catch (error) {
         console.error("Error deleting routine:", error);
      }
   };

   const createNewTask = () => {
      console.log("Create a new task logic goes here!");
   };

   return (
      <div className="flex flex-col h-fit rounded w-[100%]">
         {routine && (
            <div
               className={`flex flex-col h-fit gap-4 bg-white rounded  relative`}
            >
               <h1
                  className={`p-5 text-xl ${
                     routine.color !== "white" && routine.color !== "black"
                        ? `${routine.color}`
                        : `${routine.color}`
                  }  flex gap-5 items-baseline font-bold rounded justify-between text-ellipsis whitespace-nowrap overflow-hidden line-clamp-3`}
               >
                  <p className="line-clamp-3">{routine.name}</p>
                  <div className="flex gap-2">
                     <button
                        className={`${
                           routine.color === "white"
                              ? "bg-gray-200"
                              : "bg-white"
                        } rounded p-2 customHover hover:bg-green-300`}
                     >
                        <AiFillEdit size={20} color="green" />
                     </button>
                     <button
                        className={`${
                           routine.color === "white"
                              ? "bg-gray-200"
                              : "bg-white"
                        } rounded p-2 customHover hover:bg-red-600`}
                        onClick={deleteRoutine}
                     >
                        <AiFillDelete size={20} color="black" />
                     </button>
                  </div>
               </h1>
               <div
                  className="flex justify-between relative items-center gap-2 p-5 bg-sky-300 focus:bg-sky-400 focus:text-gray-200 customHover hover:bg-sky-400 "
                  onClick={toggleDropdown}
               >
                  <div className="flex text-center w-full justify-center items-center ">
                     <h1 className="font-bold text-xl">Tasks</h1>
                  </div>
                  <button
                     className={`${
                        routine.color === "white" ? "bg-gray-200" : "bg-white"
                     } rounded p-2`}
                  >
                     {isDropdownVisible ? "▲" : "▼"}
                  </button>
               </div>

               {isDropdownVisible &&
                  (routine.tasks.length > 0 ? (
                     routine.tasks.map((task: TypeTask) => {
                        return (
                           <TaskEdit
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
                  ))}

               <button
                  onClick={createNewTask}
                  className="text-white p-5 text-center rounded bg-green-500 flex items-center justify-center gap-2 font-semibold customHover hover:bg-green-400"
               >
                  Create New Task
               </button>
            </div>
         )}
      </div>
   );
}

export default TaskListEdit;
