import React from 'react'
import Container from 'react-bootstrap/Container';

import HeaderSection from '../Component/Header-Section/HeaderSection';

const Layout = ({children}) => {
  return (
     <Container>
           <HeaderSection/>
           {children}
     </Container>
         
   
  )
}

export default Layout