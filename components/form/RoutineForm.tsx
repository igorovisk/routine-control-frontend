import React from "react";
import { useState } from "react";
import { GiDeskLamp } from "react-icons/gi";
import Button from "../button/Button";
function RoutineForm() {
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");

   const onSubmit = () => {
      const newRoutine = {
         name,
         description,
      };
   };
   return (
      //If Routine is already created, display message: Seems like you already have a routine, do you want to edit it?

      <div className="flex flex-col p-10 rounded bg-slate-100 justify-center items-center mt-16">
         <GiDeskLamp size={100} />
         <h1 className="font-bold bg-amber-200 p-5 rounded-xl text-lg mt-2 mb-10">
            Seems like it's your first time here!
         </h1>
         <h2 className="bg-amber-300 p-3 rounded-xl font-semibold">
            This is the section where you can create your routine and specify
            it's details.
         </h2>
         <p className=" p-2 ">
            The next step will be to create your daily tasks inside this routine
            to be checked everyday.
         </p>
         <form className="flex mt-5 flex-col p-6 rounded border-lg-yellow-400 gap-3 justify-center items-center w-full">
            <label className="w-full flex flex-col justify-center items-center gap-1 rounded">
               <h3 className="font-bold">Routine Name</h3>
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
               Create Routine!
            </Button>
         </form>
      </div>
   );
}

export default RoutineForm;
