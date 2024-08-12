# aimockdata

[![GitHub Repo](https://img.shields.io/github/repo-size/sanketpatel98/AiMockData?style=flat-square)](https://github.com/sanketpatel98/AiMockData)
[![npm Version](https://img.shields.io/npm/v/aimockdata?style=flat-square)](https://www.npmjs.com/package/aimockdata)
[![npm Downloads](https://img.shields.io/npm/dm/aimockdata?style=flat-square)](https://www.npmjs.com/package/aimockdata)

`aimockdata` is a powerful library for generating dynamic data based on specified parameters. 🚀 It’s designed to help you quickly create mock data for various applications, allowing you to define attributes and their types, and generate data accordingly. 🛠️

It is based on Google Gemini (gemini-1.5-flash). To use this library, you will need a Gemini free API key. 🔑 You can obtain your API key from [Google Gemini API](https://ai.google.dev/gemini-api/docs/api-key).

## Installation

To install `aimockdata`, use npm:

```bash
npm install aimockdata
```

## Configuration

To use `aimockdata`, you'll need to configure your environment with a Google Gemini API key. Follow these steps:

1. **Create a `.env` file** in the root of your project directory.
2. **Obtain your API key** from [Google Gemini API](https://ai.google.dev/gemini-api/docs/api-key).
3. **Add your API key** to the `.env` file in the following format:

    ```plaintext
    API_KEY='your_api_key_here'
    ```

Make sure to replace `'your_api_key_here'` with the actual API key you received.

This configuration will allow `aimockdata` to access the Gemini API and generate the data you need. 🔑


## Usage

Here's a quick example of how to use the `aimockdata` package:

```javascript
import aimockdata from 'aimockdata';

const number = 10;
const parameters = [
  { name: 'state', isArray: false },
  { name: 'capital', isArray: false },
  { name: 'cities', isArray: true },
  { name: 'population', isArray: false },
];
const topic = 'All Canadian Provinces';

aimockdata(number, parameters, topic)
  .then(data => console.log(data))
  .catch(error => console.error('Error generating data:', error));
```

## Parameters /  Customizing Inputs
The parameters argument is an `array` of objects that define the schema for the generated data. Each object should have the following properties:

- `name` (string): The name of the parameter. 

- `isArray` (boolean): Indicates whether the parameter is an array.
Example
javascript
Copy code
const parameters = [
  { name: 'state', isArray: false },    // Single string parameter
  { name: 'capital', isArray: false },  // Single string parameter
  { name: 'cities', isArray: true },    // Array of strings
  { name: 'population', isArray: false } // Single string parameter
];
- `Options`
You can also pass additional options to control logging and performance metrics:

    - `logPerformanceData` (boolean): If true, performance metrics will be logged. Default is false.
    - `logSchema` (boolean): If true, the generated schema and prompt will be logged. Default is false.
     - `logRawData` (boolean): If true, the raw response data will be logged. Default is false.
```js
const options = {
  logPerformanceData: true, // Log performance metrics
  logSchema: false,         // Do not log the generated schema and prompt
  logRawData: true          // Log the raw response data
};
aimockdata(number, parameters, topic, options)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```
## Examples
### 📊 Latest Programming Languages Trends
```js 
import aimockdata from 'aimockdata';

const number = 6;
const parameters = [
  { name: 'toolName', isArray: false },
  { name: 'category', isArray: false },
  { name: 'latestVersion', isArray: false },
  { name: 'releaseDate', isArray: false },
  { name: 'features', isArray: true },
];
const topic = 'Recent Software Development Tools';

(async () => {
  try {
    const mockData = await aimockdata(number, parameters, topic);
    console.log(mockData);
  } catch (error) {
    console.error('Error generating data:', error);
  }
})();
```
### 🕵️‍♂️ Pokemon list with details
```js
import aimockdata from 'aimockdata';

const number = 5;
const parameters = [
  { name: 'name', isArray: false },
  { name: 'pokemonType', isArray: false },
  { name: 'moves', isArray: true },
  { name: 'strongAgainst', isArray: true },
  { name: 'weakAgainst', isArray: true },
  { name: 'height', isArray: false },
  { name: 'weight', isArray: false },
];
const topic = 'First 5 Pokémon as per Pokedex';

(async () => {
  try {
    const mockData = await aimockdata(number, parameters, topic);
    console.log(mockData);
  } catch (error) {
    console.error('Error generating data:', error);
  }
})();
```