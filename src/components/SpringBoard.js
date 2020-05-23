/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import AppIcon from './AppIcon'

import apps from 'shared/data/apps.json'

const appListStyle = css`
  padding: 0 15px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  list-style-type: none;
`

const onDragEnd = () => {}

const SpringBoard = ({ className }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId={3231}>
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
