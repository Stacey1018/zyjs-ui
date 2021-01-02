<!--test.vue-->
<template>
  <div class="xr-test" @click="handleClick">{{ num }}</div>
</template>

<script>
export default {
  name: "XrTest", // 这个名字很重要，它就是未来的标签名<xr-test></xr-test>，坑了我一下
  data() {
    return {
      num: 0
    };
  },
  methods: {
    handleClick() {
      this.num++;
    }
  }
};
</script>

<style lang="scss" scoped>
.xr-test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #24292e;
  color: white;
}
</style>

作者：尤水就下 链接：https://juejin.cn/post/6844903808787546125 来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
