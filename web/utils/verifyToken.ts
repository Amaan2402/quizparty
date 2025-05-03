// utils/verifyToken.ts
import { jwtVerify } from "jose";

console.log("JWT_SECRET", process?.env?.JWT_SECRET?.trim());
const secret = new TextEncoder().encode(process?.env?.JWT_SECRET?.trim());
export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
    });
    if (!payload) {
      console.log("Payload is null or undefined");
      return null;
    } else if (typeof payload !== "object") {
      console.log("Payload is not an object:", payload);
      return null;
    }

    return true;
  } catch (err) {
    console.error("Error verifying token:", err);
    return null;
  }
}
