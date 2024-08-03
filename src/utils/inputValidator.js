// inputValidator.js

const validateInputs = (number, parameters, topic) => {
    if (typeof number !== 'number') {
      throw new TypeError('The "number" parameter must be an integer.');
    }
  
    if (typeof topic !== 'string') {
      throw new TypeError('The "topic" parameter must be a string.');
    }
  
    if (!Array.isArray(parameters)) {
      throw new TypeError('The "parameters" parameter must be an array.');
    }
  
    parameters.forEach(param => {
      if (typeof param.name !== 'string') {
        throw new TypeError('Each "parameter" object must have a "name" property of type string.');
      }
      if (typeof param.isArray !== 'boolean') {
        throw new TypeError('Each "parameter" object must have an "isArray" property of type boolean.');
      }
    });
  };
  
  export default validateInputs;
  