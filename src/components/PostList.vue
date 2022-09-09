<script>
import PostItem from "./PostItem.vue"
export default {
  props: ["posts"],
  components: {
    PostItem,
  },
}
</script>

<template>
  <div class="list">
    <PostItem v-for="i of this.posts" :key="i.id" :post="i" />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
