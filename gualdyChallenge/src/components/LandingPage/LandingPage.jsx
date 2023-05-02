import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
 flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #4c4858ed;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Home = styled.img`
  height: 15px;
  padding-right: 3px;
`;

const Subtitle = styled.h2`
  color: #5d586bec;
`;

const Desc = styled.p`
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Millennium = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

function Landing() {
  return (
    <>
    <Section>
      <Container>
        <Left>
        <Title>GualdaTraining Challenge</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Using SWAPI!</Subtitle>
          </WhatWeDo>
          <Desc>Check out the last movies of Star-Wars</Desc>
          <Link to="/films">
          <Button><Home src="./img/homeIcon.png"/>Home</Button>
          </Link>
        </Left>

        <Right>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2} >
            <MeshDistortMaterial
              color="#000000"
              attach="material"
              distort={0.5}
              speed={2}
            />
            </Sphere>
          </Canvas>
      <Millennium src="./img/millenniumFalcon.png"/>
        
        </Right>
      </Container>
      </Section>
    </>
  );
}

export default Landing;
