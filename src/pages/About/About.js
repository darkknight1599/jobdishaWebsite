import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';

const About = () => {
   return (
      <>
         <PageHelmet pageTitle="About" />


         <HomeTwoHeader />
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout />
         <HomeTwoFaq />
         <HomeTwoAchievement />
         <HomeBrands />
         <Footer />
      </>
   );
};

export default About;