import React from "react";
import { AiFillDashboard, AiOutlineLoading } from "react-icons/ai";
import useMe from "../../../hooks/Me/useMe";
import DashboardComponent from "../../../components/Dashboard/DashboardComponent";
import UserLayout from "../../../components/Layout/UserDesktopLayout";
import { TypeRoutine, TypeTask } from "../../../types";

function DashboardPage() {
   const { data: me, isFetching } = useMe();
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading size={50} className={"spinner"} color="white" />;
         </div>
      );
   }
   const { user } = me;
   const tasks = user.routines.map((routine: TypeRoutine) => routine.tasks);

   const hasAnyTaskDone = tasks.filter((task: any) => {
      return task?.length > 0;
   });

   return (
      <UserLayout user={user}>
         <div className="w-[90%] flex flex-col">
            {hasAnyTaskDone?.length > 0 ? (
               <DashboardComponent user={user} />
            ) : (
               <div className="bg-violet-500 h-full w-full items-center justify-center flex flex-col p-5">
                  <div className="flex flex-col gap-5 bg-violet-300 rounded p-5 justify-center items-center">
                     <AiFillDashboard size={100} color="black" />
                     <h1 className="font-bold text-2xl text-center p-5">
                        You have no data yet to be displayed, keep daily
                        checking the tasks you created so that we can show your
                        dashboard
                     </h1>
                  </div>
               </div>
            )}
         </div>
      </UserLayout>
   );
}

export default DashboardPage;
