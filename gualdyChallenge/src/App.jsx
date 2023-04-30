import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import FilmCharacters from "./components/Characters/FilmCharacters";
import Films from "./components/Films/Films";
import Navbar from "./components/NavBar/NavBar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scrollbar-width: none;
  color: white;
  background: #212427;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  const location = useLocation();
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/films" element={<Films />} />
        <Route path="/films/:filmId" element={<FilmCharacters />} />
      </Routes>
    </Container>
  );
};

export default App;
