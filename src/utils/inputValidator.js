// inputValidator.js

/**
 * Validates the inputs for the generateData function.
 * 
 * @param {number} number - The number of items to generate.
 * @param {Array<{name: string, isArray: boolean}>} parameters - The parameters to use for generation.
 * @param {string} topic - The topic of the data generation.
 * @param {Object} [options] - Optional logging options.
 * @param {boolean} [options.logPerformanceData] - Whether to log performance data.
 * @param {boolean} [options.logSchema] - Whether to log the generated schema and prompt.
 * @param {boolean} [options.logRawData] - Whether to log the raw response data.
 * @throws {TypeError} If any of the inputs are invalid, with a link to the documentation.
 */
const validateInputs = (number, parameters, topic, options = {}) => {
  const docLink = ' For more details, see the documentation: https://github.com/sanketpatel98/AiMockData/blob/master/doc.md';

  // Validate the 'number' parameter
  if (typeof number !== 'number') {
    throw new TypeError('The "number" parameter must be an integer.' + docLink);
  }

  // Validate the 'topic' parameter
  if (typeof topic !== 'string') {
    throw new TypeError('The "topic" parameter must be a string.' + docLink);
  }

  // Validate the 'parameters' array
  if (!Array.isArray(parameters)) {
    throw new TypeError('The "parameters" parameter must be an array.' + docLink);
  }

  // Validate each item in the 'parameters' array
  parameters.forEach(param => {
    if (typeof param.name !== 'string') {
      throw new TypeError('Each "parameter" object must have a "name" property of type string.' + docLink);
    }
    if (typeof param.isArray !== 'boolean') {
      throw new TypeError('Each "parameter" object must have an "isArray" property of type boolean.' + docLink);
    }
  });

  // Validate the 'options' object if provided
  if (options) {
    if (typeof options !== 'object') {
      throw new TypeError('The "options" parameter must be an object.' + docLink);
    }

    const validOptions = ['logPerformanceData', 'logSchema', 'logRawData'];
    const optionKeys = Object.keys(options);

    optionKeys.forEach(key => {
      if (!validOptions.includes(key)) {
        throw new TypeError(`Invalid option: "${key}". Valid options are: ${validOptions.join(', ')}.` + docLink);
      }

      if (typeof options[key] !== 'boolean') {
        throw new TypeError(`The "${key}" option must be a boolean.` + docLink);
      }
    });
  }
};

export default validateInputs;
