import { ControlServiceBase } from './control-service-base';
import { HttpResponse, Util } from '../utils';

/**
 * 表单部件服务基类
 *
 * @export
 * @class FormServiceBase
 * @extends {ControlServiceBase}
 */
export class FormServiceBase extends ControlServiceBase {

    /**
     * 处理数据
     *
     * @protected
     * @param {HttpResponse} res
     * @returns {Promise<any[]>}
     * @memberof GridServiceBase
     */
    protected async doItems(res: HttpResponse): Promise<any[]> {
        if (res.status === 200) {
            return [res.data];
        }
        return [];
    }

    /**
     * 启动工作流
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @returns {Promise<HttpResponse>}
     * @memberof FormServiceBase
     */
    public async wfstart(action: string, context: any = {}, data: any = {}, isLoading: boolean): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.Create(context, data, isLoading);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }

    /**
     * 提交工作流
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isLoading]
     * @param {*} [wfdata]
     * @returns {Promise<HttpResponse>}
     * @memberof FormServiceBase
     */
    public async wfsubmit(action: string, context: any = {}, data: any = {}, isLoading?: boolean, wfdata?: any): Promise<HttpResponse> {
        await this.onBeforeAction(action, context, data, isLoading);
        data = this.handleRequestData(action, context, data);
        let response: HttpResponse;
        if (Util.isFunction(this.service[action])) {
            response = await this.service[action](context, data, isLoading);
        } else {
            response = await this.service.WFSubmit(context, data,isLoading, wfdata);
        }
        if (!response.isError()) {
            response = this.handleResponse(action, response);
        }
        return response;
    }

    /**
     * 处理返回数据
     *
     * @param {string} action
     * @param {*} [data={}]
     * @param {boolean} [isCreate]
     * @returns {*}
     * @memberof FormServiceBase
     */
    public handleResponseData(action: string, data: any = {}, isCreate?: boolean): any {
        if (!this.model || !Util.isFunction(this.model.getDataItems)) {
            return data;
        }
        const item: any = {};
        const dataItems: any[] = this.model.getDataItems();
        dataItems.forEach(dataitem => {
            let val = data.hasOwnProperty(dataitem.prop) ? data[dataitem.prop] : null;
            if (!val) {
                val = data.hasOwnProperty(dataitem.name) ? data[dataitem.name] : null;
            }
            if ((isCreate === undefined || isCreate === null) && Object.is(dataitem.dataType, 'GUID') && Object.is(dataitem.name, 'srfkey') && (val && !Object.is(val, ''))) {
                isCreate = true;
            }
            item[dataitem.name] = val;
        });
        if (isCreate) {
            if (!item.srfuf) {
                Object.assign(item, { srfuf: '0' });
            }
        } else {
            if (!item.srfuf) {
                Object.assign(item, { srfuf: '1' });
            }
        }
        Object.assign(data, item);
        return data;
    }

    /**
     * 通过属性名称获取表单项名称
     * 
     * @param name 实体属性名称 
     * @memberof ${srfclassname('${ctrl.codeName}')}Service
     */
    public getItemNameByDeName(name:string) :string{
        if (!this.model || !Util.isFunction(this.model.getDataItems)) {
            return name;
        }
        let itemName = name;
        let mode: any = this.model.getDataItems();
        mode.forEach((item:any)=>{
            if(item.prop === name){
                itemName = item.name;
            }
        });
        return itemName.trim();
    }

}