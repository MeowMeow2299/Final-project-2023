import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newletter from '../components/Newletter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Navside from '../components/Navside'

const Title = styled.h1`
text-align: center;
font-size: 20px;
font-weight: 600;
margin-top: 10px;
bottom:0;
`;
const Home = () => {
  return (
    
    <div className="container">
    <Announcement/>
    <Navbar/>
      <Navside/>
      <Slider/>
      <Title><h1>
        Daily Styles
      </h1></Title>
      <Categories/>
      <Title><h1>
        Maybe you like them!
      </h1></Title>
      <Products/>
      <Newletter/>
      <Footer/>
    </div>
  )
}

export default Home
