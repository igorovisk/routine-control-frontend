import React from "react";
import { TypeRoutine, TypeUser, TypeTask } from "../../types";
import TaskChecker from "../task/TaskChecker";

interface TaskCheckerProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function Routine(props: TaskCheckerProps) {
   const { user, routine } = props;
   console.log("ROUTINE PRINTED");
   return routine && <TaskChecker user={user} routine={routine} />;
}

export default Routine;
