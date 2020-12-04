// import React from 'react';
import Typography from '@material-ui/core/Typography';
import StyledMuiCheckbox from 'components/shared/atoms/MuiCheckbox';
// Below button atom is used for demonstration purpose only
// @TODO: remove this or replace with material ui button component
import Button from 'components/shared/atoms/Button';
import styled from 'styled-components';
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CTA = styled(Button)`
  ${spacing}
`;

const StyledGrid = styled(Grid)`
  ${spacing}
`;

const StyledPaper = styled(Paper)`
  ${spacing}
`;

function Home() {
  return (
    <div>
      <StyledGrid p={{ xs: 2, md: 4 }} container spacing={3}>
        {/* There is already an h1 in the page, let's not duplicate it. */}
        <Grid item xs={6}>
          <Typography component="h1" variant="h1">
            h1. Heading
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2">
            h2. Heading
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* There is already an h2 in the page, let's not duplicate it. */}
          <Typography variant="h2" component="h3">
            h3. Heading with typography of h2
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* There is already an h1 in the page, let's not duplicate it. */}
          <Typography>default component is paragraph</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Let us look at the ways of working with styled</Typography>
        </Grid>
      </StyledGrid>
      <StyledGrid m={{ xs: 4 }} container spacing={3}>
        <StyledPaper m={{ xs: 4 }} p={{ xs: 4 }}>
          <StyledGrid m={{ xs: 4 }} item xs={6}>
            <Button>Primary Button</Button>
          </StyledGrid>
          <Grid item xs={6}>
            <Button $variant="secondary">Secondary Button</Button>
          </Grid>
        </StyledPaper>
        <StyledPaper m={{ xs: 4 }} p={{ xs: 4 }}>
          <StyledGrid m={{ xs: 4 }} item xs={3}>
            <Button $variant="primary" disabled>
              disabled
            </Button>
          </StyledGrid>
          <Grid item xs={12}>
            <CTA p={{ xs: 2, sm: 4, md: 8 }}>Primary Responsive Button</CTA>
          </Grid>
        </StyledPaper>
        <StyledPaper m={{ xs: 4 }} p={{ xs: 4 }}>
          <Grid item xs={12}>
            <StyledMuiCheckbox />
          </Grid>
          <Grid item xs={12}>
            <StyledMuiCheckbox $primary />
          </Grid>
        </StyledPaper>
      </StyledGrid>
    </div>
  );
}

export default Home;
