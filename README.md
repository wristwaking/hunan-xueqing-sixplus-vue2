# 湖南大学问卷调研chat-6升级版机器人前端源码
湖南大学英语问卷调研chat-6升级版机器人前端源码。基于chat-6机器人重构升级优化。通过vue2搭建前后端分离会话型网站。css兼容手机端机型。使用拟态风格搭建。

链接地址：http://sixplus.xueqing.willwaking.com


## 前端 baseURL
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = "http://sixplus.xueqing.willwaking.com/server"
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
