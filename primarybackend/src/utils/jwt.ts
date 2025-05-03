import jwt from "jsonwebtoken";

export const generateToken = ({
  userId,
  email,
}: {
  userId: string;
  email: string;
}) => {
  if (process.env.JWT_SECRET) {
    console.log("Generating token for user:", process.env.JWT_SECRET);
    const token = jwt.sign({ userId, email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    console.log("Token generated:", token);
    return token;
  }

  throw new Error("Error generating token: JWT_SECRET is not defined");
};

export const verifyToken = (token: string) => {
  if (process.env.JWT_SECRET) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (typeof decoded === "object" && decoded !== null) {
        return {
          userId: decoded.userId,
          email: decoded.email,
        };
      }

      throw new Error("Invalid token payload");
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  throw new Error("Error verifying token: JWT_SECRET is not defined");
};
