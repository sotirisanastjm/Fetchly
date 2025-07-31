export async function fetchArticles(tag: string, pageSize: number = 6) {
  const res = await fetch(`https://dev.to/api/articles?tag=${encodeURIComponent(tag)}&per_page=${pageSize}`, {
    next: {
      revalidate: 600,
      tags: [`articles-${tag.toLowerCase()}`],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
}
