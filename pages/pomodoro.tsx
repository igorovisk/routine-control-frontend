import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import PublicPagesLayout from "../components/Layout/PublicPagesLayout";
import { AiFillPlayCircle } from "react-icons/ai";
import { GiTomato } from "react-icons/gi";

export default function Pomodoro() {
   const [time, setTime] = useState("00:00");
   const [isRunning, setIsRunning] = useState(false);

   const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      // Regular expression to check if the input value is in "mm:ss" format
      const isValidFormat = /^\d{2}:\d{2}$/.test(value);

      if (isValidFormat) {
         setTime(value);
      }
   };

   useEffect(() => {
      let timer: NodeJS.Timeout;
      if (isRunning) {
         const [minutes, seconds] = time.split(":").map(Number);

         // Convert time to seconds
         const totalSeconds = minutes * 60 + seconds;

         if (totalSeconds > 0) {
            timer = setInterval(() => {
               const newSeconds = totalSeconds - 1;
               const newMinutes = Math.floor(newSeconds / 60);
               const remainingSeconds = newSeconds % 60;

               const formattedTime = `${String(newMinutes).padStart(
                  2,
                  "0"
               )}:${String(remainingSeconds).padStart(2, "0")}`;

               setTime(formattedTime);
            }, 1000);
         } else {
            window.alert("AA");
            setIsRunning(false);
         }
      }

      return () => clearInterval(timer);
   }, [isRunning, time]);

   return (
      <PublicPagesLayout>
         <div className="flex items-center justify-center w-full h-[100vh] bg-[url('public/bg-pomodoro2.jpg')] relative bg-cover bg-no-repeat bg-center shadow-black mt-0">
            {/* OVERLAY TRANSPARENT */}
            <div className="flex flex-col md:flex-row min-h-[600px]  ">
               <div className="flex w-[400px] max-w-[450px] justify-center items-center rounded-l relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white opacity-50"></div>
                  <div className="flex flex-col justify-center items-center mt-10 relative">
                     <span className="flex flex-col justify-center items-center w-[120px] pl-5 pr-5 p-2 bg-violet-500 rounded opacity-100 text-center font-bold hoverItem">
                        <AiFillPlayCircle size={30} />
                        <h1>CoffeeJazz Player</h1>
                     </span>
                  </div>
               </div>
               <div className="flex flex-col items-center w-[400px] min-w-[400px] rounded-r p-10 relative z-10">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-50 bg-sky-500 z-1"></div>
                  <div className="flex flex-col items-center opacity-150 bg-red-300 rounded pl-2 pr-2 p-5 mb-10 z-10 opacity-80">
                     <GiTomato size={50} />
                     <h1 className="text-4xl font-bold "> Podomoro Timer</h1>
                     <p className="text-white font-bold ">
                        Your way to success
                     </p>
                  </div>

                  <input
                     type="time"
                     value={time}
                     className="font-bold text-7xl text-white relative bg-transparent mb-10"
                     onChange={handleTimeChange}
                     disabled={isRunning} // Disable the input when the timer is running
                  ></input>

                  <div className="flex gap-2 relative">
                     <button
                        className="font-bold hoverItem flex justify-center items-center w-[80px] pl-5 pr-5 p-2 bg-green-500 rounded opacity-100"
                        onClick={(e: MouseEvent<HTMLButtonElement>) =>
                           setIsRunning(true)
                        }
                        disabled={isRunning} // Disable the Start button when the timer is already running
                     >
                        Start!
                     </button>
                     <button
                        className="font-bold hoverItem flex justify-center items-center w-[80px] pl-5 pr-5 p-2 bg-amber-500 rounded opacity-100"
                        onClick={(e: MouseEvent<HTMLButtonElement>) =>
                           setIsRunning(false)
                        }
                        disabled={!isRunning} // Disable the Stop button when the timer is not running
                     >
                        Stop
                     </button>
                     <button
                        className="font-bold hoverItem flex justify-center items-center w-[80px] pl-5 pr-5 p-2 bg-red-500 rounded opacity-100 text-center"
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                           setIsRunning(false);
                           setTime("00:00");
                        }}
                     >
                        Reset
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </PublicPagesLayout>
   );
}
