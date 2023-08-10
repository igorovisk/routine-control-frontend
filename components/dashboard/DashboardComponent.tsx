import React from "react";
import { TypeRoutine, TypeTask, TypeUser } from "../../types";
import { Chart } from "react-google-charts";
import ChartWrapper from "./ChartWrapper";

interface DashBoardProps {
   user: TypeUser;
}

function DashboardComponent(props: DashBoardProps) {
   const { user } = props;
   const { routines } = user;

   const options = {
      is3D: true,
   };
   const data = [
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
   ];
   return (
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-100 p-20">
         {routines.map((routine: any) => {
            const chartName = [["Task", "Hours per Day"]];

            const task = routine.tasks.map((task: TypeTask) => {
               return [task.name, task?.doneDate?.length];
            });

            const chartData = [...chartName, ...task];
            return (
               <div className="border-2 w-full bg-white ">
                  {
                     <ChartWrapper>
                        <h1 className="text-center mt-5 font-bold text-xl">
                           Most done activities on {routine?.name}
                        </h1>
                        <Chart
                           chartType="PieChart"
                           data={chartData}
                           options={options}
                           width={"100%"}
                           height={"400px"}
                        />
                     </ChartWrapper>
                  }
               </div>
            );
         })}
      </div>
   );
}

export default DashboardComponent;
