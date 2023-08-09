import React from "react";
import { useState } from "react";
import { GiDeskLamp } from "react-icons/gi";
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import usePostRoutine from "../../../hooks/Routines/usePostRoutine";

interface CreateRoutineFormProps {
   isNewUser: boolean;
}

function CreateRoutineForm({ isNewUser }: CreateRoutineFormProps) {
   const [name, setName] = useState("");
   const { mutateAsync } = usePostRoutine();
   const [description, setDescription] = useState("");
   const [color, setColor] = useState("white");
   const router = useRouter();
   const { userId } = router.query;

   const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const newRoutine = {
         name,
         description,
         color,
      };
      await mutateAsync(newRoutine).then((res) => {
         return router.push(`/users/${userId}/routines`);
      });
   };
   return (
      <div className="flex flex-col p-10 rounded bg-slate-100 justify-center items-center mt-16">
         {isNewUser && (
            <>
               {" "}
               <GiDeskLamp size={100} />
               <h1 className="font-bold bg-amber-200 p-5 rounded-xl text-lg mt-2 mb-10">
                  Seems like it's your first time here!
               </h1>
               <h2 className="bg-amber-300 p-3 rounded-xl font-semibold">
                  This is the section where you can create your routine and
                  specify it's details.
               </h2>
               <p className=" p-2 ">
                  The next step will be to create your daily tasks inside this
                  routine to be checked everyday.
               </p>
            </>
         )}

         <form
            className="flex mt-5 flex-col p-6 rounded border-lg-yellow-400 gap-3 justify-center items-center w-full"
            onSubmit={onSubmit}
         >
            <label className="w-full flex flex-col justify-center items-center gap-1 rounded">
               <h3 className="font-bold">Routine Name</h3>
               <input
                  className="rounded w-full focus:border-amber-100 p-2"
                  name="name"
                  id="name"
                  value={name}
                  placeholder={"Ex: Exercises"}
                  required
                  onChange={(ev) => setName(ev.target.value)}
               ></input>
            </label>
            <label className="w-full flex flex-col justify-center items-center gap-1 ">
               <h3 className="font-bold">Description</h3>
               <textarea
                  className="rounded w-full p-2"
                  name="description"
                  placeholder={"Ex: This is my exercises routine"}
                  id="description"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
               ></textarea>
            </label>
            <label className="w-full flex flex-col justify-center items-center gap-1 text-center ">
               <h3 className="font-bold">Routine Color</h3>
               <select
                  className={`rounded w-fit p-2  bg-${color}  ${
                     color === "white" ? "text-black" : "text-white"
                  }`}
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

            <Button bgColor="bg-green-500 min-w-[300px] mt-5" type="submit">
               Create Routine!
            </Button>
         </form>
      </div>
   );
}

export default CreateRoutineForm;
