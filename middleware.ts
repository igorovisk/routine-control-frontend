import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import decode from "jwt-decode";
import parseUrl from "url-parse";

type JwtPayload = {
   user: boolean;
   exp: number;
};

export function middleware(request: NextRequest) {
   // const { pathname } = request.nextUrl;

   // if (pathname.startsWith("/_next")) return NextResponse.next();
   // const tokenString = request.cookies.get("token")?.value;
   // const publicPaths = [
   //    "/",
   //    "/documentation",
   //    "/about",
   //    "/favicon.ico",
   //    "/contact",
   // ];

   // if (pathname.startsWith("/_next")) return NextResponse.next();

   // if (!tokenString && !publicPaths.includes(pathname)) {
   //    console.log("No token, redirecting to Index Page...");
   //    return NextResponse.redirect("/");
   // }
   // if (tokenString) {
   //    const jwt = decode<JwtPayload>(tokenString);
   //    console.log(pathname, "current location pathname");
   //    if (jwt.user && (pathname === "/" || pathname === "/favicon.ico")) {
   //       console.log("User is logged, redirecting to Home Page...");
   //       return NextResponse.redirect("/home");
   //    }
   //    if (!jwt.user && pathname === "/home") {
   //       console.log("User is NOT LOGGED in and path is HOME");
   //       return NextResponse.redirect("/");
   //    }
   // }

   return NextResponse.next();
}

export const config = {
   matcher: ["/((?!_next|api/auth).*)(.+)"],
};
