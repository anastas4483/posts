<script>
export default {
  methods: {
    onSave() {
      console.log(2345)
    },
  },
}
</script>

<template lang="">
  <div class="post freeSpace">
    <div class="post newPost">
      <textarea
        class="post__title newItem"
        placeholder="Add title"
        rows="2"
        wrap="hard"
        cols="2"
      ></textarea>
      <textarea
        class="post__description newItem"
        placeholder="Add description"
      ></textarea>
      <div class="actions">
        <button @click="onSave" class="button bgGreen">Save</button>
        <button class="button bgRed">Discard</button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.freeSpace {
  background: none;
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
</style>
