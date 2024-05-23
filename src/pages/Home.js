import { Box } from '@mui/material'
import React, { useState } from 'react'
import  Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises, setexercises] = useState([])
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
      setexercises={setexercises}
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      />
      <Exercises
       exercises={exercises}
       setexercises={setexercises}
       bodyPart={bodyPart} 
      />
    </Box>
  )
}

export default Home