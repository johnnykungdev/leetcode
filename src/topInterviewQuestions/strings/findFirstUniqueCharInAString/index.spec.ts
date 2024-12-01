import firstUniqChar from './index';

describe('firstUniqChar', () => {
  test('should return the index of the first non-repeating character', () => {
    expect(firstUniqChar("leetcode")).toBe(0);
    expect(firstUniqChar("loveleetcode")).toBe(2);
    expect(firstUniqChar("aabb")).toBe(-1);
    expect(firstUniqChar("")).toBe(-1); // Edge case: empty string
    expect(firstUniqChar("a")).toBe(0); // Edge case: single character
    expect(firstUniqChar("abacabad")).toBe(3); // Non-repeating character in the middle
  });
});