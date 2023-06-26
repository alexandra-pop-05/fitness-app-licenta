import React from 'react';

// import data
import { shop } from '../../../data';

// import components
import { ShopList } from './ShopList';
import { ShopBanner } from '../../../components/ShopBanner';
import  Header  from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import Pricing  from '../Bundles/Pricing';

export const Shop = () => {
  // destructure 
  const { icon, title } = shop;
  return (
    <>
    <Header />
    <ShopBanner />
    <Pricing />
    <section className='section'>
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <img src={icon} alt='' />
        <h2 className='h2 section-title'>
          {title} <span className='text-primary-200'>.</span>
        </h2>
      </div>
      {/* shop list */}
      <ShopList/>
    </section>
    <Footer />
    </>
  );
};

