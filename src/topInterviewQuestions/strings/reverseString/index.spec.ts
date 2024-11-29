import reverseString from ".";

describe('reverseString', () => {
  it('should reverse a simple string', () => {
    const input = ["h", "e", "l", "l", "o"];
    reverseString(input);
    expect(input).toEqual(["o", "l", "l", "e", "h"]);
  });

  it('should handle an empty string', () => {
    const input: string[] = [];
    reverseString(input);
    expect(input).toEqual([]);
  });

  it('should handle a single character', () => {
    const input = ["a"];
    reverseString(input);
    expect(input).toEqual(["a"]);
  });

  it('should reverse a string with two characters', () => {
    const input = ["a", "b"];
    reverseString(input);
    expect(input).toEqual(["b", "a"]);
  });

  it('should reverse a string with special characters', () => {
    const input = ["@", "#", "$", "%"];
    reverseString(input);
    expect(input).toEqual(["%", "$", "#", "@"]);
  });

  it('should reverse a palindrome', () => {
    const input = ["r", "a", "c", "e", "c", "a", "r"];
    reverseString(input);
    expect(input).toEqual(["r", "a", "c", "e", "c", "a", "r"]);
  });
});