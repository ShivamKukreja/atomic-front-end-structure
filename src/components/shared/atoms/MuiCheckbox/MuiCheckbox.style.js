import { css } from 'styled-components';

const MuiCheckboxStyles = (props) => {
  const { $primary } = props;
  return (css`

    ${() => $primary && `
      &.MuiCheckbox-root {
        color: #000;
      }
      &.Mui-checked {
        color: teal;
      }
    `}

  `
  );
};
export default MuiCheckboxStyles;
