import React from 'react';
import sideBar from '../../img/Component 2.svg';
import message from '../../img/message-question.svg';
import wallet from '../../img/Wallet.svg';
import helal from '../../img/helal.png';
import banner from '../../img/banner.png';

import { ReactComponent as Close } from '../../img/Close Square-1.svg';

// last bg gradiant bg-gradient-to-t to-[#6D47D3] from-[#A08DD4]
// last height h-[87px]
export default function ProfileHeader({ children }) {
  const [Active, setActive] = React.useState(false);
  const handelActive = () => {
    setActive(!Active);
  };
  return (
    <div
      dir="rtl"
      className="w-[360px] h-[80px]  bg-gradient-to-t to-[#E30613] from-[#E05D64]"
      onClick={handelActive}
    >
      <div className="flex justify-around items-center pt-2 text-white">
        <div>
          <img src={sideBar} alt="" />
        </div>
        <div className="font-medium text-sm">سرویس ها</div>
        <div className="flex justify-between">
          {/* <div className="ml-3">
            <img src={message} alt="" />
          </div>
          <div>
            <img src={wallet} alt="" />
          </div> */}
          <div>
            <img src={helal} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="mx-auto w-5/6 mt-5">
        <img src={banner} alt="" />
      </div> */}
      {children}
      {Active && <SideBar onHandelClick={handelActive} />}
    </div>
  );
}

const SideBar = ({ handelActive }) => {
  return (
    <div className="absolute w-1/2 text-[#434343]  h-full bg-gradient-to-t from-[#E8E3F5] to-[#E8E3F5] z-50 top-0 rounded-l-md rounded-r-md">
      <div className="flex justify-around mt-9 pb-6 border-b-2 border-[#179E66]/[.3]">
        <p className="text-xs">صفحات دیگر</p>
        <Close onClick={handelActive} />
      </div>
      <div>
        <ul className="text-xs mr-6 mt-3">
          <li className="mb-7">درباره ما</li>
          <li>تماس باما</li>
        </ul>
      </div>
    </div>
  );
};
