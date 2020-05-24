/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import apps from 'shared/data/apps.json'
import AppIcon from './AppIcon'

const appListStyle = css`
  padding: 0 15px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  list-style-type: none;
`

const onDragEnd = () => {}

type SpringBoardProps = {
  className?: string
}

const SpringBoard = ({ className }: SpringBoardProps) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId={'springBoard'}>
      {(provided) => (
        <div className={className}>
          <ul css={appListStyle}>
            {apps.map((app) => (
              <AppIcon>
                <img src={app.image} alt={app.label} />
                <span>{app.label}</span>
              </AppIcon>
            ))}
            {provided.placeholder}
          </ul>
        </div>
      )}
    </Droppable>
  </DragDropContext>
)

export default SpringBoard
