import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import decode from "jwt-decode";
type JwtPayload = {
   exp: number;
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
   const currLocation = new URL(request.url);

   if (currLocation.pathname === "/") {
      return NextResponse.next();
   }

   if (currLocation.pathname === "/login") {
      return NextResponse.next();
   }

   if (currLocation.pathname === "/forgot") {
      return NextResponse.next();
   }

   const tokenString = request.cookies.get("token")?.value;

   if (!tokenString) {
      return NextResponse.redirect(new URL("/", request.url));
   }

   const jwt = decode<JwtPayload>(tokenString);

   if (jwt.exp < new Date().valueOf() / 1000) {
      const response = NextResponse.redirect(new URL("/", currLocation));
      request.cookies.set("token", "");
      return response;
   }

   if (currLocation.pathname === "/") {
      console.log("passei aqui");
      return NextResponse.redirect(new URL("/home", currLocation));
   }

   return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
   matcher: ["/((?!_next|api/auth).*)(.+)"],
};
