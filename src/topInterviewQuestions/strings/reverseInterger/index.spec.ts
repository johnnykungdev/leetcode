import reverse from '.';

describe('reverse function', () => {
  test('should reverse positive integers', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(120)).toBe(21);
  });

  test('should reverse negative integers', () => {
    expect(reverse(-123)).toBe(-321);
    expect(reverse(-10)).toBe(-1);
  });

  test('should return 0 for input 0', () => {
    expect(reverse(0)).toBe(0);
  });

  test('should return 0 for integers that exceed 32-bit integer range', () => {
    expect(reverse(1534236469)).toBe(0); // Exceeds 32-bit range
    expect(reverse(-2147483648)).toBe(0); // Exceeds 32-bit range
    expect(reverse(2147483647)).toBe(0); // Exceeds 32-bit range
  });

  test('should handle single digit numbers', () => {
    expect(reverse(5)).toBe(5);
    expect(reverse(-3)).toBe(-3);
  });

  // Edge cases
  test('should handle the maximum positive 32-bit integer', () => {
    expect(reverse(2147483647)).toBe(0); // Reversed value exceeds range
  });

  test('should handle the minimum negative 32-bit integer', () => {
    expect(reverse(-2147483648)).toBe(0); // Reversed value exceeds range
  });

  test('should handle numbers with trailing zeros', () => {
    expect(reverse(1000)).toBe(1); // Trailing zeros should be removed
    expect(reverse(-1000)).toBe(-1); // Trailing zeros should be removed
  });

  test('should handle large numbers with multiple digits', () => {
    expect(reverse(123456789)).toBe(987654321); // Regular case
    expect(reverse(-987654321)).toBe(-123456789); // Regular case
  });

  test('should handle numbers that are already palindromic', () => {
    expect(reverse(121)).toBe(121); // Palindrome
    expect(reverse(-121)).toBe(-121); // Palindrome
  });
});