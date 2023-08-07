import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useMe from "../../hooks/Me/useMe";
import Routine from "./Routine";

import { TypeRoutine, TypeUser } from "../../types";

type RoutineListProps = {
   user: TypeUser;
};
function RoutineList({ user }: RoutineListProps) {
   return (
      <div className="flex flex-wrap  h-full gap-10 bg-gray-700 p-10 flex-col  items-center mt-10 sm:w-full ">
         {user.routines?.map((routine: TypeRoutine) => {
            return <Routine user={user} key={routine.id} routine={routine} />;
         })}
      </div>
   );
}
export default RoutineList;
