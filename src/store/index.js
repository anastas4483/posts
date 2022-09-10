import { createStore } from "vuex"

export const store = createStore({
  state: {
    favoritePosts: {},
    posts: {},
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
    setPosts(state, posts) {
      if (posts)
        state.posts = posts.reduce((obj, post) => {
          obj[post?.id] = { ...post, isLike: false }
          return obj
        }, {})
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
  },
})
