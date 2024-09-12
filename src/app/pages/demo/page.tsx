"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import ECommerce from '@/components/Dashboard/E-commerce';
import { useAuth, RedirectToSignIn } from '@clerk/nextjs';

const Demo: React.FC = () => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded || !userId) {
    return <RedirectToSignIn />;
  }

  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
};

export default Demo;