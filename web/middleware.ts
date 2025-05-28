import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

export async function middleware(req: NextRequest) {
  try {
    const path = req.nextUrl.pathname;
    const token = req.cookies.get("token");
    const response = NextResponse.next();

    // ✅ Always allow access to /auth/signin if no valid token
    if (path === "/auth/signin") {
      if (!token) return response;

      const isTokenValid = await verifyToken(token.value);
      if (isTokenValid) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return response; // 👈 prevent redirect loop
    }

    const isTokenValid = token ? await verifyToken(token.value) : false;

    // ✅ Redirect to signin if trying to access protected page without valid token
    if (!isTokenValid) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

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
