import React from 'react'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import './Board.css'

const cell = (key) => (<GridItem key={key} className='cell' textColor='red.300' colSpan={1} rowSpan={1} bg="palegreen" ></GridItem>)

export const Board = () => {
  return (
    <div className="scaffold">
      <Grid
        h="500px"
        templateRows="repeat(50, 1fr)"
        templateColumns="repeat(50, 1fr)"
        gap={1}
      >
      {drawColumn()}
      </Grid>
      <Button className='btn-start'> start</Button>
    </div>
  )
}

const drawRow = (c) => {
  return Array.apply(null, { length: 50 }).map((e, r) => cell(r + c*50 + 1))
}

const drawColumn = () => {
    return Array.apply(null, { length: 50 }).map((e, c) => (drawRow(c)))
}