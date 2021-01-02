# zyjs-ui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 开发过程

参考 https://juejin.cn/post/6844903808787546125

 * src目录改为example目录 用来测试组件
 * 新建packages目录 用来写组件
 * 新建vue.config.js 配置路径

 * packages/test 编写测试组件
 * 在main.js 引入组件包，测试组件
 * 打包 配置package.json
 ```
    // target: 默认为构建应用，改为 lib 即可启用构建库模式
    // name: 输出文件名
    // dest: 输出目录，默认为 dist，这里我们改为 lib
    // entry: 入口文件路径
    vue-cli-service build --target lib --name lib [entry]

    "lib": "vue-cli-service build --target lib --name zyjs-ui --dest lib packages/index.js"

 ```
  * npm run lib 生成包目录
  