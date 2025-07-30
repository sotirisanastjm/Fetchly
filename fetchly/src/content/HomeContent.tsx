'use client';

import ArticleGrid from "@/components/ArticleGrid";
import BlockInfo from "@/components/BlockInfo";
import HeroArticle from "@/components/HeroArticle";
import { ArticlesProvider } from "@/context/ArticleContext";

export default function HomeContent({ initialArticles, tag }: { initialArticles: any, tag: string }) {
  return (
    <ArticlesProvider initialArticles={initialArticles} tag={tag}>
      <HeroArticle />
      <BlockInfo />
      <ArticleGrid />
    </ArticlesProvider>
  );
}
