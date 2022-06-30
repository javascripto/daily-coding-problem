import { doesTwoNumbersOfListAddsUpToKNumber } from '.';
import { doesTwoNumbersOfListAddsUpToKNumber as bonusSolution } from './bonus';

describe('doesTwoNumbersOfListAddsUpToKNumber', () => {
  it.each`
    numbers           | numberK
    ${[10, 15, 3, 7]} | ${25}
    ${[10, 15, 3, 7]} | ${13}
    ${[10, 15, 3, 7]} | ${17}
    ${[10, 15, 3, 7]} | ${18}
    ${[10, 15, 3, 7]} | ${22}
    ${[10, 15, 3, 7]} | ${10}
  `(
    'should return true when sum of two numbers of $numbers adds up to numberK $numberK',
    ({ numbers, numberK }) => {
      const result = [
        doesTwoNumbersOfListAddsUpToKNumber(numbers, numberK),
        bonusSolution(numbers, numberK),
      ];
      expect(result).toEqual([true, true]);
    }
  );

  it.each`
    numbers           | numberK
    ${[10, 15, 3, 7]} | ${11}
    ${[10, 15, 3, 7]} | ${28}
    ${[10, 15, 3, 7]} | ${0}
    ${[10, 15, 3, 7]} | ${35}
  `(
    'should return false when sum of two numbers of $numbers does not adds up to numberK $numberK',
    ({ numbers, numberK }) => {
      const result = [
        doesTwoNumbersOfListAddsUpToKNumber(numbers, numberK),
        bonusSolution(numbers, numberK),
      ];
      expect(result).toEqual([false, false]);
    }
  );
});
