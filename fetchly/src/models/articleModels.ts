type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  tag_list: string[];
  published_at: Date;
  user: {
    name: string;
    profile_image: string;
  };
};

interface ArticlesContextProps {
  articles: Article[];
  loading: boolean;
  error: string | null;
  activeTag: string | null;
  tags: string[];
  fetchArticlesByTag: (tag: string, pageSize: number) => void;
}