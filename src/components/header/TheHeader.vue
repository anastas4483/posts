<script>
import HeaderMenu from "@/components/header/HeaderMenu.vue"
import FavoriteList from "@/components/header/FavoriteList.vue"
export default {
  components: { HeaderMenu, FavoriteList },
}
</script>

<template>
  <div class="header">
    <HeaderMenu />
    <FavoriteList />
  </div>
</template>

<style>
.header {
  width: 100%;
  height: 70px;
  background-color: #30909f;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
