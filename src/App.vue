<script>
import PostList from "./components/PostList.vue"
import TheHeader from "./components/header/TheHeader.vue"

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
    PostList,
    TheHeader,
  },
}
</script>

<template>
  <div id="app">
    <TheHeader />
    <PostList :posts="posts" />
  </div>
</template>

<style>
#app {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
