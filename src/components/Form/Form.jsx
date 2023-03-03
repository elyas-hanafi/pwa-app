import React from 'react';
import user from '../../img/UserP.svg';
import { ReactComponent as User } from './../../img/UserRed.svg';
export default function Form({ children, des, titel, formImg }) {
  return (
    <>
      <div dir="rtl" className="form w-[315px] mx-auto">
        <div className="ttitel mt-7 ">
          <div className="text-sm flex items-center  text-[#e90000]">
            {/* <img src={formImg} alt="" className="ml-1 mt-1" /> */}
            <User fill="white" />
            <p className="pr-2 pb-2">{titel}</p>
          </div>
          <p className="text-xs mt-5 text-[#7a7a7a]">{des}</p>
        </div>
        <form dir="rtl" className="mx-auto w-full">
          {children}
        </form>
      </div>
    </>
  );
}
