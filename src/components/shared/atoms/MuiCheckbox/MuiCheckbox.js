/* use path imports to avoid pulling in unused modules from material ui core package */
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import styles from './MuiCheckbox.style';

// API: Please refer https://material-ui.com/api/checkbox/

const StyledMuiCheckbox = styled(Checkbox)`
  ${styles};
`;

export default StyledMuiCheckbox;
export { Checkbox };
