import React from 'react';
import { Cart } from '../Cart/Cart';
import shape from '../../img/Rectangle 37.png';
import hotel from '../../img/Hotel.png';
import Airplane from '../../img/Airplane.png';

export default function Modal({ text, handelClick }) {
  return (
    <div
      dir="rtl"
      className="absolute bottom-0 z-50 w-full h-full backdrop-blur-sm"
    >
      <div className="h-80  absolute bottom-0 w-full rounded-t-2xl bg-gradient-to-tr from-[#A08DD4] to-[#6D47D3]">
        <div className="mt-11 mx-8">
          <p className="text-xs text-white ">{text}</p>
          <div className="mt-7">
            <div className="grid grid-cols-4">
              <Cart
                bgShape={shape}
                text={`رزرو هتل`}
                textColor="text-white"
                shapeCart={hotel}
              />
              <Cart
                bgShape={shape}
                text={`بلیط هواپیما`}
                textColor="text-white"
                shapeCart={Airplane}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
