'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-emerald-900 text-white py-3 px-4 text-center z-[60] relative overflow-hidden">
      <div className="flex items-center justify-center gap-2">
        <span className="bg-yellow-400 text-emerald-900 px-2 py-0.5 rounded text-xs uppercase tracking-tighter font-bold">
          {t.newMarket}
        </span>
        <p className="text-sm font-bold">{t.announcementText}</p>
      </div>
    </div>
  );
}
