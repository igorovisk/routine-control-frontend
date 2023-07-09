import React from "react";
import { useState } from "react";
import { GiDeskLamp } from "react-icons/gi";
import Button from "../../Button/Button";
import useTasks from "../../../hooks/Tasks/usePostTask";
import { TypeRoutine, TypeUser } from "../../../types";
import { useRouter } from "next/router";
import useMe from "../../../hooks/Me/useMe";
import { useMutation } from "@tanstack/react-query";
import usePostTask from "../../../hooks/Tasks/usePostTask";

interface CreateTaskFormProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function CreateTaskForm(props: CreateTaskFormProps) {
   const hook = usePostTask();
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const { user, routine } = props;
   const [routineId, setRoutineId] = useState(routine.id);
   const router = useRouter();

   const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();

      const newTask = {
         routineId,
         name,
         description,
      };
      hook.mutateAsync(newTask);
   };

   return (
      <div className="flex flex-col p-10 rounded bg-slate-100 justify-center items-center mt-16">
         {routine.tasks.length === 0 ? (
            <>
               <GiDeskLamp size={100} />
               <h1 className="font-bold bg-amber-200 p-5 rounded-xl text-lg mt-2 mb-10">
                  This is your brand new routine, you can now create the tasks
                  to be accomplished and monitore your progress
               </h1>
            </>
         ) : null}

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
                  required
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
