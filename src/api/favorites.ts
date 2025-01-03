import api from './axiosInstance';

export const favoriteArticle = async (slug: string) => {
  const response = await api.post(`/articles/${slug}/favorite`);
  return response.data;
};

export const unfavoriteArticle = async (slug: string) => {
  const response = await api.delete(`/articles/${slug}/favorite`);
  return response.data;
};
