export const UserComponent = {
    install(v: any, opt: any) {
        // 历史记录插件
        v.component('app-history-list',() => import('@/ibiz-core/components/app-history-list/app-history-list.vue'));
        // 富文本编辑器（show）
        v.component('app-mob-rich-text-editor-pms',() => import('@/ibiz-core/components/app-mob-rich-text-editor-pms/app-mob-rich-text-editor-pms.vue'));
        // 富文本编辑器（edit）
        v.component('app-rich-text-pms',() => import('@/ibiz-core/components/app-rich-text-pms/app-rich-text-pms.vue'));
        // 文件列表插件
        v.component('app-pms-upload-list',() => import('@/ibiz-core/components/app-pms-upload-list/app-pms-upload-list.vue'));
        // 更新日志详情列表
        v.component('app-pms-update-log-info',() => import('@/ibiz-core/components/app-pms-update-log-info/app-pms-update-log-info.vue'));
        // 更新日志列表组件
        v.component('app-update-log-list',() => import('@/ibiz-core/components/app-update-log-list/app-update-log-list.vue'));
        // 文档树
        v.component('app-tree-word',() => import('@/ibiz-core/components/app-tree-word/app-tree-word.vue'));
        // 汇报列表组件
        v.component('app-report-list',() => import('@/ibiz-core/components/app-report-list/app-report-list.vue'));
        // 全部动态列表组件
        v.component('app-trends-list',() => import('@/ibiz-core/components/app-trends-list/app-trends-list.vue'));
        // 任务列表组件
        v.component('app-task-list',() => import('@/ibiz-core/components/app-task-list/app-task-list.vue'));
        // 需求列表组件
        v.component('app-story-list',() => import('@/ibiz-core/components/app-story-list/app-story-list.vue'));
        //bug列表组件
        v.component('app-bug-list',() => import('@/ibiz-core/components/app-bug-list/app-bug-list.vue'));
        // 项目团队列表组件
        v.component('app-projectteam-list',() => import('@/ibiz-core/components/app-projectteam-list/app-projectteam-list.vue'));
        // 测试用例列表组件
        v.component('app-case-list',() => import('@/ibiz-core/components/app-case-list/app-case-list.vue'));
        // 用户头
        v.component('app-user-header',() => import('@/ibiz-core/components/user-header/user-header.vue'));
        // 自定义图片上传组件
        v.component('app-mob-picture-pms',() => import('@/ibiz-core/components/app-mob-picture-pms/app-mob-picture-pms.vue'));
        // 任务团队列表组件
        v.component('app-taskteam-list',() => import('@/ibiz-core/components/app-taskteam-list/app-taskteam-list.vue'));
    }
};