import { css } from 'styled-components';
/*
 * Atom Button
 */
const ButtonStyles = (props) => {
  const {
    $variant = 'primary',
    theme: { spacing, breakpoints },
    disabled,
  } = props;

  return (css`

    position: relative;
    min-height: 40px;
    cursor: ${() => (disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:focus {
      outline: none;
    }
    ${() => $variant === 'primary' && `
      background-color: #fff;
      color: #FF9900;
      &:hover, &:focus {
        background-color: #FDF1F1;
      }
      &:active {
        background-color: #33A125;
        color: #fff;
      }
      border: 1px solid #FF9900;
      border-radius: 2px;
      padding: ${spacing(1)}px ${spacing(2)}px;
    `};

    ${() => $variant === 'secondary' && `
      background-color: #fff;
      color: #EB5757;
      &:hover, &:focus {
        background-color: #FDF1F1;
      }
      &:active {
        background-color: #33A125;
        color: #fff;
      }
      border: 1px solid #EB5757;
      border-radius: 2px;
      padding: ${spacing(2)}px ${spacing(4)}px;
      ${breakpoints.up('md')} {
        padding: ${spacing(3)}px ${spacing(6)}px
      }
    `}

    ${() => disabled && `
      background-color: #F7F7F7;
      color: #C4C4C4;
      &:hover, &:focus, &:active{
        background-color: #F7F7F7;
      }
    `}

    `
  );
};

export default ButtonStyles;
