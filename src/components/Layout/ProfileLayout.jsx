import React from 'react';
import MainFooter from '../MainFooter/MainFooter';
import ProfileHeader from '../ProfilHeader/ProfileHeader';

export default function ProfileLayout({ children }) {
  return (
    <div className="max-w-[360px] relative mx-auto bg-[#f3f3f3] ">
      <ProfileHeader titel={`پروفایل`}/>
      {children}
      <MainFooter />
    </div>
  );
}
