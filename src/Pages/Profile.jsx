import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import MoreInfoCard from '../components/MoreInfoCard/MoreInfoCard';
import ProfleCard from '../components/ProfileCard/ProfleCard';

export default function Profile() {
  return (
    <>
      <MainLayout>
        <ProfleCard />
        <MoreInfoCard />
      </MainLayout>
    </>
  );
}
