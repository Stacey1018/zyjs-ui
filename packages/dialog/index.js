// 为组件提供 install 方法，供组件对外按需引入
import ZyDialog from "./src/dialog.vue";
ZyDialog.install = Vue => {
  Vue.component(ZyDialog.name, ZyDialog);
};
export default ZyDialog;
