import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-journal-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold tracking-tighter mb-4">ASIAN BUSINESS WEEKLY</h2>
            <p className="text-gray-400 max-w-md mb-6">
              {t(
                'A leading international journal dedicated to publishing high-quality research on business, economics, and management with a specific focus on the Asian context.',
                '一本领先的国际期刊，致力于发表关于商业、经济和管理的优质研究，特别关注亚洲背景。'
              )}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-journal-red transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-journal-red transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-journal-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-journal-red transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">{t('Resources', '资源')}</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/submit" className="hover:text-white transition-colors">{t('For Authors', '作者指南')}</Link></li>
              <li><Link to="/editorial-board" className="hover:text-white transition-colors">{t('Editorial Board', '编委会')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Permissions', '权限')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Open Access Policy', '开放获取政策')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">{t('About', '关于')}</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('About the Journal', '关于期刊')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Contact Us', '联系我们')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Privacy Policy', '隐私政策')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('Terms of Service', '服务条款')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Asian Business Weekly. All rights reserved. ISSN: 2345-6789</p>
          <p className="mt-4 md:mt-0">{t('Published by Asian Academic Press', '由亚洲学术出版社出版')}</p>
        </div>
      </div>
    </footer>
  );
}
