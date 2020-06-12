import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'

import { AppRow, App } from 'model/App'
import { reorderSpringBoardMap } from 'utils/reorder'
import prop from 'utils/prop'
import AppIcon from './AppIcon'
import useOnClickOutside from '~/shared/hooks/useOnClickOutside'

type ContainerProps = {
  isDraggingOver: boolean
}

const Container = styled.div<ContainerProps>``

type SpringBoardProps = {
  className?: string
  apps: AppRow
}

const SpringBoardStyle = styled.div`
  scroll-snap-align: start;
  position: relative;
  min-width: 100%;
  height: fit-content;

  .appList {
    padding: 0 15px;
    margin: 0;
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    list-style-type: none;
  }
`

const SpringBoard = ({ className, apps }: SpringBoardProps) => {
  const springBoardRef = useRef()

  const [appMap, setAppMap] = useState<AppRow>(apps)
  const [isDragging, setIsDragging] = useState(false)

  useOnClickOutside(springBoardRef, () => setIsDragging(false))

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }

    if (result.source.droppableId !== result.destination.droppableId) {
      setIsDragging(false)
    }

    if (result.source.index !== result.destination.index) {
      setIsDragging(false)
    }

    setAppMap(
      reorderSpringBoardMap({
        springBoardMap: appMap,
        source: result.source,
        destination: result.destination,
      }),
    )
  }

  function removeApp(row: string, index: number) {
    const newAppRow = appMap[row]

    newAppRow.splice(index, 1)

    setAppMap({
      ...appMap,
      [row]: newAppRow,
    })
  }

  return (
    <SpringBoardStyle ref={springBoardRef} className={className}>
      <DragDropContext
        onDragStart={() => setIsDragging(true)}
        onDragEnd={onDragEnd}
      >
        {Object.keys(appMap).map((row) => (
          <Droppable
            key={row}
            droppableId={row}
            type="CARD"
            direction="horizontal"
          >
            {(
              dropProvided: DroppableProvided,
              dropSnapshot: DroppableStateSnapshot,
            ) => (
              <Container
                isDraggingOver={dropSnapshot.isDraggingOver}
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
              >
                <div className="appList" ref={dropProvided.innerRef}>
                  {prop(appMap, row).map((app: App, index: number) => (
                    <Draggable
                      key={app.label}
                      draggableId={app.label}
                      index={index}
                    >
                      {(dragProvided, dragSnapshot) => (
                        <AppIcon
                          onClick={() => setIsDragging(false)}
                          onRemove={() => removeApp(row, index)}
                          provided={dragProvided}
                          snapshot={dragSnapshot}
                          isMoving={isDragging}
                          app={app}
                        />
                      )}
                    </Draggable>
                  ))}
                </div>
              </Container>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </SpringBoardStyle>
  )
}

export default SpringBoard
