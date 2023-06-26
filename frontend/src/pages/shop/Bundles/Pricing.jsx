import React from 'react';

import PlanList from './PlanList';
import PriceIcn from "../../../assets/img/pricing/icons/price.svg";

const Pricing = () => {
  return (
    <section className='section'>
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <img src={PriceIcn} alt='' />
        <h2 className='h2 section-title'>
          Bundles prices <span className='text-primary-200'>.</span>
        </h2>
      </div>
      {/* plan list */}
      <PlanList />
    </section>
  );
};

export default Pricing;
