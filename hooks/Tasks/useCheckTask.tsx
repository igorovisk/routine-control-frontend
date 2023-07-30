import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast } from "react-toastify";
import { TypeTask } from "../../types";

function useCheckTask(onSuccess?: () => {}, onError?: () => {}) {
   const queryClient = useQueryClient();
   const { data: me } = useMe();
   const { user } = me;

   return useMutation(
      ["checkTask"],
      async (task: TypeTask) => {
         await Api.post(
            `users/${user.id}/routines/${task.routineId}/tasks/${task.id}`,
            task
         );
         return task;
      },
      {
         onSuccess: async (task: TypeTask) => {
            console.log(task, "task no onsucess");
            await queryClient.invalidateQueries(["me"]);
            return toast.success(`${task.name} done...`);
         },
         onError: (error: any) => {
            const errorMessage = error.response?.data?.error;
            return toast.error(errorMessage);
         },

         retry: false,
      }
   );
}
//    return useMutation(
//       ["checkTask"],
//       async (task: TypeTask) => {
//          try {
//             return await Api.post(
//                `users/${user.id}/routines/${task.routineId}/tasks/${task.id}`,
//                task
//             );
//          } catch (error) {
//             throw new Promise((resolve, reject) => {
//                resolve(error);
//             });
//          }
//       },
//       {
//          onSuccess: async () => {
//             await queryClient.invalidateQueries(["me"]);
//             return toast.success(`Task Done..`, {
//                position: "top-right",
//             });
//          },
//          onError: async (error: any) => {
//             const promiseError = await error;
//             console.log(promiseError, "promise error var");
//             const errorMessage = promiseError.response?.data?.error;
//             toast.error(errorMessage);
//          },

//          retry: false,
//       }
//    );
// }

export default useCheckTask;
