import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from '@/App.vue';

import i18n from '@/locale'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant, i18n);

import '@/styles/default.less';

import { ionicInitialize } from '../../../ionic-initialize';
import { ibizMobileComponentsInitialize } from '../../../ibiz-mobile-components-initialize';
ionicInitialize({ mode: 'ios' });
ibizMobileComponentsInitialize();
import { Lazyload } from 'vant';

Vue.use(Lazyload,{
    preLoad: 1,
    attempt: 1,
    error: 'https://gitee.com/kk_ah/images/raw/master/images/20201126175359.png',
});
import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: "6e350f60986cba316719fdc7bd55d8d3",
    plugin: [
      "AMap.Geocoder",
      "AMap.Geolocation" 
    ],
})
// 模拟数据
if (process.env.NODE_ENV === 'development') {
    require('@/mock');
}

const pathToRegExp = require('path-to-regexp');
import { AppComponents } from '@/app-register';
import { PageComponents } from './page-register';
import { UserComponent } from '@/user-register';
import { PortletComponent } from '@/portlet-register';
import store from '@/store';
import router from './router';
import { Interceptors } from '@/utils';
import { ViewOpenService } from '@/utils/view-open-service/view-open-service';

// 第三方登登录认证获取用户信息
// import { ThirdPartyService } from '@/ibiz-core/third-party-service/ThirdPartyService';
// const thirdPartyAuth = async () => {
//     await ThirdPartyService.getInstance().login();
// };
// thirdPartyAuth();

Vue.config.errorHandler = function (err: any, vm: any, info: any) {
    console.log(err);
}
Vue.config.productionTip = false;
Vue.config.ignoredElements =[/^ion-/, /^ibiz-/];

Vue.use(Vuex);
Vue.use(VueRouter);;

Vue.prototype.$pathToRegExp = pathToRegExp;
Vue.use(AppComponents);
Vue.use(PageComponents);
Vue.use(UserComponent);
Vue.use(PortletComponent);
// 富文本
import 'quill/dist/quill.snow.css'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor);
// 日历
import Calendar from 'v-calendar/lib/components/calendar.umd'
Vue.component('v-calendar', Calendar);
// 手势滑动
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'});
VueTouch.config.press = {
    time: 700
  }
router.beforeEach((to: any, from: any, next: any) => {
    if (to.meta && !to.meta.ignoreAddPage) {
        router.app.$store.commit('addPage', to);
    }
    next();
});

Interceptors.getInstance(router, store);
ViewOpenService.getInstance(router);

new Vue({
    i18n,
    store,
    router,
    render: (h: any) => h(App),
}).$mount('#app');