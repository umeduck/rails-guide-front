<template>
<h1>New Article</h1>
<form @submit.prevent="sendArticle">
  <div>
    <h3>タイトル</h3>
    <!-- <input type="text" v-model="senderTitle" placeholder="タイトルを入力" required /> -->
     <input type="text" v-model="senderTitle" placeholder="タイトルを入力" />
    <div v-if="errorMessages.title">
      <p v-for="(message) in errorMessages.title">
        タイトル{{ message }}
      </p>
    </div>
  </div>
  <div>
    <h3>本文</h3>
    <!-- <input type="text" v-model="senderBody" placeholder="本文を入力" required /> -->
     <input type="text" v-model="senderBody" placeholder="本文を入力" />
    <div v-if="errorMessages.body">
      <p v-for="(message) in errorMessages.body">
        本文{{ message }}
      </p>
    </div>
  </div>
  <div>
        <button type="submit">送信</button>
  </div>
</form>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// ルーターを取得
const router = useRouter();
// 値取得
const senderTitle = ref('');
const senderBody = ref('');
const errorMessages = ref([])

const sendArticle = async () => {
  try{
    console.log(1)
    await axios.post('http://localhost:3000/articles',{
      title: senderTitle.value,
      body: senderBody.value
    });
    router.push('/articles');
  } catch(error){
    console.log(error)
    errorMessages.value = error.response.data.errors;
  }
}

</script>