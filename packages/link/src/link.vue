<!--test.vue-->
<template>
  <a
    :href="href ? null : href"
    class="zy-link"
    :class="[
      'zy-link',
      type ? `zy-link--${type}` : '',
      underline && 'is-underline',
      disabled && 'is-disabled'
    ]"
    @click="handleClick"
  >
    <span>
      <slot>默认连接</slot>
    </span>
  </a>
</template>

<script>
export default {
  name: "ZyLink",
  props: {
    type: {
      type: String,
      default: "default"
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String
  },
  data() {
    return {
      num: 0
    };
  },
  methods: {
    handleClick(evt) {
      if (!this.disabled) {
        this.$emit("click", evt);
      }
    }
  }
  //   watch
};
</script>

<style lang="scss" scoped>
.zy-link {
  text-decoration: none;
  color: inherit;
  position: relative;
}
.is-underline:hover {
  &::after {
    content: "";
    width: 100%;
    border-bottom: 1px solid #ccc;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.zy-link--primary {
  color: blue;
}
.zy-link--success {
  color: green;
}
.zy-link--warning {
  color: red;
}
.is-disabled {
  cursor: no-drop;
}

// .nounderline{
//     a,a:link,a:visited,a:hover,a:active{
//     text-decoration: none;
//     color:inherit;
// }
// }
</style>
