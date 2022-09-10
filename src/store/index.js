import { createStore } from "vuex"

export const store = createStore({
  state: {
    favoritePosts: {},
    posts: [],
  },
  mutations: {
    updateListPosts(state, newPost) {
      if (state.favoritePosts[newPost.id])
        delete state.favoritePosts[newPost.id]
      else state.favoritePosts[newPost.id] = newPost
    },
    setPosts(state, posts) {
      state.posts = posts
    },
  },
  actions: {
    async getPosts({ commit }) {
      const postsFetched = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      )
      postsFetched.json().then((response) => commit("setPosts", response))
    },
  },
})
