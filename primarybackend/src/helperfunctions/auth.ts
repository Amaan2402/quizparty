import { prisma } from "../utils/db";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { CustomError } from "../utils/CustomError";
import { generateToken } from "../utils/jwt";

export const isUserExists = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(user, "User found in DB::12");
    return user
      ? {
          user: user,
          status: true,
          message: "User found",
        }
      : {
          user: {
            id: "",
            name: "",
            email: "",
            password: "",
            mailVerified: null,
          },
          status: false,
          message: "User not found",
        };
  } catch (error) {
    throw new CustomError("Database error", 500);
  }
};

export const createUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const userExists = await isUserExists(email);
    if (userExists.status) {
      throw new CustomError("User already exists", 400);
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error; // Rethrow the CustomError to be handled by the caller
    }
    throw new CustomError("User registration failed", 500);
  }
};

export const loginUserDb = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const user = await isUserExists(email);
    if (!user.status) {
      throw new CustomError("User not found", 404);
    }

    let isPasswordValid = false;

    if (user.user) {
      isPasswordValid = await comparePassword({
        password,
        hashedPassword: user.user.password,
      });
    }

    if (!isPasswordValid) {
      throw new CustomError("Invalid password", 401);
    }

    const token = generateToken({
      userId: user.user.id,
      email: user.user.email,
    });

    console.log("Generated Token:", token);

    return {
      message: "Login successful",
      data: {
        id: user?.user?.id,
        name: user?.user?.name,
        email: user?.user?.email,
        token: token,
      },
    };
  } catch (error) {
    if (error instanceof CustomError) {
      throw error; // Rethrow the CustomError to be handled by the caller
    }
    throw new CustomError("User login failed", 500);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        name: true,
        id: true,
      },
    });

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    return user;
  } catch (err) {
    console.log(err, "Error in getUserById function");
    if (err instanceof CustomError) {
      throw err;
    }
    throw new CustomError("User retrieval failed", 500);
  }
};
