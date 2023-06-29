import React from "react";
import EditRoutineForm from "../form/tasks/CreateTaskForm";
import CreateTaskForm from "../form/tasks/CreateTaskForm";

type Routine = {
   id: number;
   userId: string;
   name: string;
   createdAt: Date;
   updatedAt: Date;
   description?: string | null;
   tasks?: Array<[]>;
};

interface DashBoardProps {
   routines: Routine[];
}

function Dashboard(props: DashBoardProps) {
   const { routines } = props;

   return (
      <div className="flex column justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
         {routines && <CreateTaskForm routine={routines[0]} />}
      </div>
   );
}

export default Dashboard;
