const STORAGE_KEY = 'Articles';

export const storageService = {

    getSavedArticles(): Article[] {
        if (typeof window === 'undefined') return [];
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    },

    saveArticle(article: Article): void {
        const saved = storageService.getSavedArticles();
        if (!saved.some((item) => item.id === article.id)) {
            saved.push(article);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        }
    },

    isArticleSaved(id: number): boolean {
        return storageService.getSavedArticles().some((item) => item.id === id);
    },

    deleteArticle(id: number): void {
        const saved = storageService.getSavedArticles();
        const updated = saved.filter((item) => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    },

    clearAllArticles(): void {
        localStorage.removeItem(STORAGE_KEY);
    }

};
