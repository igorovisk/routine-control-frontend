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
      <form className="bg-black p-5 m-2 rounded">
         <h1 className="text-white text-lg">{task.name} task name</h1>
         <h2 className="text-white">{task.description} task descrp</h2>
      </form>
   );
}

export default TaskEdit;
