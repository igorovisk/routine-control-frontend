import { useRouter } from "next/router";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useMe from "../../../hooks/me/useMe";
import DashboardComponent from "../../../components/dashboard/DashboardComponent";
import UserLayout from "../../../components/layout/UserLayout";

function Dashboard() {
   console.log("CAIU NA DASHBOARD PAGE");
   const { data: me, isFetching } = useMe();
   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const router = useRouter();

   return (
      <UserLayout>
         <DashboardComponent user={user} />
      </UserLayout>
   );
}

export default Dashboard;
