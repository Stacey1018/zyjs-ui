// 为组件提供 install 方法，供组件对外按需引入
import ZyLink from "./src/link.vue";
ZyLink.install = Vue => {
  Vue.component(ZyLink.name, ZyLink);
};
export default ZyLink;
