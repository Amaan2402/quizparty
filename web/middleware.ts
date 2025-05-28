import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

export async function middleware(req: NextRequest) {
  try {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get("token");
    const response = NextResponse.next();

    console.log(token, "token in middleware");

    // ✅ Always allow access to /auth/signin if no valid token
    if (path === "/auth/signin") {
      console.log("TRIGGERED 1");
      if (!token) return response;

      const isTokenValid = await verifyToken(token.value);
      if (isTokenValid) {
        console.log("TRIGGERED 2");
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      console.log("TRIGGERED 3");
      return response; // 👈 prevent redirect loop
    }

    const isTokenValid = token ? await verifyToken(token.value) : false;

    // ✅ Redirect to signin if trying to access protected page without valid token
    if (!isTokenValid) {
      console.log("TRIGGERED 4");

      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
    console.log("TRIGGERED 5");

    return response;
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
