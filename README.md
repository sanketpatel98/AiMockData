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
  { name: 'province', isArray: false },
  { name: 'capital', isArray: false },
  { name: 'cities', isArray: true },
  { name: 'population', isArray: false },
];
const topic = 'All Canadian Provinces';

aimockdata(number, parameters, topic)
  .then(data => console.log(data))
  .catch(error => console.error('Error generating data:', error));
```
For more detailed documentation, please visit [our full documentation](https://github.com/sanketpatel98/AiMockData/blob/master/doc.md).