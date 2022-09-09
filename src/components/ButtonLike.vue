<script>
import HeartEmptyIcon from "@/assets/svgs/HeartEmptyIcon.vue"
import HeartFullIcon from "@/assets/svgs/HeartFullIcon.vue"
export default {
  props: ["onClickLike", "isLike"],
  computed: {},
  components: { HeartEmptyIcon, HeartFullIcon },
}
</script>

<template>
  <button class="btnLike" @click="onClickLike">
    Like
    <span class="heart">
      <HeartFullIcon v-if="isLike" :width="15" :height="15" />
      <HeartEmptyIcon v-else :width="15" :height="15" />
    </span>
  </button>
</template>

<style>
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
}
.btnLike:active {
  background-color: #00acbf5e;
  color: #0a3e4f;
}

.heart {
  width: 15px;
  height: 15px;
  transition: all ease 0.3s;
}
button:hover .heart {
  transition: filter ease 0.3s;
  transform: scale(1.3, 1.2);
  transition: all ease 0.3s;
}
button:active .heart {
  transition: filter ease 0.3s;

  filter: invert(0);
}
</style>
