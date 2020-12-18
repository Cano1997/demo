import { ServiceConstructorBase } from '@/ibiz-core/service/service-constructor-base';

/**
 * 应用实体服务
 *
 * @export
 * @class AppEntityServiceConstructor
 * @extends {ServiceConstructorBase}
 */
export class AppEntityServiceConstructor extends ServiceConstructorBase {

    /**
     * 初始化
     *
     * @protected
     * @memberof AppEntityServiceConstructor
     */
    protected init(): void {
        this.allService.set('syspost', () => import('@/app-core/service/sys-post/sys-post-service'));
        this.allService.set('branch', () => import('@/app-core/service/branch/branch-service'));
        this.allService.set('sysorganization', () => import('@/app-core/service/sys-organization/sys-organization-service'));
        this.allService.set('file', () => import('@/app-core/service/file/file-service'));
        this.allService.set('user', () => import('@/app-core/service/user/user-service'));
        this.allService.set('ibzdaily', () => import('@/app-core/service/ibz-daily/ibz-daily-service'));
        this.allService.set('ibzfavorites', () => import('@/app-core/service/ibz-favorites/ibz-favorites-service'));
        this.allService.set('projectteam', () => import('@/app-core/service/project-team/project-team-service'));
        this.allService.set('build', () => import('@/app-core/service/build/build-service'));
        this.allService.set('task', () => import('@/app-core/service/task/task-service'));
        this.allService.set('taskestimate', () => import('@/app-core/service/task-estimate/task-estimate-service'));
        this.allService.set('ibzdoc', () => import('@/app-core/service/ibz-doc/ibz-doc-service'));
        this.allService.set('systeammember', () => import('@/app-core/service/sys-team-member/sys-team-member-service'));
        this.allService.set('module', () => import('@/app-core/service/module/module-service'));
        this.allService.set('ibzweekly', () => import('@/app-core/service/ibz-weekly/ibz-weekly-service'));
        this.allService.set('product', () => import('@/app-core/service/product/product-service'));
        this.allService.set('dynadashboard', () => import('@/app-core/service/dyna-dashboard/dyna-dashboard-service'));
        this.allService.set('ibzmonthly', () => import('@/app-core/service/ibz-monthly/ibz-monthly-service'));
        this.allService.set('storyspec', () => import('@/app-core/service/story-spec/story-spec-service'));
        this.allService.set('action', () => import('@/app-core/service/action/action-service'));
        this.allService.set('casestep', () => import('@/app-core/service/case-step/case-step-service'));
        this.allService.set('productline', () => import('@/app-core/service/product-line/product-line-service'));
        this.allService.set('sysdepartment', () => import('@/app-core/service/sys-department/sys-department-service'));
        this.allService.set('usercontact', () => import('@/app-core/service/user-contact/user-contact-service'));
        this.allService.set('release', () => import('@/app-core/service/release/release-service'));
        this.allService.set('taskteam', () => import('@/app-core/service/task-team/task-team-service'));
        this.allService.set('productmodule', () => import('@/app-core/service/product-module/product-module-service'));
        this.allService.set('project', () => import('@/app-core/service/project/project-service'));
        this.allService.set('todo', () => import('@/app-core/service/todo/todo-service'));
        this.allService.set('story', () => import('@/app-core/service/story/story-service'));
        this.allService.set('ibzmyterritory', () => import('@/app-core/service/ibz-my-territory/ibz-my-territory-service'));
        this.allService.set('case', () => import('@/app-core/service/case/case-service'));
        this.allService.set('testmodule', () => import('@/app-core/service/test-module/test-module-service'));
        this.allService.set('ibzprojectteam', () => import('@/app-core/service/ibzprojectteam/ibzprojectteam-service'));
        this.allService.set('doclibmodule', () => import('@/app-core/service/doc-lib-module/doc-lib-module-service'));
        this.allService.set('sysupdatefeatures', () => import('@/app-core/service/sys-update-features/sys-update-features-service'));
        this.allService.set('doccontent', () => import('@/app-core/service/doc-content/doc-content-service'));
        this.allService.set('ibzreport', () => import('@/app-core/service/ibz-report/ibz-report-service'));
        this.allService.set('productplan', () => import('@/app-core/service/product-plan/product-plan-service'));
        this.allService.set('ibztaskestimate', () => import('@/app-core/service/ibz-taskestimate/ibz-taskestimate-service'));
        this.allService.set('projectstats', () => import('@/app-core/service/project-stats/project-stats-service'));
        this.allService.set('sysemployee', () => import('@/app-core/service/sys-employee/sys-employee-service'));
        this.allService.set('ibztaskteam', () => import('@/app-core/service/ibztaskteam/ibztaskteam-service'));
        this.allService.set('doclib', () => import('@/app-core/service/doc-lib/doc-lib-service'));
        this.allService.set('sysupdatelog', () => import('@/app-core/service/sys-update-log/sys-update-log-service'));
        this.allService.set('doc', () => import('@/app-core/service/doc/doc-service'));
        this.allService.set('systeam', () => import('@/app-core/service/sys-team/sys-team-service'));
        this.allService.set('bug', () => import('@/app-core/service/bug/bug-service'));
        this.allService.set('projectmodule', () => import('@/app-core/service/project-module/project-module-service'));
        this.allService.set('ibzreportly', () => import('@/app-core/service/ibz-reportly/ibz-reportly-service'));
        this.allService.set('productstats', () => import('@/app-core/service/product-stats/product-stats-service'));
        this.allService.set('testtask', () => import('@/app-core/service/test-task/test-task-service'));
        this.allService.set('testsuite', () => import('@/app-core/service/test-suite/test-suite-service'));
    }

}

/**
 * 应用实体服务构造器
 */
export const appEntityServiceConstructor: AppEntityServiceConstructor = new AppEntityServiceConstructor();