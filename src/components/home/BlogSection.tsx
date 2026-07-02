import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BlogCard } from "@/components/ui/BlogCard";
import { homepageData } from "@/data/homepage";
import { MotionWrapper } from "@/components/layout/MotionWrapper";

export function BlogSection() {
  const { blogs } = homepageData;

  return (
    <Section id="blogs" variant="editorial">
      <Container className="flex flex-col gap-16 md:gap-24">
        
        <MotionWrapper animation="slideUp">
          <SectionTitle 
            eyebrow="Knowledge & Insights"
            title="The Science Of Nourishment" 
            align="center" 
          />
        </MotionWrapper>

        {/* Featured Blog Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, idx) => (
            <MotionWrapper key={idx} animation="slideUp" delay={idx * 0.1}>
              <BlogCard 
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                readTime="5 min read"
              />
            </MotionWrapper>
          ))}
        </div>

      </Container>
    </Section>
  );
}
