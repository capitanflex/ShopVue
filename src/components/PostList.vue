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
  //grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

}
@media (max-width: 1331px) {
  .welcome__posts {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
}

@media (max-width: 880px) {
  .welcome__posts {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}
</style>