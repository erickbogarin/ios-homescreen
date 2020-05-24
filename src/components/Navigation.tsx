/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const navigationStyle = css`
  .menu__list {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menu__item {
    color: rgba(255, 255, 255, 0.4);
    font-size: 40px;
    line-height: 0.5;
    margin: 0;
    padding: 0;
  }

  .menu__item.active {
    color: white;
  }
`

function Navigation() {
  return (
    <nav css={navigationStyle}>
      <ul className="menu__list">
        <li className="menu__item">
          <span role="link">·</span>
        </li>
        <li className="active">
          <span role="link">·</span>
        </li>
        <li className="menu__item">
          <span role="link">·</span>
        </li>
        <li className="menu__item">
          <span role="link">·</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
