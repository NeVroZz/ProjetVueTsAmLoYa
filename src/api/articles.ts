import api from './axiosInstance';

export const getArticles = async (limit: number = 20, offset: number = 0) => {
  const response = await api.get(`/articles?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const getArticleBySlug = async (slug: string) => {
  const response = await api.get(`/articles/${slug}`);
  return response.data;
};
