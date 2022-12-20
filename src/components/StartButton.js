import React from 'react'
import { Button } from '@chakra-ui/react'
import './StartButton.css'
const StartButton = (startGrid, endGrid) => {

  const findShortestPath = () => {
    
  }

  return (
    <Button onClick={findShortestPath()} className="btn-start"> start</Button>
  )
}

export default StartButton