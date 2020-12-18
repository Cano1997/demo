import { ServiceConstructorBase } from '@/ibiz-core/service/service-constructor-base';
/**
 * 实体权限服务注册中心
 *
 * @export
 * @class AuthServiceConstructor
 */
export class AuthServiceConstructor extends ServiceConstructorBase {

    /**
     * 初始化
     *
     * @protected
     * @memberof AuthServiceConstructor
     */
    protected init(): void {
        this.allService.set('syspost', () => import('@/app-core/auth-service/sys-post/sys-post-auth-service'));
        this.allService.set('branch', () => import('@/app-core/auth-service/branch/branch-auth-service'));
        this.allService.set('sysorganization', () => import('@/app-core/auth-service/sys-organization/sys-organization-auth-service'));
        this.allService.set('file', () => import('@/app-core/auth-service/file/file-auth-service'));
        this.allService.set('user', () => import('@/app-core/auth-service/user/user-auth-service'));
        this.allService.set('ibzdaily', () => import('@/app-core/auth-service/ibz-daily/ibz-daily-auth-service'));
        this.allService.set('ibzfavorites', () => import('@/app-core/auth-service/ibz-favorites/ibz-favorites-auth-service'));
        this.allService.set('projectteam', () => import('@/app-core/auth-service/project-team/project-team-auth-service'));
        this.allService.set('build', () => import('@/app-core/auth-service/build/build-auth-service'));
        this.allService.set('task', () => import('@/app-core/auth-service/task/task-auth-service'));
        this.allService.set('taskestimate', () => import('@/app-core/auth-service/task-estimate/task-estimate-auth-service'));
        this.allService.set('ibzdoc', () => import('@/app-core/auth-service/ibz-doc/ibz-doc-auth-service'));
        this.allService.set('systeammember', () => import('@/app-core/auth-service/sys-team-member/sys-team-member-auth-service'));
        this.allService.set('module', () => import('@/app-core/auth-service/module/module-auth-service'));
        this.allService.set('ibzweekly', () => import('@/app-core/auth-service/ibz-weekly/ibz-weekly-auth-service'));
        this.allService.set('product', () => import('@/app-core/auth-service/product/product-auth-service'));
        this.allService.set('dynadashboard', () => import('@/app-core/auth-service/dyna-dashboard/dyna-dashboard-auth-service'));
        this.allService.set('ibzmonthly', () => import('@/app-core/auth-service/ibz-monthly/ibz-monthly-auth-service'));
        this.allService.set('storyspec', () => import('@/app-core/auth-service/story-spec/story-spec-auth-service'));
        this.allService.set('action', () => import('@/app-core/auth-service/action/action-auth-service'));
        this.allService.set('casestep', () => import('@/app-core/auth-service/case-step/case-step-auth-service'));
        this.allService.set('productline', () => import('@/app-core/auth-service/product-line/product-line-auth-service'));
        this.allService.set('sysdepartment', () => import('@/app-core/auth-service/sys-department/sys-department-auth-service'));
        this.allService.set('usercontact', () => import('@/app-core/auth-service/user-contact/user-contact-auth-service'));
        this.allService.set('release', () => import('@/app-core/auth-service/release/release-auth-service'));
        this.allService.set('taskteam', () => import('@/app-core/auth-service/task-team/task-team-auth-service'));
        this.allService.set('productmodule', () => import('@/app-core/auth-service/product-module/product-module-auth-service'));
        this.allService.set('project', () => import('@/app-core/auth-service/project/project-auth-service'));
        this.allService.set('todo', () => import('@/app-core/auth-service/todo/todo-auth-service'));
        this.allService.set('story', () => import('@/app-core/auth-service/story/story-auth-service'));
        this.allService.set('ibzmyterritory', () => import('@/app-core/auth-service/ibz-my-territory/ibz-my-territory-auth-service'));
        this.allService.set('case', () => import('@/app-core/auth-service/case/case-auth-service'));
        this.allService.set('testmodule', () => import('@/app-core/auth-service/test-module/test-module-auth-service'));
        this.allService.set('ibzprojectteam', () => import('@/app-core/auth-service/ibzprojectteam/ibzprojectteam-auth-service'));
        this.allService.set('doclibmodule', () => import('@/app-core/auth-service/doc-lib-module/doc-lib-module-auth-service'));
        this.allService.set('sysupdatefeatures', () => import('@/app-core/auth-service/sys-update-features/sys-update-features-auth-service'));
        this.allService.set('doccontent', () => import('@/app-core/auth-service/doc-content/doc-content-auth-service'));
        this.allService.set('ibzreport', () => import('@/app-core/auth-service/ibz-report/ibz-report-auth-service'));
        this.allService.set('productplan', () => import('@/app-core/auth-service/product-plan/product-plan-auth-service'));
        this.allService.set('ibztaskestimate', () => import('@/app-core/auth-service/ibz-taskestimate/ibz-taskestimate-auth-service'));
        this.allService.set('projectstats', () => import('@/app-core/auth-service/project-stats/project-stats-auth-service'));
        this.allService.set('sysemployee', () => import('@/app-core/auth-service/sys-employee/sys-employee-auth-service'));
        this.allService.set('ibztaskteam', () => import('@/app-core/auth-service/ibztaskteam/ibztaskteam-auth-service'));
        this.allService.set('doclib', () => import('@/app-core/auth-service/doc-lib/doc-lib-auth-service'));
        this.allService.set('sysupdatelog', () => import('@/app-core/auth-service/sys-update-log/sys-update-log-auth-service'));
        this.allService.set('doc', () => import('@/app-core/auth-service/doc/doc-auth-service'));
        this.allService.set('systeam', () => import('@/app-core/auth-service/sys-team/sys-team-auth-service'));
        this.allService.set('bug', () => import('@/app-core/auth-service/bug/bug-auth-service'));
        this.allService.set('projectmodule', () => import('@/app-core/auth-service/project-module/project-module-auth-service'));
        this.allService.set('ibzreportly', () => import('@/app-core/auth-service/ibz-reportly/ibz-reportly-auth-service'));
        this.allService.set('productstats', () => import('@/app-core/auth-service/product-stats/product-stats-auth-service'));
        this.allService.set('testtask', () => import('@/app-core/auth-service/test-task/test-task-auth-service'));
        this.allService.set('testsuite', () => import('@/app-core/auth-service/test-suite/test-suite-auth-service'));
    }


}
export const authServiceConstructor: AuthServiceConstructor = new AuthServiceConstructor();