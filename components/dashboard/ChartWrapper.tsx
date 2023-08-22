import React from "react";

function ChartWrapper({ children }) {
   return (
      <div className="border-solid border-2 border-sky-400 w-full">
         {children}
      </div>
   );
}

export default ChartWrapper;
