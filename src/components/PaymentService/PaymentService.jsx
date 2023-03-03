import React from 'react';
// import shapeCart from '../../img/Group 34.png';
// import shapeCart2 from '../../img/Group 33.png';
// import shapeCart3 from '../../img/XMLID_110_.png';
// import shapeCart4 from '../../img/Group 35.png';

import shapeCart from '../../img/s1.png';
import shapeCart2 from '../../img/s2.png';
import shapeCart3 from '../../img/s3.png';
import shapeCart4 from '../../img/s4.png';
import shapeCart5 from '../../img/s5.png';
import shapeCart6 from '../../img/s6.png';
import shapeCart7 from '../../img/s7.png';
import shapeCart8 from '../../img/s8.png';
import { Cart } from '../Cart/Cart';
// import shape from '../../img/Rectangle 36.png';
import shape from '../../img/helalRec.png';

const cartData = [
  // { id: 1, text: 'کارت به کارت', shape: shapeCart },
  // { id: 2, text: 'خرید شارژ', shape: shapeCart2 },
  // { id: 3, text: 'پرداخت قبوض', shape: shapeCart3 },
  // { id: 4, text: 'افتتاح حساب', shape: shapeCart4 },
  // { id: 5, text: 'کارت به کارت', shape: shapeCart },
  // { id: 6, text: 'خرید شارژ', shape: shapeCart2 },
  // { id: 7, text: 'پرداخت قبوض', shape: shapeCart3 },
  // { id: 8, text: 'افتتاح حساب', shape: shapeCart4 },
  { id: 1, text: ' معرفی جمعیت ', shape: shapeCart },
  { id: 2, text: ' اخبار و اطلاعیه ها', shape: shapeCart2 },
  { id: 3, text: ' مراکز جمعیت', shape: shapeCart3 },
  { id: 4, text: ' خدمات', shape: shapeCart4 },
  { id: 5, text: ' فعالیت ها ', shape: shapeCart5 },
  { id: 6, text: ' باشگاه هلالی ها', shape: shapeCart6 },
  { id: 7, text: ' صدور کارت', shape: shapeCart7 },
  { id: 8, text: ' پرداخت حق عضویت', shape: shapeCart8 },
];
export default function PaymentService() {
  return (
    <div className="w-full">
      <div dir="rtl" className="w-[85%] flex items-center mx-auto ">
        <div className="">
          {/* <p className=" text-xs text-[#434343]">سرویس پرداخت</p> */}
          <div className="grid mt-7 grid-cols-4 grid-rows-2 gap-5  text-center">
            {cartData.map((data) => (
              <Cart
                text={data.text}
                shapeCart={data.shape}
                bgShape={shape}
                textColor="text-[#00000]"
                key={data.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
