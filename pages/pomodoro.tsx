import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import PublicPagesLayout from "../components/Layout/PublicPagesLayout";
import {
   AiFillPlayCircle,
   AiOutlineLoading3Quarters,
   AiTwotoneStop,
} from "react-icons/ai";
import { GiTomato } from "react-icons/gi";
import { MdRestartAlt } from "react-icons/md";
import UserDesktopLayout from "../components/Layout/UserDesktopLayout";
import useMe from "../hooks/Me/useMe";
// import alertSound from "../public/audio/pomodoroAlert.mp3";

export default function Pomodoro() {
   // const { data: me, isFetching, isLoading } = useMe();
   const [time, setTime] = useState("00:00");
   const [isRunning, setIsRunning] = useState(false);

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
            window.alert("Time to rest!");
            // const audio = new Audio(alertSound);
            // audio.play();
            setIsRunning(false);
         }
      }

      return () => clearInterval(timer);
   }, [isRunning, time]);

   // if (isFetching || isLoading) {
   //    return null;
   // }

   // const { user } = me;

   const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      // Regular expression to check if the input value is in "mm:ss" format
      const isValidFormat = /^\d{2}:\d{2}$/.test(value);

      if (isValidFormat) {
         setTime(value);
      }
   };

   return (
      <UserDesktopLayout>
         <div className="flex items-center justify-center w-full h-[100vh] bg-violet-800 relative bg-cover bg-no-repeat bg-center shadow-black mt-0">
            {/* OVERLAY TRANSPARENT */}
            <div className="flex flex-col xl:flex-row min-h-[600px]  ">
               <div className="flex w-[400px] max-w-[450px] justify-center  rounded-l relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white "></div>
                  <div className="flex flex-col relative w-[400px]">
                     <span className="flex flex-col justify-center items-center pl-5 pr-5 p-2 bg-slate-200 opacity-100 text-center font-bold w-full ">
                        <h1>CoffeeJazz Player</h1>
                     </span>
                     <iframe
                        src="https://www.youtube.com/embed/NJuSStkIZBg"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        className="relative"
                     ></iframe>
                     <span className="flex flex-col justify-center items-center pl-5 pr-5 p-2 bg-violet-500  opacity-100 text-center font-bold w-full "></span>
                  </div>
               </div>
               <div className="flex flex-col items-center w-[400px] min-w-[400px] rounded-r p-10 relative z-10">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full  bg-sky-500 z-1"></div>
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
                        className="font-bold hoverItem flex justify-center items-center w-[100px] pl-5 pr-5 p-2 bg-green-500 rounded opacity-100"
                        onClick={(e: MouseEvent<HTMLButtonElement>) =>
                           setIsRunning(true)
                        }
                        disabled={isRunning} // Disable the Start button when the timer is already running
                     >
                        <p className="flex items-center gap-2">
                           <AiFillPlayCircle size={20} /> Start!
                        </p>
                     </button>
                     <button
                        className="font-bold hoverItem flex justify-center items-center w-[100] pl-5 pr-5 p-2 bg-amber-500 rounded opacity-100"
                        onClick={(e: MouseEvent<HTMLButtonElement>) =>
                           setIsRunning(false)
                        }
                        disabled={!isRunning} // Disable the Stop button when the timer is not running
                     >
                        <p className="flex items-center gap-2">
                           <AiTwotoneStop size={20} /> Stop
                        </p>
                     </button>
                     <button
                        className="font-bold hoverItem flex justify-center items-center w-[100px] pl-5 pr-5 p-2 bg-red-500 rounded opacity-100 text-center"
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                           setIsRunning(false);
                           setTime("00:00");
                        }}
                     >
                        <p className="flex items-center gap-2">
                           <MdRestartAlt size={20} /> Reset
                        </p>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </UserDesktopLayout>
   );
}
