import React, { useState } from "react";

type DataProps = {
   task: {
      id: string;
      name?: string;
      description?: string;
      checked?: boolean;
   };
};

function TaskCheck(props: DataProps) {
   const { task } = props;
   const [checked, setChecked] = useState(false);
   return (
      <form className="bg-black p-5 m-2 rounded">
         <h1 className="text-white text-lg">{task.name} task name</h1>
         <h2 className="text-white">{task.description} task descrp</h2>
         <label id={task.id}>
            <input
               name={task.id}
               id={task.id}
               type="checkbox"
               value={checked.toString()} // Convert boolean to string
               onChange={() => setChecked(!checked)}
            />
         </label>
      </form>
   );
}

export default TaskCheck;
