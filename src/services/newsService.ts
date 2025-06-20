import api from './api';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
}

export const newsService = {
  // Get all news articles
  getAllNews: async () => {
    const response = await api.get<NewsItem[]>('/news');
    return response.data;
  },

  // Get a single news article by ID
  getNewsById: async (id: number) => {
    const response = await api.get<NewsItem>(`/news/${id}`);
    return response.data;
  },

  // Create a new news article
  createNews: async (newsData: Omit<NewsItem, 'id' | 'created_at'>) => {
    const response = await api.post<NewsItem>('/news', newsData);
    return response.data;
  },

  // Update a news article
  updateNews: async (id: number, newsData: Partial<NewsItem>) => {
    const response = await api.put<NewsItem>(`/news/${id}`, newsData);
    return response.data;
  },

  // Delete a news article
  deleteNews: async (id: number) => {
    await api.delete(`/news/${id}`);
  }
}; 