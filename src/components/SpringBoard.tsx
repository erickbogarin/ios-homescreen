/** @jsx jsx */
import { useState } from 'react'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
} from 'react-beautiful-dnd'

import apps from 'shared/data/apps.json'
import AppIcon from './AppIcon'

import { reorderSpringBoardMap } from 'utils/reorder'

const spingBoardStyle = css`
  padding: 0 15px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  list-style-type: none;
`
type WrapperProps = {
  isDraggingOver: boolean
}

const Wrapper = styled.div<WrapperProps>`
  user-select: none;
`

type SpringBoardProps = {
  className?: string
}

type ListStyleProps = {
  listId: string
  listType: string
}

const ListStyle = styled.div<ListStyleProps>``

interface App {
  label: string
  image: string
}

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const SpringBoard = ({ className }: SpringBoardProps) => {
  const [appMap, setAppMap] = useState<any>(apps)

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }

    setAppMap(
      reorderSpringBoardMap({
        springBoardMap: appMap,
        source: result.source,
        destination: result.destination,
      }).springBoardMap,
    )
  }
  return (
    <div className={className}>
      <DragDropContext onDragEnd={onDragEnd}>
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
              <Wrapper
                isDraggingOver={dropSnapshot.isDraggingOver}
                ref={dropProvided.innerRef}
                {...dropProvided.droppableProps}
              >
                <ListStyle
                  ref={dropProvided.innerRef}
                  listId={row}
                  listType="CARD"
                >
                  <ul css={spingBoardStyle} ref={dropProvided.innerRef}>
                    {prop(appMap, row).map((item: App, index: number) => (
                      <Draggable
                        key={item.label}
                        draggableId={item.label}
                        index={index}
                      >
                        {(dragProvided, dragSnapshot) => (
                          <AppIcon
                            provided={dragProvided}
                            snapshot={dragSnapshot}
                          >
                            <img src={item.image} alt={item.label} />
                          </AppIcon>
                        )}
                      </Draggable>
                    ))}
                  </ul>
                </ListStyle>
              </Wrapper>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  )
}

export default SpringBoard
