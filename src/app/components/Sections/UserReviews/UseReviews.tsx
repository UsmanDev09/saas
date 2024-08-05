import React from 'react';
import UserCard from './UserCard';

const UserReviews: React.FC = () => {
  return (
    <div className='mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8'>
      <div className='relative sm:left-5 -m-2 rounded-xl bg-yellow-400/20 lg:ring-1 lg:ring-yellow-500/50 lg:-m-4 p-8'>
        <div className='elative sm:top-5 sm:right-5 bg-gray-800 dark:bg-boxdark px-8 py-20 shadow-xl sm:rounded-xl sm:px-10 sm:py-16 md:px-12 lg:px-20'>
          <h2 className='text-left text-xl font-semibold tracking-wide leading-7 text-gray-500 dark:text-white mb-6'>What Our Users Say</h2>
          <div className="relative flex flex-wrap gap-6 w-full mt-6 z-10 justify-between lg:mx-0">
            <UserCard
              quote="I used Wasp to build and sell my AI-augmented SaaS app for marketplace vendors within two months!"
              imgSrc="https://pbs.twimg.com/profile_images/1719397191205179392/V_QrGPSO_400x400.jpg"
              name="Max Khamrovskyi"
              title="Senior Eng @ Red Hat"
              twitterLink="https://twitter.com/maksim36ua"
            />
            <UserCard
              quote="Nearly done with a MVP in 3 days of part-time work... and deployed on Fly.io in 10 minutes."
              imgSrc="https://pbs.twimg.com/profile_images/1802196804236091392/ZG0OE_fO_400x400.jpg"
              name="Tim Skaggs"
              title="Founder @ Antler US"
              twitterLink="https://twitter.com/tskaggs"
            />
            <UserCard
              quote="In just 6 nights... my SaaS app is live 🎉! Huge thanks to the amazing @wasplang community 🙌 for their guidance along the way. These tools are incredibly efficient 🤯!"
              imgSrc="https://pbs.twimg.com/profile_images/926142421653753857/o6Hmcbr7_400x400.jpg"
              name="Jonathan Cocharan"
              title="Entrepreneur"
              twitterLink="https://twitter.com/jonathancocharan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReviews;