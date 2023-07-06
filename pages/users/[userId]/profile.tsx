import React from "react";
import UserLayout from "../../../components/Layout/UserLayout";

function ProfilePage() {
   return (
      <UserLayout>
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-200 p-20">
            <p>ProfilePage</p>
         </div>
      </UserLayout>
   );
}
export default ProfilePage;
