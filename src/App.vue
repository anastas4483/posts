<template>
  <div id="app">
    <PostItem v-for="i of this.posts" :key="i.id" :post="i" />
  </div>
</template>

<script>
import PostItem from "./components/PostItem.vue"

export default {
  name: "App",
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async getPosts() {
      const postsFetched = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      )
      // postsFetched.then((response) => (this.posts = response));
      postsFetched.json().then((response) => (this.posts = response))
    },
  },
  mounted() {
    this.getPosts()
  },
  components: {
    PostItem,
  },
}
</script>

<style>
#app {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
