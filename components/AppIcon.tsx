import React from 'react'
import styled from '@emotion/styled'
import { DraggableStateSnapshot, DraggableProvided } from 'react-beautiful-dnd'

import { App } from 'model/App'

const AppLogo = styled.div`
  position: relative;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 480px) {
    img {
      height: auto;
      width: auto;
    }
  }
  &:not(:nth-of-type(4n + 1)) {
    margin-left: 5px;
  }
  &.moving > img {
    animation: shake 1.25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
  }
  button {
    position: absolute;
    background: transparent;
    color: #c0312b;
    font-size: 12px;
    background-color: #fcc28b;
    border-radius: 50%;
    top: -5%;
    left: 10%;
    padding: 1px 5px;
    margin: 0;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
  }
  &.moving button {
    visibility: visible;
    opacity: 1;
  }
  span {
    color: white;
    display: block;
    font-weight: 300;
    font-size: 12px;
    animation-iteration-count: infinite;
  }
`

type AppIconProps = {
  isMoving?: boolean
  provided?: DraggableProvided
  snapshot?: DraggableStateSnapshot
  app: App
  onClick?: () => void
  onRemove?: () => void
}

function AppIcon({
  app,
  isMoving = false,
  provided,
  onRemove,
  ...props
}: AppIconProps) {
  return (
    <AppLogo
      ref={(ref) => provided?.innerRef(ref)}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      {...props}
      className={isMoving ? 'moving' : 'iddle'}
    >
      <img src={app.image} alt={app.label} />
      <span>{app.label}</span>
      <button onClick={onRemove}>x</button>
    </AppLogo>
  )
}

export default AppIcon
