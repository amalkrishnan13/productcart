import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/SNnQzLRS/logo.png"
              width="40"
              height="35"
              className="d-inline-block  align-center "
            />{' '}
            Products
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
