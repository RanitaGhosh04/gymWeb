// great ui kit
import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets//images/Logo.png'
// the stack component manages the layout of immediate children horizintally and vertically

const Navbar = () => {
  return (
    <Stack
    direction='row'
    // justifyContent='space-around'
    sx={{gap:{sm:'122px', xs:'40px'},mt:{sm:'32px',xs:'20px'}}}
    px='20px'
    >
      {/* sx is additional styles property*/}
      <Link>
      <img src={Logo} alt='logo' style=
      {{width: '48px', height:'48px',margin:'0 20px'}}/>
      </Link>

      <Stack
       direction='row'
       gap='40px'
       font-size='24px'
       alignItems='flex-end'
      >
        <Link style={{textDecoration:'none', color:'#3A1212' ,borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href='#excercise' style={{
          textDecoration: 'none',color:'#3A1212'
        }}>Excercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar