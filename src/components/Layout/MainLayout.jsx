import React from 'react';
import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/MainHeader';
// bg-[#dbdbdb]
export default function MainLayout({ children }) {
  return (
    <div className="max-w-[360px] relative mx-auto bg-[#e6e6e6] ">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
