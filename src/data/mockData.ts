import { Article, NewsItem, BoardMember } from '../types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Impact of Digital Transformation on Supply Chain Resilience in Southeast Asia',
    titleZh: '数字化转型对东南亚供应链韧性的影响',
    authors: 'Li Wei, Sarah Johnson, Tan Min-Li',
    authorsZh: '李伟, 莎拉·约翰逊, 陈敏丽',
    abstract: 'This study examines how digital technologies enhance supply chain resilience across major ASEAN economies during global disruptions...',
    abstractZh: '本研究探讨了在全球动荡期间，数字技术如何增强东盟主要经济体的供应链韧性...',
    category: 'Research Article',
    publishDate: '2024-05-15',
    doi: '10.1234/abw.2024.001',
    imageUrl: 'https://picsum.photos/seed/supplychain/800/450',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Green Finance and Sustainable Development: A Comparative Analysis of Asian Markets',
    titleZh: '绿色金融与可持续发展：亚洲市场的比较分析',
    authors: 'Zhang Peng, Yuki Tanaka',
    authorsZh: '张鹏, 田中幸子',
    abstract: 'An in-depth look at the evolution of green bonds and sustainable investment frameworks in China, Japan, and South Korea.',
    abstractZh: '深入探讨中国、日本和韩国绿色债券及可持续投资框架的演变。',
    category: 'Review',
    publishDate: '2024-05-10',
    doi: '10.1234/abw.2024.002',
    imageUrl: 'https://picsum.photos/seed/greenfinance/800/450',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '3',
    title: 'Consumer Behavior Shifts in Post-Pandemic Urban China',
    titleZh: '后疫情时代中国城市消费行为的转变',
    authors: 'Wang Fang, David Miller',
    authorsZh: '王芳, 戴维·米勒',
    abstract: 'Analyzing the long-term changes in spending patterns and digital consumption among middle-class households in Tier-1 cities.',
    abstractZh: '分析一线城市中产阶级家庭消费模式和数字消费的长期变化。',
    category: 'Research Article',
    publishDate: '2024-04-28',
    doi: '10.1234/abw.2024.003',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Asian Business Weekly Receives Top Impact Factor Ranking',
    titleZh: '《亚洲商业周刊》获得顶级影响因子排名',
    date: '2024-06-01',
    summary: 'The latest Journal Citation Reports show a significant increase in our impact factor, placing us among the top business journals globally.',
    summaryZh: '最新的期刊引用报告显示，我们的影响因子显著提高，位列全球顶级商业期刊之列。',
    content: 'Full content here...',
    contentZh: '详细内容...',
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
  },
  {
    id: '2',
    title: 'Call for Papers: Special Issue on AI in Asian Management',
    titleZh: '征稿启事：亚洲管理中的人工智能特刊',
    date: '2024-05-20',
    summary: 'We are inviting submissions for our upcoming special issue focusing on the integration of AI in corporate governance and management.',
    summaryZh: '我们诚邀您为即将出版的关于人工智能在公司治理和管理中集成的特刊投稿。',
    content: 'Full content here...',
    contentZh: '详细内容...',
  }
];

export const EDITORIAL_BOARD: BoardMember[] = [
  {
    id: '1',
    name: 'Prof. Chen Hong',
    nameZh: '陈宏 教授',
    role: 'Editor-in-Chief',
    roleZh: '主编',
    affiliation: 'National University of Singapore',
    affiliationZh: '新加坡国立大学',
    imageUrl: 'https://picsum.photos/seed/prof1/200/200',
  },
  {
    id: '2',
    name: 'Prof. Robert Wilson',
    nameZh: '罗伯特·威尔逊 教授',
    role: 'Associate Editor',
    roleZh: '副主编',
    affiliation: 'Stanford University',
    affiliationZh: '斯坦福大学',
    imageUrl: 'https://picsum.photos/seed/prof2/200/200',
  },
  {
    id: '3',
    name: 'Dr. Liu Yang',
    nameZh: '刘洋 博士',
    role: 'Managing Editor',
    roleZh: '执行主编',
    affiliation: 'Tsinghua University',
    affiliationZh: '清华大学',
    imageUrl: 'https://picsum.photos/seed/prof3/200/200',
  }
];
