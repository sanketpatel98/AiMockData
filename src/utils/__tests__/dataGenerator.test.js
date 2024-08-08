import generateData from '../dataGenerator.js';
import { describe, test, expect } from '@jest/globals';

describe('generateData', () => {
  test('should generate data correctly', async () => {
    const number = 10;
    const parameters = [
      { name: 'province', isArray: false },
      { name: 'capital', isArray: false },
      { name: 'cities', isArray: true },
      { name: 'population', isArray: false },
    ];
    const topic = 'All Canadian Provinces';

    const data = await generateData(number, parameters, topic);

    // Check that the data is an array
    expect(Array.isArray(data)).toBe(true);
    
    // Check the length of the array
    expect(data.length).toBe(number);

    // Check that each item in the array has the required properties
    data.forEach(item => {
      expect(item).toHaveProperty('state');
      expect(item).toHaveProperty('capital');
      expect(item).toHaveProperty('cities');
      expect(item).toHaveProperty('population');
    });
  }, 100000);
});
