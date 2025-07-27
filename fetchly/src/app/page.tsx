import ArticleGrid from "@/components/ArticleGrid";
import HeroArticle from "@/components/HeroArticle";
import BlockInfo from "@/components/BlockInfo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroArticle />
      <BlockInfo />
      <ArticleGrid />
    </>
  );
}
