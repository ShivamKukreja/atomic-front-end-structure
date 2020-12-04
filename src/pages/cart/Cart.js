import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SAMPLE_FORM_RULES from 'components/shared/molecules/Form/rules';
import { QUANTITY_OPTIONS } from 'components/shared/molecules/Form/helpers';
import Form from 'components/shared/molecules/Form';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const StyledGrid = styled(Grid)`
  ${spacing}
`;

const StyledPaper = styled(Paper)`
  ${spacing}
`;

const defaultValues = {
  productId: '',
  quantity: '',
};

const renderProductIdField = () => (
  <StyledGrid item xs={12} mb={{ xs: 4 }}>
    <Form.FieldInput
      name="productId"
      id="fieldOne"
      label="Product Id"
      placeholder="Product Id"
      validationRules={SAMPLE_FORM_RULES.ProductId}
    />
  </StyledGrid>
);

const renderProductQuantityField = () => (
  <StyledGrid item xs={12} mb={{ xs: 4 }}>
    <Form.FieldSelect
      name="quantity"
      id="fieldTwo"
      label="Quantity"
      options={QUANTITY_OPTIONS}
      native={false}
      validationRules={SAMPLE_FORM_RULES.Quantity}
    />
  </StyledGrid>
);

const renderSubmitButton = () => (
  <Grid item xs={12}>
    <Button type="submit" variant="contained" color="secondary">
      Primary
    </Button>
  </Grid>
);

const Cart = () => {
  // state hook
  const [values, setFormValues] = useState(null); // only demonstration purpose here
  // form submit callback
  const onSubmit = (data) => setFormValues(data);
  // dom
  return (
    <StyledGrid
      xs={12}
      p={{ xs: 2, md: 4 }}
      justify="center"
      alignItems="center"
      direction="column"
      container
    >
      <Grid item xs={12}>
        <Typography variant="h3" component="h3" align="center">
            Cart Component, Sample Form
        </Typography>
      </Grid>
      <StyledPaper m={{ xs: 4 }} p={{ xs: 4 }}>
        <Form
          defaultValues={defaultValues}
          onSubmit={onSubmit}
        >
          {renderProductIdField()}
          {renderProductQuantityField()}
          {renderSubmitButton()}
        </Form>
      </StyledPaper>
      {values && (
        <StyledPaper m={{ xs: 4 }} p={{ xs: 4 }}>
          <Grid item xs={12}>
          <Typography>
            <p>Below are the form values submitted post validation</p>
            <pre>
              {JSON.stringify(values, null, 2)}
            </pre>
          </Typography>
          </Grid>
        </StyledPaper>
      )}
    </StyledGrid>
  );
};

export default Cart;
