import React from "react";
import PublicPagesLayout from "../components/Layout/PublicPagesLayout";
import ServiceCard from "../components/ServicesCard/ServiceCard";

function ContactPage() {
   return (
      <PublicPagesLayout>
         <div
            id="services"
            className="w-full h-[100vh] section relative pb-8 md:pt-16 md:pb-0 bg-white "
         >
            <div className="container xl:max-w-6xl mx-auto px-4">
               <header className="text-center mx-auto mb-12 lg:px-20">
                  <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
                     What We Do
                  </h2>
                  <svg
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     x="0px"
                     y="0px"
                     viewBox="0 0 100 60"
                     style={{ margin: "0 auto", height: "35px" }}
                     xmlSpace="preserve"
                  >
                     <circle
                        cx="50.1"
                        cy="30.4"
                        r="5"
                        className="stroke-primary"
                        style={{
                           fill: "transparent",
                           strokeWidth: 2,
                           strokeMiterlimit: 10,
                        }}
                     />
                     <line
                        x1="55.1"
                        y1="30.4"
                        x2="100"
                        y2="30.4"
                        className="stroke-primary"
                        style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                     />
                     <line
                        x1="45.1"
                        y1="30.4"
                        x2="0"
                        y2="30.4"
                        className="stroke-primary"
                        style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                     />
                  </svg>
                  <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                     Save time managing advertising &amp; Content for your
                     business.
                  </p>
               </header>
               {/* row */}
               <div className="flex flex-wrap flex-row -mx-4 text-center">
                  <ServiceCard
                     title="Title"
                     description="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia"
                  />
                  <ServiceCard
                     title="Title"
                     description="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia"
                  />
                  <ServiceCard
                     title="Title"
                     description="A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia"
                  />
               </div>
            </div>
         </div>
      </PublicPagesLayout>
   );
}

export default ContactPage;
