'use client';

import i18n from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../public/locales/en/common.json';
import hiCommon from '../public/locales/hi/common.json';

const resources = {
  en: { common: enCommon },
  hi: { common: hiCommon },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
    });
}

// Custom hook to access useTranslation
export function useTranslation() {
  return useTranslationOrg('common');
}

export default i18n; // 👈 Export the shared instance
