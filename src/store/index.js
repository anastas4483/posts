import { createStore } from "vuex"

export const store = createStore({
  state: {
    favoritePosts: {},
    posts: {},
    isAddNewPost: false,
  },
  mutations: {
    setIsLikeOfPost({ posts }, postId) {
      posts[postId].isLike = !posts[postId].isLike
    },
    setFavoritePosts({ favoritePosts }, newPost) {
      if (newPost.isLike) favoritePosts[newPost.id] = newPost
      else delete favoritePosts[newPost.id]
    },
    deleteFavoritePost({ favoritePosts, posts }, postId) {
      delete favoritePosts[postId]
      posts[postId].isLike = false
    },
    setPosts(state, fetchPosts) {
      if (fetchPosts)
        state.posts = fetchPosts.reduce((obj, post) => {
          obj[post?.id] = { ...post, isLike: false }
          return obj
        }, {})
    },
    setNewPost({ posts }, post) {
      const id = Object.keys(posts).length + 1
      posts[id] = { ...post, id }
    },
    setIsAddNewPost(state) {
      state.isAddNewPost = !state.isAddNewPost
    },
  },
  actions: {
    async getPosts({ commit }) {
      const postsFetched = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      )
      postsFetched.json().then((response) => {
        commit("setPosts", response)
      })
    },
    updateFavoritePosts({ commit }, post) {
      commit("setIsLikeOfPost", post.id)
      commit("setFavoritePosts", post)
    },
    async addNewPost({ commit }, newPost) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          commit("setNewPost", json)
        })
    },
  },
})
