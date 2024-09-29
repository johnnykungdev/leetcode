import containsDuplicate from "./index";
import { describe } from "@jest/globals";

describe('containsDuplicate function', () => {
  it('should return true when there are at least one duplicate number', () => {
    const sample = [1, 2, 3, 4, 4, 5, 6, 7];
    const result = containsDuplicate(sample);
    expect(result).toBe(true);
  });

  it('should return false when all the numbers are unique', () => {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = containsDuplicate(sample);
    expect(result).toBe(false);
  })
})