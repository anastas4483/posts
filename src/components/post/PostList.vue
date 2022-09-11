<script>
import PostItem from "./PostItem.vue"
import NewPost from "./NewPost.vue"
export default {
  props: ["posts"],
  components: {
    PostItem,
    NewPost,
  },
}
</script>

<template>
  <div class="list">
    <NewPost />
    <PostItem v-for="post of this.posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}
</style>
