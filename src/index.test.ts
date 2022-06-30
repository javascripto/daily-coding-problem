function sum(...numbers: number[]) {
  return numbers.reduce((acc, number) => acc + number, 0);
}

describe('index', () => {
  it('Should sum two numbers', () => {
    expect(sum(3, 5)).toBe(8);
    expect(sum(3, 5, 7)).toBe(15);
  });
});
