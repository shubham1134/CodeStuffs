import React from 'react'
import './home.css'
import {  Container, Row ,Col} from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function Home() {
  return (
   <>
       <Navbar />
    <div className='shubh'>
    lets have some with these coding stuffs ....
   </div>

    <Row>
      Are you ready broh .......
    </Row>
     
    <Footer/>
   </>
  )
}

export default Home;
