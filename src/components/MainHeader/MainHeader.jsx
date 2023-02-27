import React from 'react';
import sideBar from '../../img/Component 2.svg';
import message from '../../img/message-question.svg';
import wallet from '../../img/Wallet.svg';
import { ReactComponent as Close } from '../../img/Close Square-1.svg';

export default function MainHeader({ children }) {
  const [Active, setActive] = React.useState(false);
  const handelActive = () => {
    setActive(!Active);
  };
  return (
    <div
      dir="rtl"
      className="w-[360px] h-[87px] bg-gradient-to-t to-[#6D47D3] from-[#A08DD4]"
      onClick={handelActive}
    >
      <div className="flex justify-around items-center h-full text-white">
        <div>
          <img src={sideBar} alt="" />
        </div>
        <div className="font-medium text-sm">سرویس ها</div>
        <div className="flex justify-between">
          <div className="ml-3">
            <img src={message} alt="" />
          </div>
          <div>
            <img src={wallet} alt="" />
          </div>
        </div>
      </div>
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
