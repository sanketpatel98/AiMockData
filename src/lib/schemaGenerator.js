// Function to determine parameter type
const getPropertyType = (param) => {
    if (param.isArray) {
      return { type: 'array', items: { type: 'string' } }; // Adjust as needed for nested types
    } else {
      return { type: 'string' };
    }
  };
  
  // Function to generate dynamic schema
  const generateDynamicSchema = (parameters) => {
    const properties = parameters.reduce((acc, param) => {
      acc[param.name] = getPropertyType(param);
      return acc;
    }, {});
  
    return {
      type: 'array',
      items: {
        type: 'object',
        properties,
        required: parameters.filter(param => !param.isArray).map(param => param.name), // Required only non-array parameters
      },
    };
  };
  
  // Function to generate dynamic prompt
  const generateDynamicPrompt = (number, parameters, topic) => {
    const paramList = parameters.map(param => {
      if (param.isArray) {
        return `${param.name} (array)`;
      } else {
        return param.name;
      }
    }).join(', ');
  
    return `
  Generate a list of ${number} ${topic} with the following attributes:
  - ${paramList}
  
  Format the response as a JSON array of objects, where each object represents a ${topic} with ${paramList}.
  
  Example:
  [
    {
      "parameter1": "value1",
      "parameter2": "value2",
      "parameter3": ["value3a", "value3b"], // Array for array parameter
      ...
    },
    ...
  ]
    do not add any character that can not be parsed by json5 parser ex. '\n' '*'
  `;
  };
  
  export { generateDynamicSchema, generateDynamicPrompt };
  