import { CalendarServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MyWorkModel } from '@/app-core/ctrl-model/ibz-my-territory/my-work-calendar-model';


/**
 * MyWork 部件服务对象
 *
 * @export
 * @class MyWorkService
 * @extends {CalendarServiceBase}
 */
export class MyWorkService extends CalendarServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MyWorkModel}
     * @memberof ControlServiceBase
     */
    protected model: MyWorkModel = new MyWorkModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyWorkService
     */
    protected appDEName: string = 'ibzmyterritory';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MyWorkService
     */
    protected appDeKey: string = 'id';

    /**
     * 事件配置集合
     *
     * @protected
     * @type {any[]}
     * @memberof MyWork
     */
    protected eventsConfig: any = {
        'bug': {
            itemName : 'Bug',
            itemType : 'bug',
            color : 'rgba(254, 228, 90, 1)',
            textColor : 'rgba(17, 34, 132, 1)',
        },
        'task': {
            itemName : '任务',
            itemType : 'task',
            color : 'rgba(247, 110, 154, 1)',
            textColor : 'rgba(247, 219, 15, 1)',
        },
        'todo': {
            itemName : '待办',
            itemType : 'todo',
            color : 'rgba(255, 166, 0, 1)',
            textColor : '',
        },
        'daily': {
            itemName : '日报',
            itemType : 'daily',
            color : 'rgba(119, 255, 0, 1)',
            textColor : 'rgba(0, 0, 0, 1)',
        },
    };

    /**
     * 查询数据
     *
     * @param {string} itemType
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof MyWorkService
     */
    public async search(itemType: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<HttpResponse> {
        let item: any = {};
        try {

            this.model.itemType = 'bug';
            const _bug_data = this.handleRequestData('', context, data);
            await this.onBeforeAction('', context, _bug_data, isLoading);
            const _bug = await this.loadDEDataSet('FetchAssignedToMyBug', context, _bug_data, 'bug', 'bug');
            Object.assign(item, { bug: _bug });

            this.model.itemType = 'task';
            const _task_data = this.handleRequestData('', context, data);
            await this.onBeforeAction('', context, _task_data, isLoading);
            const _task = await this.loadDEDataSet('FetchAssignedToMyTask', context, _task_data, 'task', 'task');
            Object.assign(item, { task: _task });

            this.model.itemType = 'todo';
            const _todo_data = this.handleRequestData('', context, data);
            await this.onBeforeAction('', context, _todo_data, isLoading);
            const _todo = await this.loadDEDataSet('FetchMyTodo', context, _todo_data, 'todo', 'todo');
            Object.assign(item, { todo: _todo });

            this.model.itemType = 'daily';
            const _daily_data = this.handleRequestData('', context, data);
            await this.onBeforeAction('', context, _daily_data, isLoading);
            const _daily = await this.loadDEDataSet('FetchMyAllDaily', context, _daily_data, 'daily', 'ibzdaily');
            Object.assign(item, { daily: _daily });
        } catch (response) {
            return new HttpResponse(response.status);
        }
        return new HttpResponse(200, item);
    }

    /**
     * 修改数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<any>}
     * @memberof MyWorkService
     */
    public async update(itemType: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<any> {
        await this.onBeforeAction('', context, data, isLoading);
        data = this.handleRequestData('', context, data);
        let response: any;
        switch (itemType) {
            default:
                response = new HttpResponse(500, null, { code: 101, message: '未配置更新实体行为' });
        }
        if (!response.isError()) {
            response = this.handleResponse("", response);
        }
        return new HttpResponse(response.status, response.data, response.error);
    }

    /**
     * 删除数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<any>}
     * @memberof MyWorkService
     */
    public async delete(itemType: string, context: any = {}, data: any = {}, isLoading?: boolean): Promise<any> {
        await this.onBeforeAction('', context, data, isLoading);
        data = this.handleRequestData('', context, data);
        let response: any;
        switch (itemType) {
            default:
                response = new HttpResponse(500, null, { code: 101, message: '未配置删除实体行为' });
        }
        if (!response.isError()) {
            response = this.handleResponse("", response);
        }
        return new HttpResponse(response.status, response.data, response.error);
    }

}
// 默认导出
export default MyWorkService;