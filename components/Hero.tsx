import React, { useContext, useState } from "react";
import SignModal from "./modal/SignModal";

interface Hero {
   heading: string;
   message: string;
   buttonTxt: string;
}

function Hero({ heading, message, buttonTxt }: Hero) {
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      console.log("handleClick called");
      setIsOpen(true);
   };

   return (
      <div
         className={`flex items-center flex-col justify-center ${
            isOpen ? "h-[120vh]" : "h-[100vh]"
         } bg-fixed bg-cover custom-img`}
      >
         {/* Overlay */}
         <div
            className={`absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] ${
               isOpen ? "h-[120vh]" : "h-[100vh]"
            } `}
         />
         <div className="p-5 text-white z-[2] m-auto text-center">
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-xl mb-5 mt-5">{message}</p>
            <div className="flex gap-10 justify-center items-center">
               <button
                  className="px-8 py-2 border  hover:text-green-500 hover:border-green-500"
                  onClick={() => handleClick()}
               >
                  {buttonTxt}
               </button>
               <SignModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
         </div>

         {/* <LoginModal /> */}
      </div>
   );
}

export default Hero;
