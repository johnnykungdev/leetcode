import singleNumber from './index';
import { describe } from '@jest/globals';

describe('singleNumber function', () => {
  it('should return the number that only appear once case 1', () => {
    const sample = [2, 2, 1];
    const result = singleNumber(sample);
    expect(result).toBe(1);
  });
});