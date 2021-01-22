<!--test.vue-->
<template>
  <input @input="onChange" />
</template>

<script>
// 双向绑定
// change监听
//
export default {
  name: "ZyInput",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
