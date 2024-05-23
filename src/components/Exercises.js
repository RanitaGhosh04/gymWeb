import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setexercises,bodyPart}) => {
 // console.log(exercises);
 const [currentPage, setCurrentPage] = useState(1);
 const [exercisesPerPage] = useState(6);

 const indexOfLastExercise = currentPage * exercisesPerPage;
 const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
 const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

 const paginate = (event, value) => {
  setCurrentPage(value);

  window.scrollTo({ top: 1800, behavior: 'smooth' });
};
 
  return (
    <Box id='exercises'
    sx={{mt:{lg: '110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>

      <Stack direction='row' sx={{gap:{lg: '110px',xs: '50px'}}}
       flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
        // <p>{exercise.name}</p>
        <ExerciseCard key={index} exercise={exercise}/>
       ))}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises