import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.NODE_ENV === 'development' ? 8800 : process.env.PORT,
  databaseURL: process.env.DATABASE_URI,
  secret_key: process.env.SECRET_KEY,
};
