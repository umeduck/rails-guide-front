<template>
   <h1>{{ article.title }}</h1>
  <p>{{ article.body }}</p> 

  <ul>
    <li><router-link :to="`${article.id}/edit`">編集リンク</router-link></li>
    <!-- <li>削除リンク</li> -->
  </ul>

  <h2>Comments</h2>
  <div v-for="comment in comments" :key="comment.id">
    <p>
      <strong>Commenter:</strong>
      {{ comment.commenter }}
    </p>

    <p>
      <strong>Comment:</strong>
      {{ comment.body }}
    </p>
  </div>

  <h2>Add a comment:</h2>
  <form @submit.prevent="sendComment">
    <div>
      <input type="text" v-model="senderCommenter" placeholder="投稿者入力" required />
      <div v-if="errorMessages.commenter">
        <p v-for="(message) in errorMessages.commenter">
          コメンター{{ message }}
        </p>
      </div>
    </div>
    <div>
      <input type="text" v-model="senderBody" placeholder="コメント入力" required />
      <div v-if="errorMessages.body">
        <p v-for="(message) in errorMessages.body">
          コメント{{ message }}
        </p>
      </div>
    </div>
    <div>
        <button type="submit">投稿</button>
  </div>
  </form>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// 値取得
const article = ref([]);
const comments = ref([]);

// コメント値取得
const senderCommenter = ref('');
const senderBody = ref('');
const errorMessages = ref([]);


const fetchArticle = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/articles/${route.params.id}`);
    article.value = response.data.article;
    comments.value = response.data.comments;
  } catch (error) {
    console.error(error);
  }
}

const sendComment = async () => {
  try{
    await axios.post(`http://localhost:3000/articles/${route.params.id}/comments`,{
      commenter: senderCommenter.value,
      body: senderBody.value,
      article_id: route.params.id
    });
    location.reload();
  } catch(error) {
    console.error(error);
    errorMessages.value = error.response.data.errors;
  }
}

onMounted(() => {
  fetchArticle();
})
</script>