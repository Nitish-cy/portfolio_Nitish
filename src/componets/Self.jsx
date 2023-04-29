import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
const Section = styled.div`
  height:100vh;
  scroll-snap-type: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`
const Container = styled.div`
  height:100vh;
  scroll-snap-type: center;
  width:1400px;
  display:flex;
  justufy-content:space-between;
`
const Left = styled.div`
 flex:2;
 display:flex;
 flex-direction:column;
 justify-content:center;
 gap:5px;
`
const Right = styled.div`
  flex:3;
  position:relative;
`
const Title = styled.h1`
  font-size:64px;
`
const WhatWeDo = styled.div`
  display:flex;
  align-items:center;
  gap:5px;
`
const Line = styled.img`
  height:5px;
`
const Subtitle = styled.h2`
  color:pink;
`
const Desc = styled.p`
  font-size:24px;
  color:lightgray;
`
const Button = styled.button`
padding:7px 0px;
  background-color:pink;
  color:white;
  font-weight:500;
  width:100px;
  border:none;
  border-radius:5px;
  cursor:pointer;
`
const Img = styled.img`
  width:800px;
  height:600px;
  object-fit:contain;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;

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
`
const Self = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src='./img/line.png'></Line>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightful</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/moon.png"></Img>
        </Right>
      </Container>
    </Section>
  )
}

export default Self
