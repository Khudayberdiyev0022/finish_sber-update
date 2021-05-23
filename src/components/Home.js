import React from 'react'
import Header from './Header/Header'
import HeaderPictures from './Header/HeaderPictures'
import Quize from './Quize/Quize'
import Section from './Section/Section'

const Home = () => {
   return (
      <div>
         <Header />
         <HeaderPictures />
         <Quize />
         <Section />
      </div>
   )
}

export default Home
