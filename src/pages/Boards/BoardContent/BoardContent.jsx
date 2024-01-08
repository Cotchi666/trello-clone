import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utlis/sorts'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    // click on title string
    activationConstraint: { distance: 10 }
  })
  const sensors = useSensors(pointerSensor)

  // current columns
  const [orderedColumns, setOrderedColumns] = useState([])

  // fetch data
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  // handle drag
  const handleDragEnd = event => {
    // active: old position || over: new position
    const { active, over } = event
    // over null
    if (!over) return
    // position changes
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      // const orderedColumnsIds = orderedColumns.map(c => c._id);
      // return arrayMove(orderedColumns, oldIndex, newIndex);
      // state client update
      setOrderedColumns(arrayMove(orderedColumns, oldIndex, newIndex))
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: theme =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: theme => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
