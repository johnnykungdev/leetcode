import rotate from './';

describe('rotate', () => {
  test('rotates a 3x3 matrix correctly', () => {
    const matrix = [[1,2,3],[4,5,6],[7,8,9]];
    rotate(matrix);
    expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
  });

  test('rotates a 4x4 matrix correctly', () => {
    const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
    rotate(matrix);
    expect(matrix).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
  });

  test('rotates a 4x4 matrix correctly', () => {
    const matrix = [[43,39,3,33,37,20,14],[9,18,9,-1,40,22,38],[14,42,3,23,12,14,32],[18,31,45,11,8,-1,31],[28,44,14,23,40,24,13],[29,45,33,45,20,0,45],[12,23,35,32,22,39,8]];
    rotate(matrix);
    expect(matrix).toEqual([[12,29,28,18,14,9,43],[23,45,44,31,42,18,39],[35,33,14,45,3,9,3],[32,45,23,11,23,-1,33],[22,20,40,8,12,40,37],[39,0,24,-1,14,22,20],[8,45,13,31,32,38,14]]);
  })
});