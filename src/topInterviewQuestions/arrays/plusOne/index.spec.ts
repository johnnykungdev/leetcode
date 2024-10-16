import plusOne from './index';

describe('plusOne', () => {
  test('increments [1,2,3] to [1,2,4]', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test('increments [4,3,2,1] to [4,3,2,2]', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  test('increments [9] to [1,0]', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  test('increments [1,0,0] to [1,0,1]', () => {
    expect(plusOne([1, 0, 0])).toEqual([1, 0, 1]);
  });

  test('increments [0] to [1]', () => {
    expect(plusOne([0])).toEqual([1]);
  });

  test('increments [9,9,9] to [1,0,0,0]', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  test('increments [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] to [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]', () => {
    expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });

  test('case 2', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  })
});