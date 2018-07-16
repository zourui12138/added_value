// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import '../theme/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 滚动插件指令之每次加载都回到页面顶部
Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
