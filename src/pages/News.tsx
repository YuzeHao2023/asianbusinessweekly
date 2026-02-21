import React from 'react';
import { NEWS } from '../data/mockData';
import NewsCard from '../components/NewsCard';
import { useLanguage } from '../context/LanguageContext';

export default function News() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="border-b-2 border-journal-black pb-4 mb-12">
        <h1 className="text-4xl font-serif font-bold uppercase tracking-tight mb-2">
          {t('News & Announcements', '新闻与公告')}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-8">
            {NEWS.map(item => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="bg-journal-grey p-8 rounded-lg border border-journal-border">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 border-b border-journal-border pb-2">
              {t('Media Contact', '媒体联系')}
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">{t('Press Office', '新闻办公室')}</p>
                <p className="text-gray-600">press@asianbusinessweekly.org</p>
              </div>
              <div>
                <p className="font-bold">{t('Phone', '电话')}</p>
                <p className="text-gray-600">+65 6789 0123</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-journal-border pb-2">
                {t('Follow Us', '关注我们')}
              </h3>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-journal-red transition-colors">Twitter</button>
                <button className="text-gray-400 hover:text-journal-red transition-colors">LinkedIn</button>
                <button className="text-gray-400 hover:text-journal-red transition-colors">WeChat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
