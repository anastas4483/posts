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
.button {
  border-radius: 7px;
  border: none;
  padding: 3px 15px;
  font-size: 18px;
  box-shadow: none;
  color: #fff;
  transition: box-shadow ease 0.3s, color ease 0.3s;
  cursor: pointer;
}
.bgGreen {
  background-color: #25af29;
}
.bgRed {
  background-color: #af0c0c;
}
.actions .button:hover {
  box-shadow: 2px 2px 0px #a5a5a5;
}
</style>
