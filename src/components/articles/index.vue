<template>
<h1>Articles</h1>
<ul>
    <li v-for="article in articles" :key="article.id">
      <!-- 記事タイトル(詳細リンク付き) -->
       {{ article.title }}
    </li>
</ul>
<!-- 記事作成リンク -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const articles = ref([]);

const fetchArticles = async () => {
  try {
    const response = await axios.get('http://localhost:3000/articles');
    articles.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchArticles();
})
</script>