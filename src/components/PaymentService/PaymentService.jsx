import React from 'react';
import shapeCart from '../../img/Group 34.png';
import shapeCart2 from '../../img/Group 33.png';
import shapeCart3 from '../../img/XMLID_110_.png';
import shapeCart4 from '../../img/Group 35.png';
import { Cart } from '../Cart/Cart';
import shape from '../../img/Rectangle 36.png';

const cartData = [
  { id: 1, text: 'کارت به کارت', shape: shapeCart },
  { id: 2, text: 'خرید شارژ', shape: shapeCart2 },
  { id: 3, text: 'پرداخت قبوض', shape: shapeCart3 },
  { id: 4, text: 'افتتاح حساب', shape: shapeCart4 },
  { id: 5, text: 'کارت به کارت', shape: shapeCart },
  { id: 6, text: 'خرید شارژ', shape: shapeCart2 },
  { id: 7, text: 'پرداخت قبوض', shape: shapeCart3 },
  { id: 8, text: 'افتتاح حساب', shape: shapeCart4 },
];
export default function PaymentService() {
  return (
    <div className="w-full bg-white">
      <div dir="rtl" className="w-[85%] h-72 flex items-center mx-auto ">
        <div className="">
          <p className=" text-xs text-[#434343]">سرویس پرداخت</p>
          <div className="grid mt-7 grid-cols-4 grid-rows-2 gap-5  text-center">
            {cartData.map((data) => (
              <Cart
                text={data.text}
                shapeCart={data.shape}
                bgShape={shape}
                textColor="text-[#179E66]"
                key={data.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
