import { useQuery, useMutation } from "@tanstack/react-query";
import Api from "../../services/api";
import useMe from "../Me/useMe";
import { toast } from "react-toastify";
import { queryClient } from "../../services/queryClient";

type TaskPayload = {
   name?: string;
   description?: string;
};

function usePutTask() {
   const { data: me, isFetching } = useMe();
   const { user } = me;

   const putTaskCheck = () => {};

   return putTaskCheck;
}

export default usePutTask;
