import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";


export function RegisterForm() {
   const {handleSignUp} = useAuth()
   const [email, setEmail] = useState("")
   const [username, setUsername] = useState("")
   const [fullname, setFullname] = useState("")
   const [birthdate, setBirthdate] = useState("")
   const [password, setPassword] = useState("")


   const payload = {
      email, username, fullname, birthdate, password
   }

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
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Username
               <input
                  type={"text"}
                  placeholder="Enter your username..."
                  className="signFormInput rounded "
                  onChange={(e: any) => setUsername(e.target.value)}
                  value={username}
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Fullname
               <input
                  type={"text"}
                  placeholder="Enter your fullname..."
                  className="signFormInput rounded "
                  onChange={(e: any) => setFullname(e.target.value)}
                  value={fullname}
               />
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Birthdate
               <input
                  type={"date"}
                  placeholder="Enter your email address..."
                  className="signFormInput rounded "
                  onChange={(e: any) => setBirthdate(e.target.value)}
                  value={birthdate}
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
               />
            </label>
            <div className="flex justify-end items-end ">
               <Link href="/resetpassword" className=" text-blue-400 w-fit ">
                  Forgot your password?
               </Link>
            </div>

            <button
               className="text-xl text-white bg-green-400 hover:bg-green-500 p-4 rounded mt-10"
               onClick={(e) => handleSignUp(event, payload)}
               type="submit"
            >
               Register
            </button>
         </span>
      </form>
   );
}

export default RegisterForm;
