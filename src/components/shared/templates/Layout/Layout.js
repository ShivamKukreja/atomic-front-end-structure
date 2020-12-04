import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from 'components/shared/organisms/Header';
import { StylesProvider, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GlobalStyles from '../../styles';

// instantiate the default material ui theme
const muiTheme = createMuiTheme();
// eslint-disable-next-line no-console
console.log('theme', muiTheme);
// @TODO: Add Google Analytics

/**
 * Material UI styles should be injected first so that they can be overridden by cascading
 * Note the injection order below, it is really important
 * Refer https://material-ui.com/guides/interoperability/#styled-components
 */
const Layout = ({ children }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <GlobalStyles />
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={muiTheme}>
        <Header />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
