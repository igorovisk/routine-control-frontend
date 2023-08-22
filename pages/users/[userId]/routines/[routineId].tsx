import React from "react";
import { useRouter } from "next/router";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
import { TypeRoutine } from "../../../../types";
import useMe from "../../../../hooks/Me/useMe";
import EditRoutineForm from "../../../../components/Form/Routines/EditRoutineForm";
import UserDesktopLayout from "../../../../components/Layout/UserDesktopLayout";

function RoutineIdPage() {
   const router = useRouter();
   const { routineId } = router.query;
   const { data: me, isFetching } = useMe();
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full  bg-slate-900 p-20">
            <AiOutlineLoading size={50} className={"spinner"} color="white" />;
         </div>
      );
   }
   const { user } = me;
   const routine = user?.routines?.find(
      (routine: TypeRoutine) => routineId === routine.id
   );

   return (
      <UserDesktopLayout>
         {routine && <EditRoutineForm routine={routine} />}
      </UserDesktopLayout>
   );
}
export default RoutineIdPage;
