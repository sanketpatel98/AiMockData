import dotenv from 'dotenv';

dotenv.config();

const gemini_api_key = process.env.API_KEY;
if (!gemini_api_key) {
  throw new Error("API key is not set in environment variables.");
}

export default gemini_api_key;