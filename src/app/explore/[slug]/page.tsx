import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { journalData } from '@/data/journal/data';
import { ArticleLayout } from '@/components/journal/ArticleLayout';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return journalData.articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = journalData.articles.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | VNLS Journal',
    };
  }

  return {
    title: `${article.title} | VNLS Journal`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = journalData.articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const author = journalData.authors[article.authorId];
  
  return (
    <ArticleLayout 
      article={article} 
      author={author} 
      allArticles={journalData.articles} 
    />
  );
}
