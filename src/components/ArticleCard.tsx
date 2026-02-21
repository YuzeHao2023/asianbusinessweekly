import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink, Download } from 'lucide-react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
  key?: string | number;
}

export default function ArticleCard({ article, compact = false }: ArticleCardProps) {
  const { t } = useLanguage();

  if (compact) {
    return (
      <div className="py-4 border-b border-journal-grey last:border-0 group">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-journal-red mb-1 block">
              {article.category}
            </span>
            <Link to={`/articles/${article.id}`} className="block">
              <h3 className="text-lg font-serif font-bold leading-tight group-hover:text-journal-red transition-colors mb-1">
                {t(article.title, article.titleZh)}
              </h3>
            </Link>
            <p className="text-xs text-gray-600 italic">{t(article.authors, article.authorsZh)}</p>
          </div>
          {article.imageUrl && (
            <div className="w-24 h-24 flex-shrink-0">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover rounded"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 border-b border-journal-border last:border-0 group">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <div className="flex items-center space-x-3 mb-3">
            <span className="bg-journal-red text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-xs text-gray-500 font-mono">{article.publishDate}</span>
          </div>
          
          <Link to={`/articles/${article.id}`} className="block mb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight group-hover:text-journal-red transition-colors mb-2">
              {t(article.title, article.titleZh)}
            </h2>
          </Link>

          <div className="mb-4">
            <p className="text-sm text-gray-800 font-semibold">{t(article.authors, article.authorsZh)}</p>
          </div>

          <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
            {t(article.abstract, article.abstractZh)}
          </p>

          <div className="flex items-center space-x-6">
            <Link 
              to={`/articles/${article.id}`} 
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-journal-red transition-colors"
            >
              <FileText size={16} />
              <span>{t('Full Text', '查看全文')}</span>
            </Link>
            <a 
              href={article.pdfUrl || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-journal-red transition-colors"
            >
              <Download size={16} />
              <span>{t('Download PDF', '下载 PDF')}</span>
            </a>
            <span className="text-[10px] text-gray-400 font-mono">DOI: {article.doi}</span>
          </div>
        </div>

        {article.imageUrl && (
          <div className="hidden md:block">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full aspect-[4/3] object-cover rounded shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>
    </div>
  );
}
