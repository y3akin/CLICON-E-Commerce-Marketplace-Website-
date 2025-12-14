import React from 'react'
import Header from './PageLayout/Header'
import Banner from './PageLayout/Banner'
import Categorys from './PageLayout/Categorys'
import Products from './PageLayout/Products'
import Newsletter from './PageLayout/Newsletter'

const Home = () => {
  return (
    <div id='home'>
      <Header/>
      <Categorys/>
      <Products/>
      <Banner/>
      <Newsletter/>
    </div>
  )
}

export default Home
