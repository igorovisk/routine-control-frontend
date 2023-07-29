import { TypeTaskDoneDate } from "./taskDoneDate";

export type TypeTask = {
   name?: string;
   description?: string;
   id: string;
   doneDate?: [] | undefined;
   routineId?: string;
};
