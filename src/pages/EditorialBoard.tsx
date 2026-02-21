import React from 'react';
import { EDITORIAL_BOARD } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export default function EditorialBoard() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="border-b-2 border-journal-black pb-4 mb-12">
        <h1 className="text-4xl font-serif font-bold uppercase tracking-tight mb-2">
          {t('Editorial Board', '编委会成员')}
        </h1>
      </div>

      <div className="prose prose-lg max-w-none mb-16">
        <p className="text-gray-600 leading-relaxed">
          {t(
            'The Editorial Board of Asian Business Weekly comprises distinguished scholars and practitioners from leading institutions worldwide. Our members are committed to maintaining the highest standards of academic excellence and integrity.',
            '《亚洲商业周刊》编委会由来自全球领先机构的杰出学者和从业者组成。我们的成员致力于维护最高标准的学术卓越和诚信。'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {EDITORIAL_BOARD.map(member => (
          <div key={member.id} className="group">
            <div className="aspect-square overflow-hidden rounded-lg mb-6 bg-journal-grey">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-1">{t(member.name, member.nameZh)}</h3>
            <div className="space-y-1">
              <p className="text-journal-red font-bold text-sm uppercase tracking-widest">
                {t(member.role, member.roleZh)}
              </p>
              <p className="text-gray-600 text-sm">{t(member.affiliation, member.affiliationZh)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-journal-grey rounded-xl border border-journal-border text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">{t('Join Our Reviewer Database', '加入我们的审稿人数据库')}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          {t(
            'We are always looking for qualified peer reviewers. If you are interested in contributing to the journal\'s review process, please send your CV and research interests to our editorial office.',
            '我们一直在寻找合格的同行评审员。如果您有兴趣为期刊的评审过程做出贡献，请将您的简历和研究兴趣发送至我们的编辑部。'
          )}
        </p>
        <button className="bg-journal-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-journal-red transition-colors">
          {t('Apply to Review', '申请审稿')}
        </button>
      </div>
    </div>
  );
}
