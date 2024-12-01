import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  flag: string;
  name: string;
}

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages: Language[] = [
    { 
      code: 'fr', 
      flag: 'https://gta5grand.com/assets/new/img/flags/flag-france.svg',
      name: 'Français'
    },
    { 
      code: 'en', 
      flag: 'https://gta5grand.com/assets/new/img/flags/flag-britan.svg',
      name: 'English'
    },
    { 
      code: 'es', 
      flag: 'https://gta5grand.com/assets/new/img/flags/flag-spain.svg',
      name: 'Español'
    }
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="flex items-center gap-3">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`transition-opacity duration-300 ${
            i18n.language === lang.code ? 'opacity-100' : 'opacity-50 hover:opacity-100'
          }`}
          title={lang.name}
        >
          <img 
            src={lang.flag} 
            alt={`${lang.name} flag`}
            className="w-6 h-6 rounded-full"
          />
        </motion.button>
      ))}
    </div>
  );
}