/* use path imports to avoid pulling in unused modules from material ui core package */
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import styles from './MuiTextField.style';

const StyledMuiTextField = styled(TextField)`
  ${styles};
`;

export default StyledMuiTextField;
export { TextField };
