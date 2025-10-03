'use client';

import i18n from '@/i18n';

export default function LanguageSwitcher() {
  return (
    <div className="flex gap-4 mb-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => i18n.changeLanguage('en')}
      >
        English
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => i18n.changeLanguage('hi')}
      >
        हिन्दी
      </button>
    </div>
  );
}
