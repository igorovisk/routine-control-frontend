import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import "../global.css";
import { queryClient } from "../services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
   return (
      <QueryClientProvider client={queryClient}>
         <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
         <Head>
            <title>RoutineWorks</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <NavBar />
         <Component {...pageProps} />
      </QueryClientProvider>
   );
}
