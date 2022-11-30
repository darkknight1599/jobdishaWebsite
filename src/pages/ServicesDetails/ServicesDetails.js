import React from 'react';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import ServicesDetailsHeader from './ServicesDetailsHeader/ServicesDetailsHeader';

const ServicesDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Services Details Page" />


         <HomeTwoHeader />
         <ServicesDetailsHeader />
         <ServicesDetailsArea />
         <Footer />
      </>
   );
};

export default ServicesDetails;