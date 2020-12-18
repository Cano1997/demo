import { Http, Util, Verify, Loading } from '@/ibiz-core/utils';
import { AppDrawer, AppModal, ViewTool, Notice } from '@/utils';
import { IonPage } from './components/ion-page/ion-page';
import { AppEmbedView } from './components/app-embed-view/app-embed-view';

import AppKeepAlive from './components/app-keep-alive/app-keep-alive.vue';

/**
 * Vue插件
 */
export const AppComponents = {
    install(v: any, opt: any) {
        v.prototype.$http = Http.getInstance();
        v.prototype.$util = Util;
        v.prototype.$verify = Verify;
        v.prototype.$appdrawer = AppDrawer.getInstance();
        v.prototype.$appmodal = AppModal.getInstance();
        v.prototype.$viewTool = ViewTool.getInstance();
        v.prototype.$notice = Notice.getInstance();
        v.prototype.$apploading = Loading;
        v.component('ion-page', IonPage);
        v.component('embed-view', AppEmbedView);
        v.component('app-list-menu', () => import('@/components/app-list-menu/app-list-menu.vue'));
        v.component('app-slider-menu', () => import('@/components/app-slider-menu/app-slider-menu.vue'));
        v.component('app-icon-menu', () => import('@/components/app-icon-menu/app-icon-menu.vue'));
        v.component('app-radio', () => import('@/components/app-radio/app-radio.vue'));
        v.component('app-multiple-select', () => import('@/components/app-multiple-select/app-multiple-select.vue'));
        v.component('app-form-druipart', () => import('@/components/app-form-druipart/app-form-druipart.vue'));
        v.component('app-card-list', () => import('@/components/app-card-list/app-card-list.vue'));
        v.component('app-icon-list', () => import('@/components/app-icon-list/app-icon-list.vue'));
        v.component('app-pic-menu', () => import('@/components/app-pic-menu/app-pic-menu.vue'));
        v.component('app-picdown-menu', () => import('@/components/app-picdown-menu/app-picdown-menu.vue'));
        v.component('app-picright-menu', () => import('@/components/app-picright-menu/app-picright-menu.vue'));
        v.component('app-pictop-menu', () => import('@/components/app-pictop-menu/app-pictop-menu.vue'));
        v.component('app-point-list', () => import('@/components/app-point-list/app-point-list.vue'));
        v.component('app-round-list', () => import('@/components/app-round-list/app-round-list.vue'));
        v.component('app-status-list', () => import('@/components/app-status-list/app-status-list.vue'));
        v.component('app-table-list', () => import('@/components/app-table-list/app-table-list.vue'));
        v.component('app-van-menu', () => import('@/components/app-van-menu/app-van-menu.vue'));

        v.component('app-viewpager', () => import('@/components/app-viewpager/app-viewpager.vue'));
        v.component('app-notice-bar', () => import('@/components/app-notice-bar/app-notice-bar.vue'));
        v.component('app-twotitle-list', () => import('@/components/app-twotitle-list/app-twotitle-list.vue'));
        v.component('app-time-list', () => import('@/components/app-time-list/app-time-list.vue'));
        v.component('app-form-item', () => import('@/components/app-form-item/app-form-item.vue'));
        v.component('app-form-group', () => import('@/components/app-form-group/app-form-group.vue'));
        v.component('app-list-default', () => import('@/components/app-list-default/app-list-default.vue'));
        v.component('app-list-swipe', () => import('@/components/app-list-swipe/app-list-swipe.vue'));
        // 日历组件
        v.component('app-calendar',() => import('@/components/app-calendar/app-calendar.vue'));
        v.component('app-vcalendar',() => import('@/components/app-vcalendar/app-vcalendar.vue'));
        // 搜索表单2
        v.component('app-form-item2', () => import('@/components/app-form-item2/app-form-item2.vue'));
        // 搜索表单2编辑器
        v.component('app-search-editor', () => import('@/components/app-search-editor/app-search-editor.vue'));

        // 编辑器 BEGIN
        // 评分器
        v.component('app-mob-rate', () => import('@/components/editor/app-mob-rate/app-mob-rate.vue'));
        // 下拉视图
        v.component('app-mob-select-drop-down', () => import('@/components/editor/app-mob-select-drop-down/app-mob-select-drop-down.vue'));
        // 多行文本
        v.component('app-mob-textarea',() => import('./components/editor/app-mob-textarea/app-mob-textarea.vue'));
        // 图片选择
        v.component('app-mob-picture', () => import('@/components/editor/app-mob-picture/app-mob-picture.vue'));
        // 下拉列表 （多选）
        v.component('app-mob-check-list', () => import('@/components/editor/app-mob-check-list/app-mob-check-list.vue'));
        // 文件上传
        v.component('app-mob-file-upload', () => import('@/components/editor/app-mob-file-upload/app-mob-file-upload.vue'));
        // 开关
        v.component('app-mob-switch', () => import('@/components/editor/app-mob-switch/app-mob-switch.vue'));
        // 滑动输入条
        v.component('app-mob-slider', () => import('@/components/editor/app-mob-slider/app-mob-slider.vue'));        
        //单选框
        v.component('app-mob-radio-list', () => import('@/components/editor/app-mob-radio-list/app-mob-radio-list.vue'));   
        //下拉单选
        v.component('app-mob-dropdown-list', () => import('@/components/editor/app-mob-dropdown-list/app-mob-dropdown-list.vue')); 
        //下拉单选
        v.component('app-mob-mpicker', () => import('@/components/editor/app-mob-mpicker/app-mob-mpicker.vue'));  
        //span
        v.component('app-mob-span', () => import('@/components/editor/app-mob-span/app-mob-span.vue'));   
        //录音 
        v.component('app-mob-recorder', () => import('@/components/editor/app-mob-recorder/app-mob-recorder.vue'));  
        // 工作流审批意见控件
        v.component('app-wf-approval',() => import('@/components/editor/app-wf-approval/app-wf-approval.vue'));      
        // 数据选择多选
        v.component('app-mob-picker', () => import('@/components/editor/app-mob-picker/app-mob-picker.vue'));       
        // 下拉选择
        v.component('app-mob-select', () => import('@/components/editor/app-mob-select/app-mob-select.vue'));
        // 时间选择器
        v.component('app-mob-datetime-picker', () => import('@/components/editor/app-mob-datetime-picker/app-mob-datetime-picker.vue'));
        // 输入框
        v.component('app-mob-input', () => import('@/components/editor/app-mob-input/app-mob-input.vue'));
        // 步进器
        v.component('app-mob-stepper', () => import('@/components/editor/app-mob-stepper/app-mob-stepper.vue'));
        // 富文本（模态）
        v.component('app-rich-text',() => import('@/components/editor/app-rich-text/app-rich-text.vue'));
        // 富文本项
        v.component('app-mob-rich-text-editor',() => import('@/components/editor/app-mob-rich-text-editor/app-mob-rich-text-editor.vue'));
        // 下拉多选（带搜索）
        v.component('app-mob-check-list-search',() => import('@/components/editor/app-mob-check-list-search/app-mob-check-list-search.vue'));
        // 编辑器 END

        // 菜单样式 BEGIN
        // 图标视图
        v.component('app-mob-menu-ionic-view', () => import('@/components/app-mob-menu-ionic-view/app-mob-menu-ionic-view.vue'));
        // 列表视图
        v.component('app-mob-menu-list-view', () => import('@/components/app-mob-menu-list-view/app-mob-menu-list-view.vue'));
        // 图片滑动视图
        v.component('app-mob-menu-swiper-view', () => import('@/components/app-mob-menu-swiper-view/app-mob-menu-swiper-view.vue'));
        //快速分组组件
        v.component('app-van-select', () => import('@/components/app-van-select/app-van-select.vue'));   
        // 默认样式视图
        v.component('app-mob-menu-default-view', () => import('@/components/app-mob-menu-default-view/app-mob-menu-default-view.vue'));
        // 菜单样式 END

        //界面行为操作栏
        v.component('app-actionbar',() => import('@/components/app-actionbar/app-actionbar.vue'));

        // 路由缓存
        v.component('app-keep-alive', AppKeepAlive);
        v.component('app-list-index',() => import('@/components/app-list-index/app-list-index.vue'));
        // 列表项插件
        v.component('app-list-index-text',() => import('@/components/app-list-index-text/app-list-index-text.vue'));
        // 多数据快速分组组件
        v.component('app-quick-group-tab',() => import('@/components/app-quick-group-tab/app-quick-group-tab.vue'));
        // 搜索历史组件
        v.component('app-search-history',() => import('@/components/app-search-history/app-search-history.vue'));
        // 更新日志
        v.component('app-update-log',() => import('@/ibiz-core/components/app-update-log/app-update-log.vue'));
        // 风格切换组件
        v.component('app-mob-select-changeStyle',() => import('@/ibiz-core/components/app-mob-select-changeStyle/app-mob-select-changeStyle.vue'));
        // setting组件
        v.component('app-setting',() => import('@/ibiz-core/components/app-setting/app-setting.vue'));
        // 定制组件
        v.component('app-customize',() => import('@/ibiz-core/components/app-customize/app-customize.vue'));
        // 主题切换组件
        v.component('app-mob-select-theme',() => import('@/ibiz-core/components/app-mob-select-theme/app-mob-select-theme.vue'));
        // 锚点列表插件
        v.component('app-anchor-list',() => import('@/components/app-anchor-list/app-anchor-list.vue'));
        // 侧滑菜单组件
        v.component('app-mob-menu-sideslip-view',() => import('@/components/app-mob-menu-sideslip-view/app-mob-menu-sideslip-view.vue'));
        // 动作面板
        v.component('app-mob-actionsheet',() => import('@/components/app-mob-actionsheet/app-mob-actionsheet.vue'));
        // 地图定位
        v.component('app-mob-map',() => import('@/components/app-mob-map/app-mob-map.vue'));
        // 树已选择列表
        v.component('app-select-tree-list',() => import('@/components/app-select-tree-list/app-select-tree-list.vue'));
        // 上下文菜单
        v.component('app-mob-context-menu',() => import('@/components/app-mob-context-menu/app-mob-context-menu.vue'));
        //单位选择器
        v.component('app-org-select',() => import('@/components/app-org-select/app-org-select.vue'));
        //图片截取
        v.component('app-img-cropper',() => import('@/components/app-img-cropper/app-img-cropper.vue'));
    },
};