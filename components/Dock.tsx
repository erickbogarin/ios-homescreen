import { useState } from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  DragDropContext,
  DropResult,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd'

import reorder from 'utils/reorder'
import { App } from 'model/App'
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
`
type DockProps = {
  className?: string
}

const allApps = [
  {
    image: 'img/weather.png',
    label: 'Weather',
  },
  {
    image: 'img/wallet.png',
    label: 'Wallet',
  },
  {
    image: 'img/reminders.png',
    label: 'Reminders',
  },
  {
    image: 'img/calendar.png',
    label: 'Calendar',
  },
]

type WrapperProps = {
  isDraggingOver: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
`

const StyledDock = styled.footer`
  ${dockStyle}
`

function Dock({ className }: DockProps) {
  const [apps, setApps] = useState<App[]>(allApps)

  const [isDragging, setIsDragging] = useState(false)

  function onDragEnd(result: DropResult) {
    if (result.combine) {
      const newApps: App[] = [...apps]
      newApps.splice(result.source.index, 1)
      setApps(newApps)
      return
    }

    if (!result.destination) {
      setIsDragging(false)
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    setIsDragging(false)

    const newApps = reorder(apps, result.source.index, result.destination.index)

    setApps(newApps)
  }

  function removeApp(index: number) {
    const newApps = [...apps]

    newApps.splice(index, 1)

    setApps(newApps)

    setIsDragging(false)
  }

  return (
    <StyledDock className={className}>
      <DragDropContext
        onDragStart={() => setIsDragging(true)}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId={'dock'} direction="horizontal">
          {(
            dropProvided: DroppableProvided,
            dropSnapshot: DroppableStateSnapshot,
          ) => (
            <Wrapper
              isDraggingOver={dropSnapshot.isDraggingOver}
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              {apps.map((app: App, index: number) => (
                <Draggable
                  key={app.label}
                  draggableId={app.label}
                  index={index}
                >
                  {(
                    dragProvided: DraggableProvided,
                    dragSnapshot: DraggableStateSnapshot,
                  ) => (
                    <AppIcon
                      onClick={() => null}
                      onRemove={() => removeApp(index)}
                      provided={dragProvided}
                      snapshot={dragSnapshot}
                      isMoving={isDragging}
                      app={app}
                    />
                  )}
                </Draggable>
              ))}
            </Wrapper>
          )}
        </Droppable>
      </DragDropContext>
    </StyledDock>
  )
}

export default Dock
