import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Rss, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation('footer');
  const currentYear = new Date().getFullYear();

  const socialMediaIcons = [
    { IconComponent: Facebook, label: t('socialLabels.facebook'), href: '#' },
    { IconComponent: Mail, label: t('socialLabels.contact'), href: '#' },
    { IconComponent: Twitter, label: t('socialLabels.twitter'), href: '#' },
    { IconComponent: Rss, label: t('socialLabels.rss'), href: '#' }
  ];

  // ...rest of your component

  return (
    <footer className="bg-gray-50 pt-12 md:pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 md:mb-12">
          <div>
            <img src="https://i.imgur.com/K185K6w.png" alt="SUBAS Logo" className="h-9 sm:h-10 mb-5 sm:mb-6" />
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{t('about.description1')}</p>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t('about.description2')}</p>
            <div className="flex space-x-3">
              {socialMediaIcons.map(({ IconComponent, label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center text-gray-500 border border-gray-300 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-300"
                >
                  <IconComponent size={18} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-5 relative pl-3">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-orange-500"></span>
              {t('getInTouch.title')}
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                placeholder={t('getInTouch.namePlaceholder')}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t('getInTouch.emailPlaceholder')}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder={t('getInTouch.messagePlaceholder')}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white resize-none placeholder-gray-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 uppercase text-xs sm:text-sm cursor-pointer"
              >
                {t('getInTouch.submitButton')}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500">
            {t('footerBottom.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
