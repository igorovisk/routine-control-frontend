import React from "react";
import RoutineForm from "../components/form/RoutineForm";
import useMe from "../hooks/useMe";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default Home;
function Home() {
   const me = useMe();
   const { data: user, isFetching } = me;
   if (isFetching) {
      return (
         <div className="flex column justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }

   const { routines } = user;
   return (
      routines && (
         <div className="flex column justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            {routines?.length === 0 && <RoutineForm />}
            <p>Daily Check!</p> */
            <>
               <h1>{routines[0].name}</h1>
               <br />
               <h2>{routines[0].description}</h2>
            </>
         </div>
      )
   );
}
