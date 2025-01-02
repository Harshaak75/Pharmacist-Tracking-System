import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const port = process.env.PORT || 3000;
export const admin_secret_key = process.env.ADMIN_CREATION_SECRET;

if (!admin_secret_key) {
  throw new Error("ADMIN_CREATION_SECRET is required but not defined");
}