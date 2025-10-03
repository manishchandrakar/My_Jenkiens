'use client';

import { useTranslation } from '@/i18n';
import LanguageSwitcher from '@/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="p-4">
      <LanguageSwitcher />
      <h1 className="text-xl font-bold">{t('greeting')}</h1>
      <p className="text-lg">{t('welcome')}</p>
    </main>
  );
}
