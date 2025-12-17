// import { NextResponse } from "next/server";
import { auth } from "@/app/_lib/auth";

export default auth;
// export function middleware(request) {
//   const url = request.nextUrl.clone();
//   const protectedPaths = ["/reservation", "/profile"];

//   return NextResponse.redirect(new URL("/about", request.url));
// }

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
