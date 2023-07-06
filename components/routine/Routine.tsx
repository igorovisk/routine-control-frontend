import React from "react";
import { TypeRoutine, TypeUser } from "../../types";
import TaskListEdit from "../Task/TaskListEdit";

interface TaskCheckerProps {
   user: TypeUser;
   routine: TypeRoutine;
}

function Routine(props: TaskCheckerProps) {
   const { user, routine } = props;
   return routine && <TaskListEdit user={user} routine={routine} />;
}

export default Routine;
