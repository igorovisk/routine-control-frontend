import React from "react";

import CreateRoutineForm from "../../../../components/Form/Routines/CreateRoutineForm";

function CreateRoutinePage() {
   return (
      <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
         <CreateRoutineForm />
      </div>
   );
}

export default CreateRoutinePage;
