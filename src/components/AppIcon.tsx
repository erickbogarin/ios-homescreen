/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  DraggableStateSnapshot,
  DraggableProvided,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd'

const AppLogo = styled.li`
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
  provided?: DraggableProvided
  snapshot?: DraggableStateSnapshot
}

const getStyle = (
  style?: DraggingStyle | NotDraggingStyle,
  snapshot?: DraggableStateSnapshot,
) => {
  return {
    ...style,
    position: 'static' as 'static',
  }
}

function AppIcon({
  children,
  isMoving = true,
  provided,
  snapshot,
}: AppIconProps) {
  return (
    <AppLogo
      ref={(ref) => provided?.innerRef(ref)}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      className={isMoving ? 'moving' : 'idle'}
      style={getStyle(provided?.draggableProps?.style, snapshot)}
    >
      {children}
    </AppLogo>
  )
}

export default AppIcon
