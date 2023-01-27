import dotenv from "dotenv";
dotenv.config();

export const jwtSecret = process.env.JWT_SECRET;

export const jwtTokenDuration = 60*60*24;
