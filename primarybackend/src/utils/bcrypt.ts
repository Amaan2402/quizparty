import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (
  password: string,
  generatePassword: boolean = false
) => {
  let myPassword = password;
  if (generatePassword) {
    myPassword = Math.random().toString(36).slice(-8); // Generate a random password
  }
  const hashedPassword = await bcrypt.hash(myPassword, saltRounds);
  return hashedPassword;
};

export const comparePassword = async ({
  password,
  hashedPassword,
}: {
  password: string;
  hashedPassword: string;
}) => {
  return await bcrypt.compare(password, hashedPassword);
};
