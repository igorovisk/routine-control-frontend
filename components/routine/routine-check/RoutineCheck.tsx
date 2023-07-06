import React from "react";
import TaskChecker from "../../task/task-checker/TaskChecker";
import { TypeRoutine, TypeUser } from "../../../types";

interface TaskCheckerProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function RoutineCheck(props: TaskCheckerProps) {
   const { user, routine } = props;
   return routine && <TaskChecker user={user} routine={routine} />;
}

export default RoutineCheck;
