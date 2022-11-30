import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeTwoAchievement from './HomeTwoAchievement/HomeTwoAchievement';
// import HomeTwoCaseArea from './HomeTwoCaseArea/HomeTwoCaseArea';
import HomeTwoCounter from './HomeTwoCounter/HomeTwoCounter';
import HomeTwoExpertArea from './HomeTwoExpertArea/HomeTwoExpertArea';
import HomeTwoFaq from './HomeTwoFaq/HomeTwoFaq';
import HomeTwoFeatures from './HomeTwoFeatures/HomeTwoFeatures';
import HomeTwoFooter from './HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from './HomeTwoHeader/HomeTwoHeader';
import HomeTwoHeroSlider from './HomeTwoHeroSlider/HomeTwoHeroSlider';
import HomeTwoTestimonial from './HomeTwoTestimonial/HomeTwoTestimonial';

const HomeTwo = () => {
   return (
      <>
         <PageHelmet pageTitle="Home " />

         <HomeTwoHeader />
         <HomeTwoHeroSlider />
         <HomeTwoFeatures />
         <HomeTwoFaq />
         <HomeTwoAchievement />
         <HomeTwoExpertArea />
         <HomeTwoCounter />
         <HomeTwoTestimonial />
         {/* <HomeTwoCaseArea /> */}
         <CommonCtaArea />
         <HomeTwoFooter />
      </>
   );
};

export default HomeTwo;