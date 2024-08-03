// utils/dataGenerator.js

import googleAI from '../lib/googleAI.js';
import { generateDynamicSchema, generateDynamicPrompt } from '../lib/schemaGenerator.js';
import handleError from './errorHandler.js';
import { logSchemaAndPrompt, logResponseText, logPerformance } from '../lib/performanceLogger.js';
import json5 from 'json5'; // Using json5 for more relaxed parsing
import validateInputs from './inputValidator.js'; // Import the validation function

const generateData = async (number, parameters, topic, logPerformanceData = false, logSchema = false, logRawData = false) => {
  try {
    validateInputs(number, parameters, topic);
  } catch (error) {
    handleError(error);
    return [];
  }

  const dynamicSchema = generateDynamicSchema(parameters);
  const dynamicPrompt = generateDynamicPrompt(number, parameters, topic);

  const startPromptTime = performance.now(); // Start time for prompt generation

  if (logSchema) {
    logSchemaAndPrompt(dynamicSchema, dynamicPrompt);
  }

  // Configure the model with the dynamic schema
  const model = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: dynamicSchema,
    }
  });

  try {
    const startRequestTime = performance.now(); // Start time for API request
    const result = await model.generateContent(dynamicPrompt);
    const endRequestTime = performance.now(); // End time for API request

    const responseText = await result.response.text(); // Ensure it's a string

    if (logRawData) {
      logResponseText(responseText); // Log raw data
    }

    const data = json5.parse(responseText);

    const endParseTime = performance.now(); // End time for parsing

    if (logPerformanceData) {
      logPerformance(startPromptTime, startRequestTime, endRequestTime, endParseTime);
    }

    return data;
  } catch (error) {
    handleError(error);
    return [];
  }
};

export default generateData;
