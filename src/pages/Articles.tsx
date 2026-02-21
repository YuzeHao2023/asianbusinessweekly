import React from 'react';
import { ARTICLES } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import { useLanguage } from '../context/LanguageContext';

export default function Articles() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="border-b-2 border-journal-black pb-4 mb-12">
        <h1 className="text-4xl font-serif font-bold uppercase tracking-tight mb-2">
          {t('Published Articles', '已发表论文')}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-journal-border pb-2">
                {t('Categories', '类别')}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><button className="text-journal-red font-bold">{t('All Articles', '所有论文')}</button></li>
                <li><button className="hover:text-journal-red transition-colors">{t('Research Articles', '研究论文')}</button></li>
                <li><button className="hover:text-journal-red transition-colors">{t('Review Papers', '综述论文')}</button></li>
                <li><button className="hover:text-journal-red transition-colors">{t('Case Studies', '案例研究')}</button></li>
                <li><button className="hover:text-journal-red transition-colors">{t('Editorials', '社论')}</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-journal-border pb-2">
                {t('Archive', '存档')}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><button className="hover:text-journal-red transition-colors">Volume 12 (2024)</button></li>
                <li><button className="hover:text-journal-red transition-colors">Volume 11 (2023)</button></li>
                <li><button className="hover:text-journal-red transition-colors">Volume 10 (2022)</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-9">
          <div className="space-y-4">
            {ARTICLES.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="px-6 py-2 border border-journal-border text-sm font-bold uppercase tracking-widest hover:bg-journal-grey transition-colors">
              {t('Load More Articles', '加载更多论文')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
