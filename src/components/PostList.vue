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
  <CardItem v-for="i of this.posts" :key="i.id" :post="i" />
</template>
