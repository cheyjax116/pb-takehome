import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8888;

export const config = {
  server: {
    port: PORT,
  },
};
