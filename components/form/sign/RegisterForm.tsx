import Link from "next/link";
import React, { useState } from "react";
import useSignUp from "../../../hooks/Auth/useSignup";
import avatar from "../../../public/avatar-profile.png";
import Image from "next/image";

export function RegisterForm() {
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [fullname, setFullname] = useState("");
   const [birthdate, setBirthdate] = useState("");
   const [password, setPassword] = useState("");
   const [profilePic, setProfilePic] = useState("");
   const [profilePreview, setProfilePreview] = useState("");
   const { handleSignUp } = useSignUp();
   const payload = {
      email,
      username,
      fullname,
      birthdate,
      password,
      profilePic,
   };

   // Create a reference to the hidden file input element
   const hiddenFileInput = React.useRef(null);

   // Programatically click the hidden file input element
   // when the Button component is clicked
   const handleClick = (event) => {
      event.preventDefault();
      hiddenFileInput.current.click();
   };
   // Call a function (passed as a prop from the parent component)
   // to handle the user-selected file
   const handleChange = (event) => {
      event.preventDefault();

      const fileUploaded = event.target.files[0];
      setProfilePreview(URL.createObjectURL(event.target.files[0]));
      setProfilePic(fileUploaded);
   };
   return (
      <form className="text-black mt-10 py-10 w-full h-full">
         <h1>Welcome!</h1>
         <span className="flex flex-col gap-5 w-full p-4 rounded h-full">
            <label className="flex flex-col text-center text-zinc-500 items-center justify-center">
               {!profilePic && (
                  <Image
                     alt="Your profile picture"
                     width={200}
                     height={200}
                     src={avatar}
                     onClick={handleClick}
                     className="rounded-full mb-2"
                  />
               )}
               {profilePic && (
                  <Image
                     alt="Your profile picture"
                     className="rounded-full mb-2 w-[200px] h-[200px]"
                     src={profilePreview}
                     width={200}
                     height={200}
                     onClick={handleClick}
                  />
               )}
               <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  accept="image/*"
                  style={{ display: "none" }}
               />
               <button onClick={handleClick}>Upload a file</button>
            </label>
            <label className="flex flex-col text-left text-zinc-500">
               Email
               <input
                  type={"email"}
                  placeholder="Enter your email address..."
                  className="signFormInput rounded "
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                  required
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
                  required
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
                  required
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
