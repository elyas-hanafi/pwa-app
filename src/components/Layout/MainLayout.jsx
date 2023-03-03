import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/MainHeader';
// bg-[#dbdbdb]
export default function MainLayout({ children }) {
  return (
    <div className="max-w-[360px] relative mx-auto bg-[#f3f3f3] ">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
