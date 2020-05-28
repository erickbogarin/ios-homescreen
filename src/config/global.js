import css from '@emotion/css'

const globalStyles = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;

    font-family: -apple-system, system-ui, BlinkMacSystemFont;

    background: #171617;

    @media (min-width: 480px) {
      max-width: 300px;
      margin: 0 auto;
    }
  }

  @keyframes shake {
    0% {
      -webkit-transform: translate(1px, 0px) rotate(0deg);
    }
    10% {
      -webkit-transform: translate(0px, 0px) rotate(-1deg);
    }
    20% {
      -webkit-transform: translate(-1px, 0px) rotate(1deg);
    }
    30% {
      -webkit-transform: translate(0px, 0px) rotate(0deg);
    }
    40% {
      -webkit-transform: translate(1px, -0px) rotate(1deg);
    }
    50% {
      -webkit-transform: translate(0px, 0px) rotate(-1deg);
    }
    60% {
      -webkit-transform: translate(-1px, 0px) rotate(0deg);
    }
    70% {
      -webkit-transform: translate(0px, 0px) rotate(-1deg);
    }
    80% {
      -webkit-transform: translate(1px, 0px) rotate(1deg);
    }
    90% {
      -webkit-transform: translate(0px, 0px) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(-1px, -0px) rotate(-1deg);
    }
  }
`
export default globalStyles
