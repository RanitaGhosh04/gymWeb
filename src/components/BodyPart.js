import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, BodyPart}) => {

  return (
   <Stack
   type='button'
   alignItems='center'
   justifyContent='center'
   className='bodyPart-card'
   sx={{
    borderTop: BodyPart === item? '4px solid #ff2625' : '',
    backgroundColor:'#fff',
    borderBottomColo: '20px',
    width: '270px',
    height: '280px',
    cursor: 'pointer',
    gap: '47px'
   }}
   >
    <img src={Icon} alt='dumbbell' style={{width: '40px', height: '40px'}}/>
    <Typography
    fontSize='24px'
    fontWeight='bold'
    color='#3A1212'
    textTransform='capitalize'
    >{item}</Typography>
   </Stack>
  )
}

export default BodyPart