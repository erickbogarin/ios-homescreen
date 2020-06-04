const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default reorder

export const reorderSpringBoardMap = ({
  springBoardMap,
  source,
  destination,
}) => {
  const current = [...springBoardMap[source.droppableId]]
  const next = [...springBoardMap[destination.droppableId]]

  const target = current[source.index]
  const replacement = next[destination.index]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index)
    const result = {
      ...springBoardMap,
      [source.droppableId]: reordered,
    }

    return result
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1)
  // insert into next
  next.splice(destination.index, 0, target)

  if (next.length > 4) {
    next.splice(destination.index + 1, 1)
    current.splice(source.index, 0, replacement)
  }

  const result = {
    ...springBoardMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  }

  return result
}
