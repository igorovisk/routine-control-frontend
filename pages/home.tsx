import React from "react";
import useRoutines from "../hooks/useRoutines";
import RoutineForm from "../components/form/RoutineForm";

function Home(props: any) {
   const routinesHook = useRoutines();
   const { data: routines } = routinesHook;
   // console.log(routines, "routines");
   return (
      <div className="flex column justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
         <RoutineForm />
         {/* IF ALREADY HAVE ROUTINES: */}
         {/* <p>Daily Check!</p> */}
         {/* {routines[0]?.tasks?.map((task) => {
               return <></>;
            })} */}
      </div>
   );
}

export default Home;
