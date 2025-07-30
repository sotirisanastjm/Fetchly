export async function fetchArticles(tag: string, pageSize: number) {
  const res = await fetch(`https://dev.to/api/articles?tag=${encodeURIComponent(tag.toLowerCase())}&per_page=${pageSize}`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
}
