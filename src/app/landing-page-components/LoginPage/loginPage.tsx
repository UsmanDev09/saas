import React from 'react';
import { SignIn } from '@clerk/nextjs';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen dark:text-white dark:bg-boxdark-2">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex min-h-full flex-col justify-center pt-10 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-xl ring-1 ring-gray-900/10 sm:rounded-lg sm:px-10 dark:bg-white dark:text-gray-900">
              <SignIn path="/login" routing="path" signUpUrl="/signup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;