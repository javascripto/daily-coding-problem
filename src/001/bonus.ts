export function doesTwoNumbersOfListAddsUpToKNumber(
  numbers: number[],
  numberK: number
): boolean {
  const leftLimit = numbers.length - 1;
  const rightLimit = numbers.length;

  let left = 0;
  let right = 1;

  while (left < leftLimit && right < rightLimit) {
    if (numbers[left] + numbers[right] === numberK) return true;

    right++;
    if (right === rightLimit) {
      left++;
      right = left + 1;
    }
  }

  return false;
}
