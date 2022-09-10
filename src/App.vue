<script lang="js">
import { mapActions } from "vuex";
import TheHeader from "@/components/header/TheHeader.vue";
import PostsList from "@/components/post/PostList.vue";

export default {
  name: "App",
  methods: mapActions(['getPosts']),
  mounted() {
    this.getPosts()
  },
  computed:{
    posts(){
      return this.$store.state.posts
    }
  },
  components: {
    PostsList,
    TheHeader,
  },
};
</script>

<template>
  <TheHeader />
  <PostsList :posts="posts" />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>
