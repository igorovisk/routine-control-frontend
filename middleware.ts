import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import decode from "jwt-decode";
import parseUrl from "url-parse";

type JwtPayload = {
   user: boolean;
   exp: number;
};

export function middleware(request: NextRequest) {
   const baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`;
   const currLocation = parseUrl(request.url, baseUrl);
   const tokenString = request.cookies.get("token")?.value;
   const jwt = decode<JwtPayload>(tokenString);

   if (jwt.user && currLocation.pathname === "/favicon.ico") {
      console.log("User is logged in nad path is FAVICON");
      const redirectUrl = new URL("/home", currLocation.origin).href;
      return NextResponse.redirect(redirectUrl);
   }
   if (jwt.exp < new Date().valueOf() / 1000) {
      console.log("Token expired");
      const response = NextResponse.redirect("/favicon.ico");
      request.cookies.set("token", "");
      return response;
   }

   return NextResponse.next();
}

export const config = {
   matcher: ["/((?!_next|api/auth).*)(.+)"],
};
