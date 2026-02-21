export interface Article {
  id: string;
  title: string;
  titleZh: string;
  authors: string;
  authorsZh: string;
  abstract: string;
  abstractZh: string;
  category: string;
  publishDate: string;
  doi: string;
  imageUrl?: string;
  pdfUrl?: string;
  isFeatured?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  titleZh: string;
  date: string;
  summary: string;
  summaryZh: string;
  content: string;
  contentZh: string;
  imageUrl?: string;
}

export interface BoardMember {
  id: string;
  name: string;
  nameZh: string;
  role: string;
  roleZh: string;
  affiliation: string;
  affiliationZh: string;
  imageUrl?: string;
}
