/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const appItemStyle = css`
  position: relative;
  margin-top: 10px;

  &:not(:nth-of-type(4n + 1)) {
    margin-left: 5px;
  }

  &.moving {
    animation: shake 1.25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
  }

  &.moving:before {
    position: absolute;
    content: '𝗑';
    color: #c0312b;
    font-size: 12px;
    background-color: #fcc28b;
    border-radius: 50%;
    top: -5%;
    left: -8%;
    padding: 1px 5px;
    margin: 0;
  }

  span {
    color: white;
    font-weight: 300;
    font-size: 12px;
    animation-iteration-count: infinite;
  }
`

type AppIconProps = {
  children: React.ReactNode
  isMoving?: boolean
}

function AppIcon({ children, isMoving }: AppIconProps) {
  return (
    <li className={isMoving ? 'moving' : 'idle'} css={appItemStyle}>
      {children}
    </li>
  )
}

export default AppIcon
