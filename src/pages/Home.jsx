import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
// import Products from '../components/Products'
import Newletter from '../components/Newletter'
import Footer from '../components/Footer'
// import styled from 'styled-components'
import GridTemplate from '../components/GridTemplate'


// const Title = styled.h1`
// text-align: center;
// font-size: 20px;
// font-weight: 600;
// margin-top: 10px;
// bottom:0;
// `;
const Home = () => {
  return (

    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories className="feature" />
      <GridTemplate/>
      <Categories className="trending" />
      {/* <Products /> */}
      <Newletter />
      <Footer />
    </div>
  )
}

export default Home
