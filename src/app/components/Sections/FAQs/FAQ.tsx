import React from 'react';

interface FAQProps {
  question: string;
  answer: string;
  link?: {
    url: string;
    text: string;
  };
}

const FAQ: React.FC<FAQProps> = ({ question, answer, link }) => {
  return (
    <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
      <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5 dark:text-white">{question}</dt>
      <dd className="mt-4 lg:col-span-7 lg:mt-0">
        <p className="text-base leading-7 text-gray-600 dark:text-gray-400">{answer}</p>
        {link && (
          <a href={link.url} className="mt-4 text-base leading-7 text-yellow-500 hover:text-yellow-600">{link.text}</a>
        )}
      </dd>
    </div>
  );
};

export default FAQ;
