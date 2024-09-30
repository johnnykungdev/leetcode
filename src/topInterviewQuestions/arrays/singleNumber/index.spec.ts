import singleNumber from './index';
import { describe } from '@jest/globals';

describe('singleNumber function', () => {
  it('should return the number that only appear once case 1', () => {
    const sample = [2, 2, 1];
    const result = singleNumber(sample);
    expect(result).toBe(1);
  });

  it('should return the number that only appear once case 2', () => {
    const sample = [4,1,2,1,2];
    const result = singleNumber(sample);
    expect(result).toBe(4);
  });

  it('should return the number that only appears once in a larger array', () => {
    const sample = [5, 3, 5, 7, 3, 9, 9];
    const result = singleNumber(sample);
    expect(result).toBe(7);
  });

  it('should return the number that only appears once when it is the first element', () => {
    const sample = [1, 2, 1, 2, 3];
    const result = singleNumber(sample);
    expect(result).toBe(3);
  });

  it('should return the number that only appears once when it is the last element', () => {
    const sample = [6, 7, 7, 6, 8, 8, 9];
    const result = singleNumber(sample);
    expect(result).toBe(9);
  });

  it('should handle negative numbers', () => {
    const sample = [-1, -2, -1, -3, -2];
    const result = singleNumber(sample);
    expect(result).toBe(-3);
  });

  it('should return the number that only appears once in an array with one element', () => {
    const sample = [10];
    const result = singleNumber(sample);
    expect(result).toBe(10);
  });
});