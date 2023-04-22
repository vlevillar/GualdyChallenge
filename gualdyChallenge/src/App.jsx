import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from "./components/LandingPage/LandingPage"
import Characters from "./components/Characters/Characters"
import Films from "./components/Films/Films"
import Navbar from './components/NavBar/NavBar'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  scrollbar-width: none;
  color: white;
  background: linear-gradient(to right, #3f1cda, #0e0101);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  const location = useLocation()
  return (
    <Container>
      <Navbar/>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/films' element={<Films/>}/>
      <Route exact path='/characters' element={<Characters/>}/>
    </Routes>
    </Container>
  )
}

export default App
