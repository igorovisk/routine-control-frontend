import useMe from "../Me/useMe";

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
