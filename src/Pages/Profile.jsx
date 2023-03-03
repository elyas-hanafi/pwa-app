import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import ProfileLayout from '../components/Layout/ProfileLayout';
import MoreInfoCard from '../components/MoreInfoCard/MoreInfoCard';
import ProfleCard from '../components/ProfileCard/ProfleCard';

export default function Profile() {
  return (
    <>
      <ProfileLayout>
        <ProfleCard />
        <MoreInfoCard />
      </ProfileLayout>
    </>
  );
}
