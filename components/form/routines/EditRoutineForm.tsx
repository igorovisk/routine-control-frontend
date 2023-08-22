import React from "react";
import { useState } from "react";
import { GiDeskLamp } from "react-icons/gi";
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import usePostRoutine from "../../../hooks/Routines/usePostRoutine";
import { TypeRoutine } from "../../../types";
import usePutRoutine from "../../../hooks/Routines/usePutRoutine";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import useDeleteRoutine from "../../../hooks/Routines/useDeleteRoutine";

interface EditRoutineProps {
   routine: TypeRoutine;
}

function EditRoutineForm({ routine }: EditRoutineProps) {
   const [name, setName] = useState(routine?.name);
   const { mutateAsync } = usePutRoutine();
   const { mutateAsync: deleteMutateAsync } = useDeleteRoutine();
   const [description, setDescription] = useState(routine?.description);
   const [color, setColor] = useState(routine?.color);
   const router = useRouter();

   const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const putPayload = {
         id: routine.id,
         name,
         description,
         color,
      };
      await mutateAsync(putPayload).then((res) => {
         return router.push(`/home`);
      });
   };

   const onDeleteClick = async (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      await deleteMutateAsync(routine.id).then((res) => {
         router.push(`/home`);
      });
   };
   return (
      <form
         className="flex flex-col p-10 rounded bg-slate-100 items-center h-fit mt-20 min-w-[200px] w-[500px] max-w-[500px] mr-5 ml-5"
         onSubmit={onSubmit}
      >
         <h1 className="text-center font-bold text-2xl text-white border-solid rounded bg-violet-800 p-5">
            Editing Routine
         </h1>
         <label className="w-full flex flex-col justify-center items-center gap-1 rounded mt-10">
            <h3 className="font-bold">Routine Name</h3>
            <input
               className="rounded w-full focus:border-amber-100 p-2"
               name="name"
               id="name"
               value={name}
               placeholder={"Exercises"}
               required
               onChange={(ev) => setName(ev.target.value)}
            ></input>
         </label>
         <label className="w-full flex flex-col justify-center items-center gap-1 ">
            <h3 className="font-bold">Description</h3>
            <textarea
               className="rounded w-full p-2 "
               name="description"
               id="description"
               placeholder={"Ex: This is my exercises routine"}
               value={description}
               onChange={(ev) => setDescription(ev.target.value)}
            ></textarea>
         </label>
         <label className="w-full flex flex-col justify-center items-center gap-1 text-center mt-5  ">
            <h3 className="font-bold">Routine Color</h3>
            <select
               className={`rounded w-fit p-4 bg-${color} w-full text-center ${
                  color === "white" ? "text-black" : "text-white"
               } hoverItem appearance-none`}
               name="color"
               id="color"
               value={color}
               onChange={(ev) => setColor(ev.target.value)}
            >
               <option value={"sky-500"}>Blue</option>
               <option value={"green-500"}>Green</option>
               <option value={"violet-400"}>Violet</option>
               <option value={"yellow-400"}>Yellow</option>
               <option value={"red-400"}>Red</option>
            </select>
         </label>

         <hr className="flex h-4 border-black mt-10 w-full justify-center " />
         <h1 className="text-center font-bold text-xl text-sky-500">Actions</h1>

         <div className="flex flex-col sm:flex-row gap-5 w- full">
            <Button
               className="bg-red-500 mt-5 font-bold hoverItem "
               handleClick={onDeleteClick}
               type="button"
            >
               <AiFillDelete />
               Delete
            </Button>
            <Button
               className="bg-green-500 mt-5 font-bold min-w-[180px] w-[200px] hoverItem"
               type="submit"
            >
               <AiFillEdit /> Edit this routine
            </Button>
         </div>
      </form>
   );
}

export default EditRoutineForm;
