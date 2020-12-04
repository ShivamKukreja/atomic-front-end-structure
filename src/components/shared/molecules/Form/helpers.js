const QUANTITY_SAMPLES = [
  'Select...',
  1,
  2,
  3,
  4,
];

export const makeSelectOptionsData = (arrayOfValues = []) => (arrayOfValues.map((label) => ({
  label,
  value: label === 'Select...' ? '' : label,
})));

export const QUANTITY_OPTIONS = makeSelectOptionsData(QUANTITY_SAMPLES);
