import { HttpResponse } from '@/ibiz-core/utils';
import  RelatedStory  from '@/app-core/code-list/related-story';
import  ProductBranch_Cache  from '@/app-core/code-list/product-branch-cache';
import  MyPlanTask  from '@/app-core/code-list/my-plan-task';
import  MonthlyCompleteTaskChoice  from '@/app-core/code-list/monthly-complete-task-choice';
import  CurProductPlan  from '@/app-core/code-list/cur-product-plan';
import  SysOperator  from '@/app-core/code-list/sys-operator';
import  UserRealName  from '@/app-core/code-list/user-real-name';
import  ProductBranch  from '@/app-core/code-list/product-branch';
import  CurProductBuild  from '@/app-core/code-list/cur-product-build';
import  BugModule  from '@/app-core/code-list/bug-module';
import  Role  from '@/app-core/code-list/role';
import  ProjectProductPlan  from '@/app-core/code-list/project-product-plan';
import  BugUserRealName  from '@/app-core/code-list/bug-user-real-name';
import  Product  from '@/app-core/code-list/product';
import  CurCaseVersion  from '@/app-core/code-list/cur-case-version';
import  ProductPlan  from '@/app-core/code-list/product-plan';
import  UserRealNameProject  from '@/app-core/code-list/user-real-name-project';
import  CodeList  from '@/app-core/code-list/code-list';
import  CurStory  from '@/app-core/code-list/cur-story';
import  MyCompleteTask  from '@/app-core/code-list/my-complete-task';
import  UserRealNameTaskTeam  from '@/app-core/code-list/user-real-name-task-team';

/**
 * 动态代码表服务类
 *
 * @export
 * @class CodeListService
 */
export class CodeListService {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {CodeListService}
     * @memberof CodeListService
     */
    private static readonly instance: CodeListService = new CodeListService();

    /**
     * Creates an instance of CodeListService.
     * @memberof CodeListService
     */
    constructor() {
        if (CodeListService.instance) {
            return CodeListService.instance;
        }
    }

    /**
     * 所有代码表
     *
     * @protected
     * @type {any[]}
     * @memberof CodeListService
     */
    protected allCodeList: any = {
        // 关联需求（动态）
        RelatedStory: new RelatedStory(),
        // 产品平台（动态）_缓存
        ProductBranch_Cache: new ProductBranch_Cache(),
        // 我计划参与的任务（汇报）
        MyPlanTask: new MyPlanTask(),
        // 月报我完成的任务（下拉列表框）
        MonthlyCompleteTaskChoice: new MonthlyCompleteTaskChoice(),
        // 当前产品计划（动态）_缓存
        CurProductPlan: new CurProductPlan(),
        // 云系统操作者
        SysOperator: new SysOperator(),
        // 用户真实名称（动态）
        UserRealName: new UserRealName(),
        // 产品平台（动态）
        ProductBranch: new ProductBranch(),
        // 当前产品版本（动态）
        CurProductBuild: new CurProductBuild(),
        // 所属模板（动态）
        BugModule: new BugModule(),
        // 群组（动态）
        Role: new Role(),
        // 项目产品计划（动态）
        ProjectProductPlan: new ProjectProductPlan(),
        // 用户真实名称（动态）（Bug）
        BugUserRealName: new BugUserRealName(),
        // 产品（动态）
        Product: new Product(),
        // 当前用例版本（动态）
        CurCaseVersion: new CurCaseVersion(),
        // 产品计划（动态）
        ProductPlan: new ProductPlan(),
        // 用户真实名称（项目团队成员）
        UserRealNameProject: new UserRealNameProject(),
        // 周报我完成的任务(下拉框选择)
        CodeList: new CodeList(),
        // 当前需求版本（动态）
        CurStory: new CurStory(),
        // 我完成的任务（汇报）
        MyCompleteTask: new MyCompleteTask(),
        // 用户真实名称（任务团队）
        UserRealNameTaskTeam: new UserRealNameTaskTeam(),
    };

    /**
     * 代码表缓存
     *
     * @protected
     * @type {Map<string, HttpResponse>}
     * @memberof CodeListService
     */
    protected codeListCache: Map<string, HttpResponse> = new Map();

    /**
     * 获取动态代码表
     *
     * @param {string} tag 代码表标识
     * @param {boolean} [isCache] 是否缓存
     * @param {*} [context] 上下文
     * @param {*} [data] 参数
     * @returns {(Promise<any | HttpResponse>)}
     * @memberof CodeListService
     */
    public async getItems(tag: string, isCache?: boolean, context?: any, data?: any): Promise<any | HttpResponse> {
        if (!this.allCodeList[tag]) {
            return new HttpResponse(200, []);
        }
        if (isCache && this.codeListCache.has(tag)) {
            return this.codeListCache.get(tag);
        }
        const response = await this.allCodeList[tag].getItems(context, data);
        this.codeListCache.set(tag, response);
        return response;
    }

    /**
     * 获取实例
     *
     * @static
     * @returns {CodeListService}
     * @memberof CodeListService
     */
    public static getInstance(): CodeListService {
        return this.instance;
    }

}
// 默认导出
export default CodeListService;