import React, { useState } from "react";
import { TypeTaskDoneDate } from "../../../types/taskDoneDate";
import useCheckTask from "../../../hooks/Tasks/useCheckTask";
import { AiFillCheckCircle, AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import useUncheckTask from "../../../hooks/Tasks/useUncheckTask.tsx";
import useDeleteTask from "../../../hooks/Tasks/useDeleteTask";
import { useRouter } from "next/router";

type DataProps = {
   task: {
      id: string;
      name?: string;
      description?: string;
      doneDate?: [];
   };
   routineId: string;
   userId: number;
};

function TaskCheck(props: DataProps) {
   const checkTaskHook = useCheckTask();
   const unCheckTaskHook = useUncheckTask();
   const { mutate: checkTaskMutate } = checkTaskHook;
   const { mutate: uncheckTaskMutate } = unCheckTaskHook;
   const { task, routineId, userId } = props;
   const taskId = task.id;
   const [checked, setChecked] = useState(false);
   const [comment, setComment] = useState("");
   const [commentTab, setCommentTab] = useState(false);
   const router = useRouter();

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

   const checkTaskFn = async (ev: React.MouseEvent<HTMLButtonElement>) => {
      ev.preventDefault();
      checkTaskMutate(task);
      setChecked(!checked);
   };

   const uncheckTestFn = async (ev: React.MouseEvent<HTMLButtonElement>) => {
      ev.preventDefault();
      uncheckTaskMutate(task);
      setChecked(!checked);
   };

   const { mutateAsync } = useDeleteTask();

   const deleteTask = () => {
      mutateAsync({ taskId: task.id, routineId: routineId });
   };

   return (
      <div
         className={`${
            checked ? "bg-green-200" : "bg-slate-200"
         } p-5 m-2 rounded  `}
      >
         <div className="flex flex-col relative">
            <h1 className="text-black font-semibold text-lg">{task.name}</h1>
            <h2 className="text-gray-700">{task.description}</h2>
            <div className="absolute right-1 top-1 customHover w-fit flex items-center justify-center rounded gap-2 ">
               <button
                  onClick={() =>
                     router.push(
                        `users/${userId}/routines/${routineId}/tasks/${taskId}`
                     )
                  }
                  className={`bg-white rounded p-2 hoverItem hover:bg-green-400 hoverItem`}
               >
                  <AiFillEdit size={15} color="green" />
               </button>
               <button
                  onClick={deleteTask}
                  className={`bg-white rounded p-2 hoverItem hover:bg-red-400 hoverItem`}
               >
                  <AiTwotoneDelete size={15} />
               </button>
            </div>
         </div>
         {!checked && (
            <span
               className="flex mt-3 bg-sky-500 font-semibold text-white rounded w-full justify-center p-3 text-center  cursor-pointer hover:bg-sky-400 customHover"
               onClick={() => setCommentTab(!commentTab)}
            >
               Add comment to this day
            </span>
         )}
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
         <div className="flex w-full flex-nowrap mt-5">
            <button
               id={task.id}
               className={`flex justify-center gap-3  ${
                  checked ? "w-[80%] bg-green-500" : "w-full bg-red-400"
               }  items-center  text-green-50  p-3 pl-5 pr-5 cursor-pointer  hover:bg-green-400 customHover rounded-l `}
               onClick={(ev) => checkTaskFn(ev)}
            >
               {!checked ? (
                  <p className="flex items-center gap-2">
                     <AiFillCheckCircle />I did it!
                  </p>
               ) : (
                  <AiFillCheckCircle size={20} />
               )}
            </button>
            {checked && (
               <button
                  id={task.id}
                  className={`flex justify-center w-[20%] gap-3 h-full items-center rounded-r text-green-50 ${"bg-red-400"}  p-3 pl-4 pr-4 cursor-pointer  hover:bg-red-500 customHover`}
                  onClick={(ev) => uncheckTestFn(ev)}
               >
                  {<GiCancel size={20} />}
               </button>
            )}
         </div>
      </div>
   );
}

export default TaskCheck;
