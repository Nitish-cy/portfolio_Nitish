import React from 'react'
import styled from 'styled-components'
const Section = styled.div`
 display:flex;
 justify-content:center;
`;
const Container = styled.div`
 width:1400px;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:10px 0px;
`;

const Links = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer;
`;
const Logo = styled.img`
height:50px;
`;
const List = styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
gap:20px;
`;
const ListItems = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
`;
const Icon = styled.img`
height:25px;
`;
const Button = styled.button`
    width:100px;
    padding:10px;
    background-color:pink;
    border-radius:5px;
    border:none;
    cursor:pointer;
`;
const Icons = styled.div`
display:flex;
justify-content:space-between;
gap:20px;
cursor:pointer;
`;

const Navbar = () => {
  return (
    <Section>
     <Container>
        <Links>
        <Logo src="./img/logo.png"></Logo>
        <List>
            <ListItems>Home</ListItems>
            <ListItems>Studio</ListItems>
            <ListItems>Works</ListItems>
            <ListItems>Contacts</ListItems>
        </List>
        </Links>
        <Icons>
            <Icon src="./img/search.png"></Icon>
            <Button>Hire Now</Button>
        </Icons>
     </Container>
      </Section>
  )
}

export default Navbar
