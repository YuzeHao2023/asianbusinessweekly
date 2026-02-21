import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
  key?: string | number;
}

export default function NewsCard({ news, featured = false }: NewsCardProps) {
  const { t } = useLanguage();

  if (featured) {
    return (
      <div className="relative group overflow-hidden rounded-lg bg-journal-black aspect-video">
        {news.imageUrl && (
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
          <span className="text-xs font-bold text-journal-red uppercase tracking-widest mb-2">{news.date}</span>
          <Link to={`/news/${news.id}`}>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 group-hover:underline decoration-journal-red underline-offset-8">
              {t(news.title, news.titleZh)}
            </h3>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 border-b border-journal-grey last:border-0">
      <span className="text-[10px] font-mono text-gray-500 mb-2 block">{news.date}</span>
      <Link to={`/news/${news.id}`} className="block group">
        <h4 className="text-lg font-serif font-bold mb-1 group-hover:text-journal-red transition-colors">
          {t(news.title, news.titleZh)}
        </h4>
      </Link>
      <p className="text-sm text-gray-600 line-clamp-2">{t(news.summary, news.summaryZh)}</p>
    </div>
  );
}
