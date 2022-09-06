<script>
export default {
  props: {
    post: Object,
    i: Number,
  },
}
</script>

<template>
  <div class="card">
    <h1 class="title">{{ post.title }}</h1>

    <p class="description">{{ post.body }}</p>

    <button class="btnLike">Like</button>
  </div>
</template>

<style>
.card {
  display: flex;
  border: 2px inset #0eaabd;
  background-color: #c8e8e7;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  max-width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 3px 0px #00222e42;
}
.title {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(2, 87, 133);
  text-align: center;
  font-size: 25px;
  cursor: pointer;
}

.title::first-letter {
  text-transform: uppercase;
}
.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.btnLike {
  border-radius: 7px;
  border: none;
  background-color: #0eaabd;
  padding: 3px 15px;
  font-size: 18px;
  box-shadow: none;
  color: #fff;

  transition: box-shadow ease 0.3s, color ease 0.3s;
  cursor: pointer;
}
.btnLike:hover {
  box-shadow: 4px 3px 0px #01536e;
  color: #0a3e4f;
}
.btnLike:active {
  background-color: #fff;
  color: #0a3e4f;
}
</style>
