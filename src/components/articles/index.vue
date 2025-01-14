<template>
<h1>Articles</h1>
<ul>
    <li v-for="article in articles" :key="article.id">
       <router-link :to="`articles/${article.id}`">{{ article.title }}</router-link>
    </li>
</ul>
<router-link to="articles/new">記事作成</router-link>
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