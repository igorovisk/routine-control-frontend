import React from "react";
import { useState } from "react";
import { GiDeskLamp } from "react-icons/gi";
import Button from "../../button/Button";
import useRoutines from "../../../hooks/routines/useRoutines";
import useTasks from "../../../hooks/tasks/useTasks";

type User = {
   routines: any;
   id: number;
   fullname: string;
   login: string;
   email: string;
   admin: boolean;
   active: boolean;
   createdAt: string;
};

interface CreateTaskFormProps {
   user: User;
}

function CreateTaskForm(props: CreateTaskFormProps) {
   const hook = useTasks();
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const { user } = props;
   const routine = user.routines[0];

   const onSubmit = (e) => {
      const newRoutine = {
         name,
         description,
      };

      hook.postTask(newRoutine, routine.id);
   };
   return (
      //If Routine is already created, display message: Seems like you already have a routine, do you want to edit it?

      <div className="flex flex-col p-10 rounded bg-slate-100 justify-center items-center mt-16">
         <GiDeskLamp size={100} />
         <h1 className="font-bold bg-amber-200 p-5 rounded-xl text-lg mt-2 mb-10">
            {routine.tasks.length === 0
               ? "This is your brand new routine, you can now create the tasks to be accomplished and monitore your progress"
               : "Time to rock! Fill the tasks boxes to set each task as checked!"}
         </h1>

         <form
            className="flex mt-5 flex-col p-6 rounded border-lg-yellow-400 gap-3 justify-center items-center w-full"
            onSubmit={onSubmit}
         >
            <label className="w-full flex flex-col justify-center items-center gap-1 rounded">
               <h3 className="font-bold">Task Name</h3>
               <input
                  className="rounded w-full focus:border-amber-100 p-2"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
               ></input>
            </label>
            <label className="w-full flex flex-col justify-center items-center gap-1 ">
               <h3 className="font-bold">Description</h3>
               <textarea
                  className="rounded w-full p-2"
                  name="description"
                  id="description"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
               ></textarea>
            </label>

            <Button bgColor="bg-green-500 min-w-[300px] mt-5" type="submit">
               Create Task
            </Button>
         </form>
      </div>
   );
}

export default CreateTaskForm;
