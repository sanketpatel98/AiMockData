import generateData from "./utils/dataGenerator.js";

/**
 * Main function to generate mock data using AI.
 * 
 * @param {number} number - The number of items to generate.
 * @param {Array<{name: string, isArray: boolean}>} parameters - The parameters to use for generation.
 * @param {string} topic - The topic of the data generation.
 * @param {Object} [options] - Optional logging options.
 * @param {boolean} [options.logPerformanceData] - Whether to log performance data.
 * @param {boolean} [options.logSchema] - Whether to log the generated schema and prompt.
 * @param {boolean} [options.logRawData] - Whether to log the raw response data.
 * @returns {Promise<Array>} - The generated data.
 */
const aimockdata = async (number, parameters, topic, options = {}) => {
  return await generateData(number, parameters, topic, options);
};

export default aimockdata;
