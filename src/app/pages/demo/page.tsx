"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import ECommerce from '@/components/Dashboard/E-commerce';

const demo: React.FC = () => {
  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
};

export default demo;