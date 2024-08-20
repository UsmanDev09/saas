import React from 'react';
import FAQ from './FAQ';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Why is this SaaS Template free and open-source?",
      answer: "We believe the best product is made when the community puts their heads together. We also believe a quality starting point for a web app should be free and available to everyone. Our hope is that together we can create the best SaaS template out there and bring our ideas to customers quickly."
    },
    {
      question: "What's Wasp?",
      answer: "It's the fastest way to develop full-stack React + NodeJS + Prisma apps and it's what gives this template superpowers. Wasp relies on React, NodeJS, and Prisma to define web components and server queries and actions. Wasp's secret sauce is its compiler which takes the client, server code, and config file and outputs the client app, server app and deployment code, supercharging the development experience. Combined with this template, you can build a SaaS app in record time.",
      link: {
        url: "https://wasp-lang.dev",
        text: "Learn more →"
      }
    }
  ];

  return (
    <div className="mt-32 mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:py-32">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">Frequently asked questions</h2>
      <dl className="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-gray-100/10">
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} link={faq.link} />
        ))}
      </dl>
    </div>
  );
};

export default FAQSection;