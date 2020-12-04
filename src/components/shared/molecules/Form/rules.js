/**
 * validation rules for form fields
 */

const ProductId = {
  required: 'Please enter product id',
  minLength: {
    value: 2,
    message: 'Please enter at least two characters',
  },
};

const Quantity = {
  required: 'Please enter quantity.',
};

const SAMPLE_FORM_RULES = {
  ProductId,
  Quantity,
};

export default SAMPLE_FORM_RULES;
