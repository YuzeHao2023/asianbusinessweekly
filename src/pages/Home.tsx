import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ARTICLES, NEWS } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import NewsCard from '../components/NewsCard';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const featuredArticle = ARTICLES.find(a => a.isFeatured) || ARTICLES[0];
  const latestArticles = ARTICLES.slice(0, 3);
  const latestNews = NEWS.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-journal-grey py-12 border-b border-journal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-journal-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em] mb-6">
                {t('Featured Research', '特色研究')}
              </span>
              <Link to={`/articles/${featuredArticle.id}`} className="group">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6 group-hover:text-journal-red transition-colors">
                  {t(featuredArticle.title, featuredArticle.titleZh)}
                </h1>
              </Link>
              <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest">
                <span>By {t(featuredArticle.authors.split(',')[0], featuredArticle.authorsZh.split(',')[0])} et al.</span>
                <span className="text-gray-300">|</span>
                <Link to={`/articles/${featuredArticle.id}`} className="flex items-center text-journal-red hover:underline underline-offset-4">
                  {t('Read Full Article', '阅读全文')} <ChevronRight size={16} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={featuredArticle.imageUrl} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content: Latest Articles */}
            <div className="lg:col-span-8">
              <div className="flex justify-between items-end border-b-2 border-journal-black pb-2 mb-8">
                <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">
                  {t('Latest Articles', '最新论文')}
                </h2>
                <Link to="/articles" className="text-xs font-bold uppercase tracking-widest text-journal-red flex items-center hover:underline">
                  {t('View All', '查看全部')} <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              
              <div className="space-y-2">
                {latestArticles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar: News & Announcements */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="border-b-2 border-journal-black pb-2 mb-8">
                  <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">
                    {t('News', '新闻动态')}
                  </h2>
                </div>
                
                <div className="space-y-2">
                  {latestNews.map(news => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>

                <div className="mt-12 p-8 bg-journal-grey rounded-lg border border-journal-border">
                  <h3 className="text-lg font-serif font-bold mb-4 uppercase tracking-tight">
                    {t('Submit Your Paper', '提交您的论文')}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {t(
                      'Join our community of scholars. We welcome original research, reviews, and case studies focused on the Asian business landscape.',
                      '加入我们的学者社区。我们欢迎专注于亚洲商业格局的原创研究、评论和案例研究。'
                    )}
                  </p>
                  <Link 
                    to="/submit" 
                    className="block w-full text-center bg-journal-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-journal-red transition-colors"
                  >
                    {t('Submission Guidelines', '投稿指南')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
