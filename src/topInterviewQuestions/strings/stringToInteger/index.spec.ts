import myAtoi from './index';

describe('myAtoi', () => {
  test('basic positive number', () => {
    expect(myAtoi('42')).toBe(42);
  });

  test('negative number with spaces', () => {
    expect(myAtoi('   -42')).toBe(-42);
  });

  test('positive number with plus sign', () => {
    expect(myAtoi('+1')).toBe(1);
  });

  test('number with leading zeros', () => {
    expect(myAtoi('00000-42')).toBe(0);
  });

  test('max integer overflow', () => {
    expect(myAtoi('2147483648')).toBe(2147483647); // 2^31 - 1
  });

  test('min integer overflow', () => {
    expect(myAtoi('-2147483649')).toBe(-2147483648); // -2^31
  });

  test('invalid input starting with letters', () => {
    expect(myAtoi('words and 987')).toBe(0);
  });

  test('decimal number', () => {
    expect(myAtoi('3.14159')).toBe(3);
  });

  test('number with trailing characters', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
  });

  test('empty string', () => {
    expect(myAtoi('')).toBe(0);
  });

  test('only spaces', () => {
    expect(myAtoi('    ')).toBe(0);
  });

  test('multiple signs', () => {
    expect(myAtoi('+-12')).toBe(0);
  });
});