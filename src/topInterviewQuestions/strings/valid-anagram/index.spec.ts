import isAnagram from './index';

describe('isAnagram', () => {
  test('should return true for anagrams', () => {
    const result = isAnagram("listen", "silent");
    expect(result).toBe(true);
  });

  test('should return false for non-anagrams', () => {
    const result = isAnagram("hello", "world");
    expect(result).toBe(false);
  });

  test('should return true for anagrams with different lengths', () => {
    const result = isAnagram("anagram", "nagaram");
    expect(result).toBe(true);
  });

  test('should return false for different characters', () => {
    const result = isAnagram("rat", "car");
    expect(result).toBe(false);
  });
});