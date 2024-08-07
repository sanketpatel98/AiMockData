# aimockdata

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
const topic = 'All Canadian States';

aimockdata(number, parameters, topic)
  .then(data => console.log(data))
  .catch(error => console.error('Error generating data:', error));
```
## Customizing Inputs

You can customize the `parameters` array to generate mock data that fits your specific needs:

- **`name`**: Specify the names of the attributes you want in your data. Each name represents a field in the generated data objects.
- **`isArray`**: Set this to `true` if the attribute should be an array of values, or `false` if it should be a single value.


### Example: Generating Mock Data for Latest News Articles

Here's an example of how to generate mock data for the latest news articles using live data:

```javascript
const number = 5; // Number of articles to generate
const parameters = [
  { name: 'headline', isArray: false },
  { name: 'author', isArray: false },
  { name: 'publishDate', isArray: false },
  { name: 'tags', isArray: true },
  { name: 'content', isArray: false },
];
const topic = 'News Articles';

aimockdata(number, parameters, topic)
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

```