import React from 'react';

interface UserCardProps {
  quote: string;
  imgSrc: string;
  name: string;
  title: string;
  twitterLink: string;
}

const UserCard: React.FC<UserCardProps> = ({ quote, imgSrc, name, title, twitterLink }) => {
  return (
    <figure className="w-full lg:w-1/4 box-content flex flex-col justify-between p-8 rounded-xl bg-gray-500/5">
      <blockquote className="text-lg text-white sm:text-md sm:leading-8">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-6 text-base text-white">
        <a href={twitterLink} className="flex items-center gap-x-2">
          <img src={imgSrc} alt={name} className="h-12 w-12 rounded-full" />
          <div>
            <div className="font-semibold hover:underline">{name}</div>
            <div className="mt-1">{title}</div>
          </div>
        </a>
      </figcaption>
    </figure>
  );
};

export default UserCard;
