<!--test.vue-->
<template>
  <button class="zy-button" @click="handleClick">
    <span>
      <slot>sumit</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "ZyButton", // 这个名字很重要，它就是未来的标签名<xr-test></xr-test>，坑了我一下
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {
      num: 0
    };
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
  //   watch
};
</script>

<style lang="scss" scoped>
.zy-button {
  width: 72px;
  height: 32px;
  margin: 0;
  padding: 0;
  outline: none;
  border: 1px solid transparent;
  border: 0;
  background-color: transparent;
  outline: none;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
