/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const homeScreenStyle = css`
  background-image: url('https://i.pinimg.com/originals/7c/33/f7/7c33f78ca6c13ab76714a9ac634f53e7.png');
  background-size: cover;

  height: 100vh;
  max-height: 600px;

  border-radius: 25px;
  border: 5px solid black;

  position: absolute;
  top: 50%;
  width: 300px;
  transform: translateY(-50%);

  .body {
    display: flex;
    flex-direction: column;
    max-height: inherit;
    height: calc(100% - 22px);
  }

  .appList {
    flex-grow: 1;
  }

  .footer {
    margin-bottom: 5px;
  }
`

const HomeScreen = () => (
  <div css={homeScreenStyle}>
    <div className="body"></div>
  </div>
)

export default HomeScreen
