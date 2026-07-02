import { PageContainer } from '@/components/layout/PageContainer';
import { SectionContainer } from '@/components/layout/SectionContainer';

export default function Page() {
  return (
    <PageContainer className="pt-20">
      <SectionContainer className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground capitalize">
          contact
        </h1>
      </SectionContainer>
    </PageContainer>
  );
}
