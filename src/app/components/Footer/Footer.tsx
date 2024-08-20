import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-boxdark-2 px-6 lg:px-8 dark:bg-boxdark-2">
      <footer aria-labelledby="footer-heading" className="relative w-full border-t border-gray-900/10 dark:border-gray-100/10 py-24 sm:mt-32">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto flex items-send justify-end mt-10 gap-20">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">App</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://github.com/wasp-lang/open-saas" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white">
                  Github
                </a>
              </li>
              <li>
                <a href="https://docs.opensaas.sh" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://docs.opensaas.sh/blog" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="https://wasp-lang.dev" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;