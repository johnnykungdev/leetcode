import containsDuplicate from "./index";
import { describe } from "@jest/globals";

describe('containsDuplicate function', () => {
  it('should return true when there are at least one duplicate number - case 1', () => {
    const sample = [1, 2, 3, 4, 4, 5, 6, 7];
    const result = containsDuplicate(sample);
    expect(result).toBe(true);
  });

  it('should return true when there are at least one duplicate number - case 2', () => {
    const sample = [0,4,5,0,3,6];
    const result = containsDuplicate(sample);
    expect(result).toBe(true);
  });

  it('should return false when all the numbers are unique', () => {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = containsDuplicate(sample);
    expect(result).toBe(false);
  })
})