import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 40px;
`;

const ListItem = styled.a`
  display: flex;
  color: white;
  gap: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./icon.svg" />
          <ListItem>Films</ListItem>
          <ListItem>Characters</ListItem>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
