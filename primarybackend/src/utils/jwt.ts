import jwt from "jsonwebtoken";

export const generateToken = ({
  userId,
  email,
  expiresIn = "7d",
  secret,
}: {
  userId: string;
  email: string;
  expiresIn?: jwt.SignOptions["expiresIn"];
  secret?: string;
}) => {
  const secretKey = secret || process.env.JWT_SECRET;
  if (!secretKey) {
    throw new Error("JWT secret is not defined");
  }
  if (secretKey) {
    console.log("Generating token for user:", secretKey);
    const token = jwt.sign({ userId, email }, secretKey, {
      expiresIn,
      algorithm: "HS256",
    });
    console.log("Token generated:", token);
    return token;
  }

  throw new Error("Error generating token: JWT_SECRET is not defined");
};

export const verifyToken = (token: string, secret?: string) => {
  const secretKey = secret || process.env.JWT_SECRET;
  if (secretKey) {
    try {
      const decoded = jwt.verify(token, secretKey);

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
