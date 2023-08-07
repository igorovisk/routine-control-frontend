import { useRouter } from "next/router";
import React from "react";
import useMe from "../../../../hooks/Me/useMe";
import { AiFillFileAdd, AiOutlineLoading3Quarters } from "react-icons/ai";
import RoutineList from "../../../../components/Routine/RoutineList";

function RoutinesIndexPage() {
   const router = useRouter();

   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-slate-900  rounded">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   return (
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] p-20 bg-gray-700 ">
         {routines.length > 0 && <RoutineList user={user} />}
         <button
            onClick={() =>
               router.push(`/users/${user.id}/routines/create-routine`)
            }
            className="text-white mt-5 p-5 text-center rounded bg-green-500 flex items-center justify-center gap-2 font-semibold cursor-pointer"
         >
            <AiFillFileAdd /> New Routine
         </button>
      </div>
   );
}

export default RoutinesIndexPage;
