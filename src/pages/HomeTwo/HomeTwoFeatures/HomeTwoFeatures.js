import React from 'react';
import { BiLock } from 'react-icons/bi';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import HomeTwoSingleFeature from '../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature';

const HomeTwoFeatures = () => {
   return (
      <>
         <section className="features__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="features__content-left">
                        <div className="section__title section__title-h2 mb-25">
                           <span>Design Accordlogy</span>
                           <h2>Enrich <br /> your career</h2>
                        </div>
                        <p>Making dreams happen since 2008.</p>
                        <Link to="/about" className="z-btn">What we do<i><CgArrowLongRight /></i></Link>
                     </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6">
                     <div className="features__content-right">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<FaLightbulb />} title="Staffing solution"
                                 subtitle='After recruiting, training of the staff is provided so that the security personnel understand their jobs responsibilities and duties. After every six months refresher course is done to enhance the skill of our staff.
' />
                              <HomeTwoSingleFeature icon={<IoDocumentTextOutline />} title="Man power recruitment"
                                 subtitle=" The applicants are recruited after some tests and knowing their skills so that they can be the best at the time of their work. Manpower are recruited through references, newspaper ads.
" />

                           </div>

                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<FaRibbon />} title="Human resource consultant"
                                 subtitle="The market for consulting services consists of eight main disciplines: Strategy, Compensation & Benefits, Organisational Change, Function, Talent Management, Analytics, Learning & Development and Technology." />
                              <HomeTwoSingleFeature icon={<BiLock />} title="Training and Develpment"
                                 subtitle="Our company has started a new division for recruitment, training of manpower and manpower outsourcing services. An operational head and a team of qualified managers who head the respective verticals head the department." />

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoFeatures;