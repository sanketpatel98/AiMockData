import { GoogleGenerativeAI } from "@google/generative-ai";
import gemini_api_key from '../config/dotenvConfig.js';

const googleAI = new GoogleGenerativeAI(gemini_api_key);

export default googleAI;
