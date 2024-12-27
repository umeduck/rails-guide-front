<template>
  <div>
    <h1>ApiTest</h1>
    <button @click="test">ApiTest</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 状態を定義
const message = ref('')

// 非同期関数を定義
const test = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/test')
    const data = await response.json()
    message.value = data.message
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
</script>