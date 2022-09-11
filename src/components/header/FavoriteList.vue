<script>
import FavoriteListIcon from "@/assets/svgs/FavoriteListIcon.vue"
import FavoriteItem from "./FavoriteItem.vue"
export default {
  components: { FavoriteListIcon, FavoriteItem },
  data() {
    return {
      isShow: false,
    }
  },
  computed: {
    favoritePosts() {
      return this.$store.state.favoritePosts
    },
  },
  methods: {
    onMouseEnter() {
      this.isShow = true
    },
    onMouseLeave() {
      this.isShow = false
    },
  },
}
</script>

<template>
  <div class="wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <span class="openListButton" :class="{ activeButton: isShow }">
      <FavoriteListIcon :width="30" :height="30" />
    </span>
    <div class="list" :class="{ show: isShow }">
      <FavoriteItem v-for="post in favoritePosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<style scoped>
.show {
  height: 444px !important;
}
.openListButton {
  position: absolute;
  right: 65px;
  top: 31px;
  cursor: pointer;
  transition: all ease 0.2s;
}

.activeButton {
  padding: 5px;
  border-radius: 11px;
  background-color: #b74a4a;
  right: 60px;
  top: 22px;
  padding-bottom: 1px;
}

.list {
  transition: height ease 0.5s;
  position: absolute;
  width: 560px;
  height: 0;
  top: 61px;
  right: 0px;
  background-color: #ffffffba;
  border-radius: 7px;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 20px 3px #ffffff96;
  overflow-y: auto;
  z-index: 500;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
</style>
