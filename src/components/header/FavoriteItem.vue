<script>
import TrashBinIcon from "@/assets/svgs/TrashBinIcon.vue"
export default {
  props: ["post"],
  components: { TrashBinIcon },
}
</script>
<template>
  <div class="favoriteItem">
    <div>
      <h2 class="favoriteItem__title">{{ post.title }}</h2>
      <p class="favoriteItem__description">
        {{ post.body }}
      </p>
    </div>
    <button
      class="favoriteItem__removeBurron"
      @click="() => this.$store.commit('deleteFavoritePost', post.id)"
    >
      <TrashBinIcon :width="20" :height="30" />
    </button>
  </div>
</template>

<style scoped>
.favoriteItem {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  background: #d6e6eb;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
}
.favoriteItem__title {
  color: #2b4a4c;
  text-transform: capitalize;
  text-indent: 15px;
  font-size: 20px;
}
.favoriteItem__description {
  color: #264c4fd4;
  font-size: 15px;
  padding: 5px;
}
.favoriteItem__removeBurron {
  border: none;
  background: none;
  cursor: pointer;
  transition: all ease 0.3s;
}
.favoriteItem__removeBurron:hover {
  transform: scale(1.15);
}
</style>
