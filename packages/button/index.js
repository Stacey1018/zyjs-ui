// 为组件提供 install 方法，供组件对外按需引入
import ZyButton from "./src/button.vue";
ZyButton.install = Vue => {
  Vue.component(ZyButton.name, ZyButton);
};
export default ZyButton;
