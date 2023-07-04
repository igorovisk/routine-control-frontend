import React from "react";

import CreateTaskForm from "../form/tasks/CreateTaskForm";
import { useRouter } from "next/router";
import UserLayout from "../layout/UserLayout";
import { TypeUser } from "../../types";
import CreateRoutineForm from "../form/routines/CreateRoutineForm";
import Routine from "../routine/Routine";

interface DashBoardProps {
   user: TypeUser;
}

function DashboardComponent(props: DashBoardProps) {
   const { user } = props;
   console.log("DASHBOARD COMPONENT RENDERED");
   return (
      //TODO IMPLEMENT CHARTS
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
         <h1>CHARTS TO BE IMPLEMENTED</h1>
      </div>
   );
}

export default DashboardComponent;
