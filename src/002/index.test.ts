describe.each([{ file: './index' }, { file: './bonus' }])(
  'transformIntegersIntoTheProductOfAllOtherNumbers $file',
  ({ file }) => {
    let transformIntegersIntoTheProductOfAllOtherNumbers: (
      integers: number[]
    ) => number[];

    beforeAll(() => {
      import(file).then((module) => {
        transformIntegersIntoTheProductOfAllOtherNumbers =
          module.transformIntegersIntoTheProductOfAllOtherNumbers;
      });
    });

    it.each`
      input              | expectedOutput
      ${[1, 2, 3, 4, 5]} | ${[120, 60, 40, 30, 24]}
      ${[3, 2, 1]}       | ${[2, 3, 6]}
    `(
      'should return $expectedOutput for $input',
      ({ input, expectedOutput }) => {
        const output = transformIntegersIntoTheProductOfAllOtherNumbers(input);
        expect(output).toEqual(expectedOutput);
      }
    );
  }
);
