import React from "react";
import Hero from "../components/Hero/Hero";
import PublicPagesLayout from "../components/Layout/PublicPagesLayout";

export default function Index() {
   return (
      <PublicPagesLayout>
         <Hero
            heading="RoutineWorks"
            message="Streamline your daily routine with ease and efficiency, empowering you to become the hero of your own productivity story."
            buttonTxt="Get Started"
         />
      </PublicPagesLayout>
   );
}
