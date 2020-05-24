/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const navigationStyle = css`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: rgba(255, 255, 255, 0.4);
    font-size: 40px;
    line-height: 0.5;
    margin: 0;
    padding: 0;
  }

  li.active {
    color: white;
  }
`

function Navigation() {
  return (
    <nav css={navigationStyle}>
      <ul>
        <li>
          <span role="link">·</span>
        </li>
        <li className="active">
          <span role="link">·</span>
        </li>
        <li>
          <span role="link">·</span>
        </li>
        <li>
          <span role="link">·</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
