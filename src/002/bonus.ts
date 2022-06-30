// without division
export function transformIntegersIntoTheProductOfAllOtherNumbers(
  integers: number[]
): number[] {
  return integers.map((_, currentNumberIndex) => {
    return integers.reduce((total, number, index) => {
      if (index === currentNumberIndex) return total;
      return total * number;
    }, 1);
  });
}
