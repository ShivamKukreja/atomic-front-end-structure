import { createGlobalStyle } from 'styled-components';
import globalStyles from './globalStyles';

const GlobalStylesObj = createGlobalStyle`
  ${globalStyles}
`;

export default GlobalStylesObj;
