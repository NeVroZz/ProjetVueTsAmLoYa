<template>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
      <div>
        <strong>Tags:</strong>
        <span v-for="tag in article.tagList" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getArticleBySlug } from '../api/articles';
  
  export default defineComponent({
    setup() {
      const route = useRoute();
      const article = ref(null);
  
      onMounted(async () => {
        const slug = route.params.slug as string;
        const data = await getArticleBySlug(slug);
        article.value = data.article;
      });
  
      return { article };
    },
  });
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  span {
    background: #f0f0f0;
    margin: 0 5px;
    padding: 2px 8px;
    border-radius: 4px;
  }
  </style>
  