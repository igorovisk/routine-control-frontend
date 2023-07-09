import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useMe from "../../../hooks/Me/useMe";
import DashboardComponent from "../../../components/Dashboard/DashboardComponent";
import UserLayout from "../../../components/Layout/UserLayout";

function DashboardPage() {
   const { data: me, isFetching } = useMe();
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;

   return (
      <UserLayout>
         <DashboardComponent user={user} />
      </UserLayout>
   );
}

export default DashboardPage;
