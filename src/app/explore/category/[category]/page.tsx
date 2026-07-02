import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { journalData } from '@/data/journal/data';
import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { NoiseTexture } from '@/components/shared/NoiseTexture';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return Object.keys(journalData.categories).map((cat) => ({
    category: cat,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = journalData.categories[params.category];
  if (!category) return { title: 'Category Not Found' };
  return { title: `${category.title} | VNLS Journal` };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = journalData.categories[params.category];
  if (!category) notFound();

  const articles = journalData.articles.filter(a => a.categoryId === category.id);

  return (
    <PageContainer className="bg-background relative">
      <NoiseTexture className="fixed inset-0 z-0" />
      
      <Section className="pt-32 pb-24 relative z-10 min-h-[70vh]">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Journal Category</span>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground font-medium">{category.title}</h1>
            <p className="text-xl text-foreground/60 font-light">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
            {articles.map(article => (
              <Link 
                key={article.slug} 
                href={`/explore/${article.slug}`}
                className="group flex flex-col p-8 md:p-10 rounded-3xl border border-border/30 hover:border-accent/40 glass-surface hover:bg-accent/5 transition-all duration-500 h-full relative overflow-hidden"
              >
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  <span className="text-muted-foreground">{article.readingTimeMinutes} Min Read</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-base text-foreground/60 font-light leading-relaxed mb-8 line-clamp-3">
                  {article.excerpt}
                </p>
              </Link>
            ))}
            {articles.length === 0 && (
               <div className="col-span-full p-12 text-center text-foreground/50 border border-border/20 border-dashed rounded-3xl">
                 Publications currently in peer review.
               </div>
            )}
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
}
