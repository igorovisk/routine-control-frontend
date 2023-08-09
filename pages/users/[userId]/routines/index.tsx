import React, { useEffect } from "react";
import { useRouter } from "next/router";

function index() {
   const router = useRouter();
   useEffect(() => {
      // Only use router.push on the client side
      router.push("/home");
   }, []);
   return null;
}
export default index;
