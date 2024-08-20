import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, link }) => {
  return (
    <a href={link} className="relative pl-16">
      
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg group-hover:border-yellow-500">
        <div className="text-2xl group-hover:opacity-80">
          {icon}
        </div>
      </div>

      <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white group-hover:underline">
        {title}
      </dt>

      <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
        {description}
      </dd>
    </a>
  );
};

export default Feature;