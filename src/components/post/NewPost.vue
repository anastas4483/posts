<script>
import { mapState } from "vuex"

export default {
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const newPost = {
        title: e.target.title.value,
        body: e.target.description.value,
      }
      this.$store.dispatch("addNewPost", newPost)
      this.$store.commit("setIsAddNewPost")
    },
    onSetStateNewPost() {
      this.$store.commit("setIsAddNewPost")
    },
  },
  computed: mapState(["isAddNewPost"]),
}
</script>

<template lang="">
  <div class="post freeSpace">
    <form class="post newPost" @submit="onSubmit" v-if="isAddNewPost">
      <textarea
        class="post__title newItem"
        placeholder="Add title"
        rows="2"
        wrap="hard"
        cols="2"
        name="title"
      ></textarea>
      <textarea
        class="post__description newItem"
        placeholder="Add description"
        name="description"
      ></textarea>
      <div class="actions">
        <button @click="onSave" type="submit" class="button bgGreen">
          Save
        </button>
        <button class="button bgRed" @click="onSetStateNewPost">Discard</button>
      </div>
    </form>
    <div v-else class="placeholderNewItem" @click="onSetStateNewPost">+</div>
  </div>
</template>

<style lang="css">
.freeSpace {
  border-style: dashed;
  box-shadow: none;
}

.newPost {
  max-height: fit-content;
  position: absolute;
  z-index: 200;
  top: 0px;
}

.newItem {
  border: 1px solid #75757547;
  border-radius: 7px;
  background: none;
  outline: none;
  min-width: 100%;
  max-width: 100%;
  max-height: 140px;
  min-height: 62px;
  padding: 5px;
  margin: 8px 5px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.placeholderNewItem {
  width: 100%;
  height: 100%;
  font-size: 40px;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(95, 95, 95);
  cursor: pointer;
  transition: all ease 0.2s;
  border-radius: 7px;
}

.placeholderNewItem:hover {
  background-color: rgba(255, 255, 255, 0.391);
  color: rgb(140, 140, 140);
}
</style>
