import React from "react";
import styled from "styled-components"
import Self from './componets/Self';
import Contact from './componets/Contact';
import Intro from './componets/Intro';
import Works from './componets/Works';
const Container = styled.div`
  height:100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior:smooth;
  overflow-y:auto;
  scrollbar-width:none;
  color:white;
  background:url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display:none;
  }
`

function App() {
  return (
    <Container>
     <Self/>
      <Intro/>
      <Contact/>
      <Works/>
   </Container>
  );
}

export default App;
