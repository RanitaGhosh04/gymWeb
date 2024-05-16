import React from 'react'
import './App.css'
import { Box } from '@mui/material'
//Box is basically a div having some shadings and color
import { Route, Routes } from 'react-router-dom'
import ExcerciseDetail from './pages/ExcerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {  
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m='auto'>
      {/*to make responsive for large screens*/}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/excercise/:id' element={<ExcerciseDetail/>} />
        {/* id is dynamic, dynamically rendered in the excercise detaile component */}
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App