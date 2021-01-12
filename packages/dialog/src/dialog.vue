<!--test.vue-->
<template>
  <div class="zy-dialog__wrapper" v-show="visible">
    <div class="zy-dialog">
      <div class="zy-dialog__header">
        <slot name="title">
          <span class="zy-dialog__title">{{ title }}</span>
        </slot>
        <button class="zy-dialog__title" @click="handleClose">
          <i>X</i>
        </button>
      </div>
      <div class="el-dialog__body" v-if="rendered"><slot></slot></div>

      <div class="zy-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// 弹框组件
// 声明周期
//1.append body
// 设置z-index
// 这是body内容不滚动
// 关闭弹框移除元素
import Popup from "baseSrc/utils/popup/index.js";
export default {
  components: {},
  name: "ZyDialog", // 这个名字很重要，它就是未来的标签名<xr-test></xr-test>，坑了我一下
  mixins: [Popup],
  props: {
    width: String,
    height: String,
    visible: Boolean,
    title: {
      type: String,
      default: ""
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },
    destroyOnClose: Boolean
  },
  data() {
    return {
      closed: false,
      key: 0
    };
  },
  mounted() {
    if (this.visible) {
      this.rendered = true;
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
      // this.open();
    }
  },
  methods: {
    handleClose() {
      this.hide();
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit("update:visible", false);
        this.$emit("close");
        this.closed = true;
      }
    },
    updatePopper() {
      // this.broadcast("ElSelectDropdown", "updatePopper");
      // this.broadcast("ElDropdownMenu", "updatePopper");
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit("open");
        this.$el.addEventListener("scroll", this.updatePopper);
        console.log(val);
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener("scroll", this.updatePopper);
        if (!this.closed) {
          this.$emit("close");
        }
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++;
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.zy-dialog__wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background: #000;
}
.zy-dialog {
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid #ccc;
  z-index: 111;
  background-color: #fff;
  padding: 10px;
  .zy-dialog__header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
