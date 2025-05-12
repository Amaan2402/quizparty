import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

export async function middleware(req: NextRequest) {
  try {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get("token");

    const response = NextResponse.next(); // Create response object
    response.headers.set("x-current-path", path); // Set the current path in headers

    if (path === "/auth/signin" && !token) {
      return response;
    }

    const isTokenValid = token ? await verifyToken(token.value) : false;

    if (path === "/auth/signin" && isTokenValid) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    if (!isTokenValid) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
}

export const config = {
  matcher: [
    "/auth/signin",
    "/dashboard/:path*",
    "/profile/:path*",
    "/quiz/:path*",
  ],
};
