import React from "react";

type ServiceCardProps = {
   title: string;
   description: string;
};

function ServiceCard({ title, description }: ServiceCardProps) {
   return (
      <div
         className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
         data-wow-duration="1s"
         style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp",
         }}
      >
         <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
               >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
               </svg>
            </div>
            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
               {title}
            </h3>
            <p className="text-gray-500">{description}</p>
         </div>
      </div>
   );
}

export default ServiceCard;
