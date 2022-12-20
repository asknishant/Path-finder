import { React, useState } from 'react'
import {  Grid, GridItem, Text } from '@chakra-ui/react'
import './Board.css'
import StartButton from './StartButton'

const textSelector = {
  startPos: 'Choose starting cell',
  endPos: 'Choose end cell',
  startPlaying: 'start playing',
  yayy: 'yayy found the shortest path!!!'
}

const clickSelector = ['start', 'end', 'setobstacles']

export const Board = () => {
  const [choose, setChoose] = useState(textSelector.startPos)
  const [clickIdentify, setClickIdentify] = useState(clickSelector[0])
  const [startCell, setStartCell] = useState(null)
  const [endCell, setEndCell] = useState(null)
  const [startCoordinate, setstartCoordinate] = useState({})
  const [endCoordinate, setendCoordinate] = useState({})

  const drawColumn = (r) => {
    return Array.apply(null, { length: 50 }).map((e, c) => cell(c + r * 50 + 1, r, c))
  }

  const drawRow = () => {
    return Array.apply(null, { length: 50 }).map((e, r) => drawColumn(r))
  }

  const cell = (key, r, c) => {
    return (
      <GridItem
        onClick={(e) => {
          gridClick(e, key, r, c)
        }}
        key={key}
        className="cell"
        colSpan={1}
        rowSpan={1}
        bg={getCellColor(key)}
      ></GridItem>
    )
  }

  const getCellColor = (key) => {
    if(key === startCell) {
      return 'black'
    } else if(key === endCell) {
      return 'blue'
    } else {
      return 'palegreen'
    }
  }
  const gridClick = (e, key, r, c) => {
    console.log('grid click at key ->', key)
    // If the grid is clicked for the first time then set start cell as key and change click-identify as end.
    if(clickIdentify === clickSelector[0]) {
      setStartCell(key);
      setChoose(textSelector.endPos);
      setClickIdentify(clickSelector[1])
      setstartCoordinate({r, c})
      return;
    } 

    // if the grid is clicked for the second time then set end cell as key and change click-identify as find.
    if(clickIdentify === clickSelector[1]) {
      setEndCell(key);
      setClickIdentify(clickSelector[2]);
      setChoose(textSelector.startPlaying)
      setendCoordinate(r, c)
      return;
    }
  }

  return (
    <div className="scaffold">
      <Grid
        h="500px"
        templateRows="repeat(50, 1fr)"
        templateColumns="repeat(50, 1fr)"
        gap={1}
      >
        {drawRow()}
      </Grid>
      <StartButton />
      <Text noOfLines={[1, 2, 3]}>{choose}</Text>
    </div>
  )
}
