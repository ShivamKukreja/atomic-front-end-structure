import classnames from 'classnames';
import {
  bool, string, node, func, oneOf,
} from 'prop-types';
import styled from 'styled-components';
import noop from 'components/shared/utils/noop';
import styles from './Button.style';

/*
 * Atom Button
 */
const Button = ({
  ariaLabel,
  children,
  className,
  disabled,
  elementLocator,
  id,
  onClick,
  type,
}) => (
  <button
    className={classnames('flex-inline align-center justify-center', className)}
    id={id}
    aria-label={ariaLabel}
    p={{ xs: 2, sm: 3, md: 4 }}
    disabled={disabled}
    type={type}
    data-locator={elementLocator}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  ariaLabel: '',
  className: '',
  disabled: false,
  elementLocator: '',
  id: '',
  onClick: noop,
  type: 'button',
};

Button.propTypes = {
  type: oneOf(['button', 'submit']),
  disabled: bool,
  ariaLabel: string,
  children: node.isRequired,
  className: string,
  elementLocator: string,
  id: string,
  onClick: func,
};

const StyledButton = styled(Button)`
  ${styles};
`;

export default StyledButton;
export { Button as ButtonVanilla };
