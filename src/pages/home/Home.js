import React from 'react'
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Feature from '../../components/featured/Feature';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Feature/>
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Home guests love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
       
    </div>
  )
}
