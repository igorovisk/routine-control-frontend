import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import useDeleteTask from "../../../hooks/Tasks/useDeleteTask";
import { TypeTask } from "../../../types";

type DataProps = {
   task: TypeTask;
   routineId: string;
};

function TaskEdit(props: DataProps) {
   const { task, routineId } = props;
   const { mutateAsync } = useDeleteTask();

   const deleteTask = () => {
      mutateAsync({ taskId: task.id, routineId: routineId });
   };

   // TODO WILL TURN TO MODAL

   return (
      <form className=" p-5 m-2 rounded relative bg-gray-100 ml-8 mr-8 ">
         <div className="absolute right-1 top-1 customHover hover:bg-red-600 w-[30px] h-[30px] flex items-center justify-center rounded">
            <AiTwotoneDelete
               size={20}
               className="customHover  "
               onClick={deleteTask}
            />
         </div>

         <h1 className="text-black font-semibold text-lg line-clamp-3">
            {task?.name}
         </h1>
         <h2 className="text-gray-700">{task?.description}</h2>
      </form>
   );
}

export default TaskEdit;
