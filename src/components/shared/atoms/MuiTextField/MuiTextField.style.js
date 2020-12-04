import { css } from 'styled-components';

const MuiTextFieldStyles = () => (css`

    /**
     * Below rule enables to set the min-width for simple material-ui select ( non-native )
     * Though it will be used by all text-fields
     * Could be revisited if needed
     */
    &.MuiTextField-root {
      width: 100%;
    }

  `);

export default MuiTextFieldStyles;
