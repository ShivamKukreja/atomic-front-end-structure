import classnames from 'classnames';
import {
  string,
} from 'prop-types';
import styled from 'styled-components';
import styles from './Header.style';
import logo from '../../../../logo.svg';

const Header = ({
  className,
}) => (
    <header className={classnames(className, 'header')}>
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
);

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: string,
};

const StyledHeader = styled(Header)`
  ${styles};
`;

export default StyledHeader;
export { Header as HeaderVanilla };
