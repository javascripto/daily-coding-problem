export function doesTwoNumbersOfListAddsUpToKNumber(
  numbers: number[],
  numberK: number
): boolean {
  for (let left = 0; left < numbers.length - 1; left++) {
    for (let right = left + 1; right < numbers.length; right++) {
      if (numbers[left] + numbers[right] === numberK) return true;
    }
  }
  return false;
}

export function doesTwoNumbersOfListAddsUpToKNumber_onePass(
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
