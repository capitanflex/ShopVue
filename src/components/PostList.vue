<template>
  <div class="welcome__posts posts">

      <Post
          :key='post.id'
          v-for="post in posts"
      >
        {{ post.title }}
      </Post>
  </div>
</template>

<script setup>
  import Post from "@/components/UI/Post.vue";
  import {PostService} from "@/services/PostService";

  const posts =  await PostService.fetchPosts();
</script>

<style lang="scss" scoped>
.welcome__posts{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

}
</style>