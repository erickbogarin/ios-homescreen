import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'

import AppIcon from './AppIcon'
import { AppRow, App } from 'model/App'
import { reorderSpringBoardMap } from 'utils/reorder'
import prop from 'utils/prop'

import apps from 'shared/data/apps.json'

type ContainerProps = {
  isDraggingOver: boolean
}

const Container = styled.div<ContainerProps>``

type SpringBoardProps = {
  className?: string
}

const SpringBoardStyle = styled.div`
  padding: 0 15px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  list-style-type: none;
`

const SpringBoard = ({ className }: SpringBoardProps) => {
  const [appMap, setAppMap] = useState<AppRow>(apps)
  const [isDragging, setIsDragging] = useState(false)

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

  return (
    <div className={className}>
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
                <SpringBoardStyle ref={dropProvided.innerRef}>
                  {prop(appMap, row).map((app: App, index: number) => (
                    <Draggable
                      key={app.label}
                      draggableId={app.label}
                      index={index}
                    >
                      {(dragProvided, dragSnapshot) => (
                        <AppIcon
                          onClick={() => setIsDragging(false)}
                          provided={dragProvided}
                          snapshot={dragSnapshot}
                          isMoving={isDragging}
                          app={app}
                        />
                      )}
                    </Draggable>
                  ))}
                </SpringBoardStyle>
              </Container>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  )
}

export default SpringBoard
