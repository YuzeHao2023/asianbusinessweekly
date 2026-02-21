import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: 'Home', nameZh: '首页', path: '/' },
    { name: 'Articles', nameZh: '论文', path: '/articles' },
    { name: 'News', nameZh: '新闻', path: '/news' },
    { name: 'Editorial Board', nameZh: '编委会', path: '/editorial-board' },
    { name: 'Submit', nameZh: '投稿', path: '/submit' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="border-b border-journal-border sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-serif font-bold tracking-tighter text-journal-red leading-none">
              ASIAN BUSINESS WEEKLY
            </span>
            <span className="text-sm font-medium tracking-widest text-journal-black mt-1">
              亚洲商业周刊
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-journal-red ${
                  location.pathname === item.path ? 'text-journal-red' : 'text-journal-black'
                }`}
              >
                <span>{t(item.name, item.nameZh)}</span>
              </Link>
            ))}
            <button className="p-2 hover:bg-journal-grey rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-xs font-bold border border-journal-black px-2 py-1 rounded hover:bg-journal-black hover:text-white transition-all"
            >
              <Globe size={14} />
              <span>{language === 'en' ? '中文' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2">
              <Search size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-journal-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium border-b border-journal-grey last:border-0"
                >
                  <span>{t(item.name, item.nameZh)}</span>
                </Link>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex justify-center items-center space-x-2 bg-journal-black text-white py-3 rounded"
                >
                  <Globe size={18} />
                  <span>{language === 'en' ? '切换至中文' : 'Switch to English'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
