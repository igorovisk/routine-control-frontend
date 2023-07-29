import React, { useState } from "react";
import Link from "next/link";
import useAuth from "../../../hooks/Auth/useAuth";
import { useSignIn } from "../../../hooks/Auth/useSignIn";
export function LoginForm() {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const signInHook = useSignIn();

   const handleLogin = async (event: any) => {
      event.preventDefault();
      try {
         await signInHook.mutateAsync({ email, password });
      } catch (error) {
         console.error("Login Error:", error);
      }
   };
   return (
      <form className="text-black mt-10 py-10 w-full h-full">
         <h1>Welcome!</h1>
         <span className="flex flex-col gap-5 w-full p-4 rounded h-full">
            <label className="flex flex-col text-left text-zinc-500">
               Email
               <input
                  type={"email"}
                  placeholder="Enter your email address..."
                  className="signFormInput rounded "
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                  autoComplete="email"
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Password
               <input
                  type={"password"}
                  placeholder="Enter your password..."
                  className="signFormInput rounded"
                  onChange={(e: any) => setPassword(e.target.value)}
                  value={password}
                  autoComplete="current-password"
               />
            </label>
            <div className="flex justify-end items-end ">
               <Link href="/resetpassword" className=" text-blue-400 w-fit ">
                  Forgot your password?
               </Link>
            </div>

            <button
               className="text-xl text-white bg-green-400 hover:bg-green-500 p-4 rounded mt-10"
               onClick={handleLogin}
               type="submit"
            >
               Login
            </button>
         </span>
      </form>
   );
}

export default LoginForm;
