import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactInfoArea from './ContactInfoArea/ContactInfoArea';

const Contact = () => {
   return (
      <>
         <PageHelmet pageTitle="Contact Page" />


         <HomeTwoHeader />
         <CommonPageHeader title="Contact Us" subtitle="Contact" />
         <ContactInfoArea />
         <ContactArea />
         <Footer />
      </>
   );
};

export default Contact;