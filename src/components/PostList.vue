<script>
import CardItem from "./CardItem.vue"
export default {
  props: ["posts"],
  components: {
    CardItem,
  },
}
</script>

<template>
  <div class="list">
    <CardItem v-for="i of this.posts" :key="i.id" :post="i" />
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
