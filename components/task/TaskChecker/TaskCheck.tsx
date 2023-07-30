import React, { useState } from "react";
import { TypeTaskDoneDate } from "../../../types/taskDoneDate";
import useCheckTask from "../../../hooks/Tasks/useCheckTask";

type DataProps = {
   task: {
      id: string;
      name?: string;
      description?: string;
      doneDate?: [];
   };
   routineId: string;
};

function TaskCheck(props: DataProps) {
   const checkTask = useCheckTask();
   const { mutateAsync } = checkTask;
   const { task, routineId } = props;
   const [checked, setChecked] = useState(false);
   const [comment, setComment] = useState("");
   const [commentTab, setCommentTab] = useState(false);

   function formatDate(input: Date) {
      const date = new Date(input);
      const year = date.getUTCFullYear();
      const month = String(date?.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date?.getUTCDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
   }
   React.useEffect(() => {
      task?.doneDate.forEach((dbDate: TypeTaskDoneDate) => {
         const formattedDbDate = formatDate(dbDate.checkDate);
         const today = formatDate(new Date());
         if (today === formattedDbDate) {
            setChecked(true);
         }
      });
   });
   const checkTest = (ev: React.MouseEvent<HTMLButtonElement>) => {
      ev.preventDefault();
      setChecked(!checked);
      mutateAsync(task);
   };

   return (
      <div
         className={`${
            checked ? "bg-green-200" : "bg-amber-300"
         } p-5 m-2 rounded  `}
      >
         <h1 className="text-black font-semibold text-lg">{task.name}</h1>
         <h2 className="text-gray-700">{task.description}</h2>
         <span
            className="flex mt-3 p-2 bg-amber-400 rounded w-fit text-gray-600 cursor-pointer hover:bg-amber-300 customHover"
            onClick={() => setCommentTab(!commentTab)}
         >
            Add comment
         </span>
         {commentTab && (
            <label
               id={task.id}
               className="flex justify-center gap-3 w-fit items-center mt-5 text-green-50 bg-green-500 rounded p-3 pl-5 pr-5 "
            >
               <input
                  name={task.id}
                  id={task.id}
                  className="text-black p-2 min-h-[100px] rounded"
                  placeholder="Was it easy? Hard?"
                  maxLength={300}
                  type="textarea"
                  value={comment} // Convert boolean to string
                  onChange={(ev) => setComment(ev.target.value)}
               />
            </label>
         )}
         <button
            id={task.id}
            className={`flex justify-center gap-3 w-fit items-center mt-5 text-green-50 ${
               checked ? "bg-green-500" : "bg-red-400"
            } rounded p-3 pl-5 pr-5 cursor-pointer  hover:bg-green-400 customHover`}
            onClick={(ev) => checkTest(ev)}
         >
            {!checked ? "I did it!" : "Done"}
         </button>
      </div>
   );
}

export default TaskCheck;
