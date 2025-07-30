import HomeContent from "@/content/HomeContent";
import { fetchArticles } from "@/services/fetchArticles";

export default async function Home() {
  const articles = await fetchArticles("angular", 6)
  
  return <HomeContent initialArticles={articles} tag={"angular"} />;
}
