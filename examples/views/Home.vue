<template>
  <div class="home">
    <xr-test></xr-test>
    <zy-button></zy-button>
    <zy-link type="primary" disabled>连接</zy-link>
    <zy-button @click="click()">点击显示弹框</zy-button>
    <zy-dialog :visible.sync="dialogVisible" v-if="dialogVisible">
      <div>
        这是内容
      </div>
    </zy-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    click() {
      this.dialogVisible = true;
      console.log("");
    }
  }
};
</script>
