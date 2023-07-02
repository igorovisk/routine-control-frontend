import React from "react";

import CreateTaskForm from "../form/tasks/CreateTaskForm";
import { useRouter } from "next/router";
import UserLayout from "../layout/UserLayout";

type User = {
   routines: any;
   id: number;
   fullname: string;
   login: string;
   email: string;
   admin: boolean;
   active: boolean;
   createdAt: string;
};

interface DashBoardProps {
   user: User;
}

function Dashboard(props: DashBoardProps) {
   const { user } = props;
   const router = useRouter();

   return (
      <UserLayout>
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
            {user.routines && <CreateTaskForm user={user} />}
         </div>
      </UserLayout>
   );
}

export default Dashboard;
