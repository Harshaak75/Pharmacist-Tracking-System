import dotenv from "dotenv";

const env = dotenv.config();

export const port = process.env.PORT || 3000;