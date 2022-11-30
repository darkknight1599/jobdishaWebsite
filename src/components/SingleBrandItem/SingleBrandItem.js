import React from 'react';

const SingleBrandItem = ({ img_1, img_2 }) => {
   return (
      <>
         <div className="brand__item-wrapper">
            <div className="brand__item">
               <img src={`assets/img/clients/brand-${img_1}.png`} alt="" height='60px' width='70px' />
               {/* <img src={`assets/img/brand/brand-${img_1}.png`} alt="" /> */}
            </div>
            <div className="brand__item">
               {/* <img src={`assets/img/brand/brand-${img_2}.png`} alt="" /> */}
               <img src={`assets/img/clients/brand-${img_2}.png`} alt="" height='60px' width='70px' />
            </div>
         </div>
      </>
   );
};

export default SingleBrandItem;