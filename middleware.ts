import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import decode from "jwt-decode";
type JwtPayload = {
   user: boolean;
   exp: number;
};

export function middleware(request: NextRequest) {
   const currentLocation = new URL(request.url);
   const { pathname } = request.nextUrl;

   if (pathname.startsWith("/_next")) return NextResponse.next();

   const tokenString = request.cookies.get("token")?.value;
   const publicPaths = [
      "/",
      "/documentation",
      "/about",
      "/favicon.ico",
      "/contact",
   ];

   if (!tokenString && !publicPaths.includes(pathname)) {
      console.log("No token, redirecting to Index Page...");
      return NextResponse.redirect(new URL("/", currentLocation));
   }

   if (tokenString) {
      const jwt = decode<JwtPayload>(tokenString);
      if (jwt.exp < new Date().getMilliseconds()) {
         console.log("Token is expired.. Redirecting to index");
         if (pathname === "/") {
            return;
         }
         return NextResponse.redirect(new URL("/", currentLocation));
      }

      if (jwt.user && pathname === "/") {
         console.log("User is logged, redirecting to Home Page...");
         return NextResponse.redirect(new URL("/home", currentLocation));
      }

      if (!jwt.user && pathname === "/home") {
         console.log("User is NOT LOGGED in and path is HOME");
         return NextResponse.redirect(new URL("/", currentLocation));
      }
   }
   return NextResponse.next();
}

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
