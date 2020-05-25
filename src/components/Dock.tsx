/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import AppIcon from './AppIcon'

const dockStyle = css`
  background: linear-gradient(
    235deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.1) 7%,
    rgba(255, 255, 255, 0.1) 24%,
    rgba(255, 255, 255, 0.15) 100%
  );
  width: 95%;
  padding: 10px;
  margin: 0 auto;
  border-radius: 20px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul > li {
    flex-grow: 1;
    margin: 0;
    padding: 0;
  }
`
type DockProps = {
  className?: string
}

function Dock({ className }: DockProps) {
  return <footer className={className} css={dockStyle}></footer>
}

export default Dock
