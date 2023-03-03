import React from 'react';
// import BottomImg from '../BottomImg/BottomImg';
import TopImg from '../TopImg/TopImg';
import bottomImg from '../../img/RedRectangel.png';

export default function Layout({ children, activeTopImg }) {
  return (
    <div
      className="w-[360px] mx-auto h-[720px] bg-[#F9F9F9]"
      style={{
        backgroundImage: `url(${bottomImg})`,
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {activeTopImg && <TopImg />}
      {children}
    </div>
  );
}
