// main.js

import generateData from './utils/dataGenerator.js';

// Example usage with user-defined parameter types
const number = 10;
const parameters = [
  { name: 'state', isArray: false },
  { name: 'capital', isArray: false },
  { name: 'cities', isArray: true },
  { name: 'population', isArray: false }, // Fixing the typo from 'populaiton' to 'population'
];
const topic = 'All Canada States';
// const topic = 10;
const logPerformanceData = true; // Set this to false to skip logging performance data
const logSchema = true; // Set this to false to skip logging schema and prompt
const logRawData = true; // Set this to false to skip logging raw data

// generateData(number, parameters, topic, logPerformanceData, logSchema, logRawData).then((data) => {
//   console.log(data);
// });


generateData(number, parameters, topic).then((data) => {
    console.log(data);
  });
