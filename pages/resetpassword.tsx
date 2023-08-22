import React, { FormEvent, useState } from "react";
import PublicPagesLayout from "../components/Layout/PublicPagesLayout";
import ServiceCard from "../components/ServicesCard/ServiceCard";
import Button from "../components/Button/Button";
import api from "../services/api";

export function ResetPasswordPage() {
   const [email, setEmail] = useState<string>("");

   async function handleSendEmail(
      ev?: FormEvent<HTMLFormElement>
   ): Promise<any> {
      ev.preventDefault();
      await api.post("/resetpassword", email);
   }

   return (
      <PublicPagesLayout>
         <div
            id="resetpassword"
            className="w-full h-[100vh]  justify-center  flex relative  md:pb-0 bg-slate-400 "
         >
            <div className="container p-5 bg-slate-300 h-fit mt-10">
               <h1 className="font-bold text-2xl mb-5 bg-slate-100 rounded w-fit p-5 ">
                  Reset your password
               </h1>
               <form>
                  <label className="flex flex-col text-left text-zinc-500">
                     Email
                     <input
                        type={"email"}
                        placeholder="Enter your email address..."
                        className="signFormInput rounded "
                        onChange={(e: any) => setEmail(e.target.value)}
                        value={email}
                        required
                        autoComplete="email"
                     />
                  </label>
                  <Button
                     type="submit"
                     className="hoverItem bg-green-500 mt-5 font-bold"
                     handleClick={handleSendEmail}
                  >
                     Send token by email
                  </Button>
               </form>
            </div>
         </div>
      </PublicPagesLayout>
   );
}

export default ResetPasswordPage;
