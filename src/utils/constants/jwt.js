import dotenv from "dotenv";
dotenv.config({
  path: `envs/${process.env.NODE_ENV}.env`
});

export const jwtSecret = process.env.JWT_SECRET;

export const jwtTokenDuration = 60*60*24;
