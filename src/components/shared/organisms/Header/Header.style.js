import { css } from 'styled-components';

const HeaderStyles = () => (css`

  &.header {
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: calc(10px + 2vmin);
    color: white;

    .logo {
      height: 10vh;
      pointer-events: none;
    }

    a {
      color: #61dafb;
    }

  }

  `
);

export default HeaderStyles;
