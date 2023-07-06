import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";

type TaskPayload = {
   name?: string;
   description?: string;
};

function useTasks() {
   const { data: me, isFetching } = useMe();
   const { user } = me;
   async function postTask(task: TaskPayload, routineId: string): Promise<{}> {
      try {
         console.log(task, "task");
         const response = await Api.post(
            `users/${user.id}/routines/${routineId}/tasks`,
            task
         );
         console.log(response, "response do routines post");
         return response;
      } catch (error) {}
   }

   return {
      postTask,
   };
}

export default useTasks;
