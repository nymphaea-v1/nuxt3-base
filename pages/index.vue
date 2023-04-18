<template>
  <c-hello-world model-value="Hello from page/index.vue!" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ({ params }) => {
    console.log('params: ', params)
  }
})
</script>
