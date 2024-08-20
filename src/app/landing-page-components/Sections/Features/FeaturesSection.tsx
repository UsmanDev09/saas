import React from 'react';
import Feature from './Feature';

const features = [
  {
    icon: '🤝',
    title: 'Open-Source Philosophy',
    description: 'The repo and framework are 100% open-source, and so are the services wherever possible. Still missing something? Contribute!',
    link: 'https://docs.opensaas.sh',
  },
  {
    icon: '🔐',
    title: 'DIY Auth, Done For You',
    description: 'Pre-configured full-stack Auth that you own. No 3rd-party services or hidden fees.',
    link: 'https://docs.opensaas.sh/guides/authentication/',
  },
  {
    icon: '🥞',
    title: 'Full-stack Type Safety',
    description: 'Full support for TypeScript with auto-generated types that span the whole stack. Nothing to configure!',
    link: 'https://docs.opensaas.sh',
  },
  {
    icon: '💸',
    title: 'Stripe Integration',
    description: 'No SaaS is complete without payments. That\'s why payments and the necessary webhooks are built-in.',
    link: 'https://docs.opensaas.sh/guides/stripe-integration/',
  },
  {
    icon: '📈',
    title: 'Admin Dashboard',
    description: 'Graphs! Tables! Analytics w/ Plausible or Google! All in one place. Ooooooooooh.',
    link: 'https://docs.opensaas.sh/general/admin-dashboard/',
  },
  {
    icon: '📧',
    title: 'Email Sending',
    description: 'Email sending built-in. Combine it with the cron jobs feature to easily send emails to your customers.',
    link: 'https://docs.opensaas.sh/guides/email-sending/',
  },
  {
    icon: '🤖',
    title: 'OpenAI API Implemented',
    description: 'Have a sweet AI-powered app concept? Get your idea shipped to potential customers in days!',
    link: 'https://docs.opensaas.sh',
  },
  {
    icon: '📁',
    title: 'File Uploads with AWS',
    description: 'File upload examples with AWS S3 presigned URLs are included and fully documented!',
    link: 'https://docs.opensaas.sh/guides/file-uploading/',
  },
  {
    icon: '📝',
    title: 'Blog w/ Astro',
    description: 'Built-in blog with the Astro framework. Write your posts in Markdown, and watch your SEO performance take off.',
    link: 'https://docs.opensaas.sh/start/guided-tour/',
  },
  {
    icon: '🚀',
    title: 'Deploy Anywhere. Easily.',
    description: 'No vendor lock-in because you own all your code. Deploy yourself, or let Wasp deploy it for you with a single command.',
    link: 'https://docs.opensaas.sh/guides/deploying/',
  },
  {
    icon: '🧪',
    title: 'E2E Tests w/ Playwright',
    description: 'Move fast without breaking too much. Tests and a CI pipeline w/ GitHub Actions are set up for you.',
    link: 'https://docs.opensaas.sh/guides/tests/',
  },
  {
    icon: '🫂',
    title: 'Complete Documentation & Support',
    description: 'We don’t leave you hanging. We have detailed docs and a Discord community to help!',
    link: 'https://docs.opensaas.sh',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="px-[32px] mt-[192px] bg-white dark:bg-gray-800 text-black">
        <div className='mt-[8px] flex items-center justify-center gap-3 text-5xl font-bold'>
            <h2 className=" text-yellow-400 font-bold text-center">100%</h2>
            <h2 className="">Open-Source</h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 mt-[24px] text-xl dark:text-gray-400'>
          <p>No vendor lock-in.</p>
          <p>Deploy anywhere.</p>
        </div>
      
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4x'>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeaturesSection;