import { Metadata } from 'next';

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import ProfileClientComponent from "../../components/profileClientComponent";

import { useDispatch, useSelector,Provider } from 'react-redux';
import type { RootState } from '@/redux/store';

import store from '@/redux/store';

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Profile = () => {

  return (
    <ProfileClientComponent/>
  );
};

export default Profile;
