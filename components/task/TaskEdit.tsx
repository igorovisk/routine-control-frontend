import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import useDeleteTask from "../../hooks/Tasks/useDeleteTask";

type DataProps = {
   task: {
      id: string;
      name?: string;
      description?: string;
      checked?: boolean;
   };
   routineId: string;
};

function TaskEdit(props: DataProps) {
   const { task, routineId } = props;
   const { mutateAsync } = useDeleteTask();

   const deleteTask = () => {
      mutateAsync({ taskId: task.id, routineId: routineId });
   };

   return (
      <form className=" p-5 m-2 rounded relative bg-green-200">
         <AiTwotoneDelete
            size={20}
            className="absolute right-1 top-1 cursor-pointer"
            onClick={deleteTask}
         />
         <h1 className="text-black font-semibold text-lg">{task.name} </h1>
         <h2 className="text-gray-700">{task.description}</h2>
      </form>
   );
}

export default TaskEdit;
