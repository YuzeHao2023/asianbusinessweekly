import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data/mockData';
import { FileText, Download, Share2, Bookmark, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ArticleDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">{t('Article Not Found', '未找到论文')}</h1>
        <Link to="/articles" className="text-journal-red font-bold hover:underline">{t('Return to Articles', '返回论文列表')}</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="border-b border-journal-border py-12 bg-journal-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/articles" className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-journal-red mb-8 transition-colors">
            <ChevronLeft size={14} className="mr-1" /> {t('Back to Articles', '返回论文列表')}
          </Link>
          
          <div className="flex items-center space-x-3 mb-6">
            <span className="bg-journal-red text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-xs text-gray-500 font-mono">{t('Published', '发表日期')}: {article.publishDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {t(article.title, article.titleZh)}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">{t(article.authors, article.authorsZh)}</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 border-t border-journal-border pt-8">
            <a 
              href={article.pdfUrl || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-journal-red transition-colors"
            >
              <Download size={16} />
              <span>{t('Download PDF', '下载 PDF')}</span>
            </a>
            <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-journal-red transition-colors">
              <Share2 size={16} />
              <span>{t('Share', '分享')}</span>
            </button>
            <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-journal-red transition-colors">
              <Bookmark size={16} />
              <span>{t('Save', '保存')}</span>
            </button>
            <span className="text-[10px] text-gray-400 font-mono ml-auto">DOI: {article.doi}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <section className="mb-12">
              <h2 className="text-xl font-serif font-bold uppercase tracking-tight border-b-2 border-journal-black pb-2 mb-6">
                {t('Abstract', '摘要')}
              </h2>
              <div className="space-y-6">
                <p className="text-gray-800 leading-relaxed font-medium italic">
                  {t(article.abstract, article.abstractZh)}
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-serif font-bold uppercase tracking-tight border-b-2 border-journal-black pb-2 mb-6">
                {t('Introduction', '引言')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  {t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    '本文探讨了在亚洲商业环境下，数字化转型对企业竞争力的深远影响。通过对多个行业的实证分析，我们发现技术创新不仅改变了运营模式，还重塑了市场格局。'
                  )}
                </p>
              </div>
            </section>

            {article.imageUrl && (
              <figure className="my-12">
                <img 
                  src={article.imageUrl} 
                  alt="Figure 1" 
                  className="w-full rounded-lg shadow-md mb-4"
                  referrerPolicy="no-referrer"
                />
                <figcaption className="text-sm text-gray-500 italic text-center">
                  {t('Figure 1: Visual representation of the research data and findings.', '图 1：研究数据和结果的可视化呈现。')}
                </figcaption>
              </figure>
            )}

            <section className="mb-12">
              <h2 className="text-xl font-serif font-bold uppercase tracking-tight border-b-2 border-journal-black pb-2 mb-6">
                {t('Conclusion', '结论')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  {t(
                    'In conclusion, our findings suggest that digital transformation plays a critical role in shaping the future of business in Asia.',
                    '综上所述，我们的研究结果表明，数字化转型在塑造亚洲商业未来方面发挥着至关重要的作用。'
                  )}
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-journal-border pb-2">
                  {t('Metrics', '指标')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-journal-grey rounded text-center">
                    <span className="block text-2xl font-serif font-bold">1,245</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">{t('Views', '浏览量')}</span>
                  </div>
                  <div className="p-4 bg-journal-grey rounded text-center">
                    <span className="block text-2xl font-serif font-bold">86</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">{t('Citations', '引用量')}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-journal-border pb-2">
                  {t('Related Articles', '相关论文')}
                </h3>
                <div className="space-y-6">
                  {ARTICLES.filter(a => a.id !== id).slice(0, 2).map(a => (
                    <div key={a.id}>
                      <Link to={`/articles/${a.id}`} className="block group">
                        <h4 className="text-sm font-serif font-bold group-hover:text-journal-red transition-colors leading-tight mb-1">
                          {t(a.title, a.titleZh)}
                        </h4>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">{a.category}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-journal-black text-white rounded-lg">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{t('Cite this Article', '引用本文')}</h3>
                <div className="bg-white/10 p-4 rounded text-xs font-mono break-all mb-4">
                  {t(article.authors.split(',')[0], article.authorsZh.split(',')[0])} (2024). {t(article.title, article.titleZh)}. Asian Business Weekly, 12(1). doi:{article.doi}
                </div>
                <button className="w-full py-2 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-journal-black transition-colors">
                  {t('Copy Citation', '复制引用')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
