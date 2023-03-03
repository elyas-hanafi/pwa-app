import React, { useContext } from 'react';
import AnotherServices from '../components/AnotherServices/AnotherServices';
import MainLayout from '../components/Layout/MainLayout';
import MainBanner from '../components/MainBanner/MainBanner';
import PaymentService from '../components/PaymentService/PaymentService';
import { Store } from '../utils/Store';

export default function Profile() {
  return (
    <MainLayout>
      <PaymentService />
      {/* <MainBanner /> */}
      {/* <AnotherServices /> */}
    </MainLayout>
  );
}
