import React, { useState } from "react";

type DataProps = {
   task: {
      id: string;
      name?: string;
      description?: string;
      checked?: boolean;
   };
};

function TaskEdit(props: DataProps) {
   const { task } = props;
   return (
      <form className="bg-gray-300 p-5 m-2 rounded">
         <h1 className="text-black font-semibold text-lg">{task.name} </h1>
         <h2 className="text-gray-700">{task.description}</h2>
      </form>
   );
}

export default TaskEdit;
