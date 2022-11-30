import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s">
                        <span>Our Services</span>
                        <h2>Provide awesome customer service with our tools.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleService icon="1" title="consulting" subtitle="consulting at higher level" />
                  <SingleService icon="2" title="Business Strategy" subtitle="leading the way in business inovation " />
                  <SingleService icon="3" title="Recruitment" subtitle="always find the best for our clients" />
                  <SingleService icon="4" title="Leadership" subtitle="leading your business to evolution " />
                  <SingleService icon="5" title="Staffing" subtitle="providing efficient employees" />
                  <SingleService icon="6" title="Man Power" subtitle="the power of productivity" />
                  <SingleService icon="7" title="Development" subtitle="built to build your business" />
                  <SingleService icon="8" title="Counceling" subtitle="guiding you to your full potential" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;