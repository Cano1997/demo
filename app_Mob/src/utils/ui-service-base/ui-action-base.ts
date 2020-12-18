import { ViewOpenService } from '../view-open-service/view-open-service';
import { Notice } from '../notice/notice';
import GlobalUiServiceConstructor from '@/global-ui-service/global-ui-service-constructor';
import { ViewTool } from '@/utils/index';

/**
 * 界面行为服务基类
 *
 * @export
 * @class UIActionBase
 */
export default class UIActionBase {

    /**
     * 视图打开服务
     *
     * @type {ViewOpenService}
     * @memberof UIActionBase
     */
    public openService: ViewOpenService = ViewOpenService.getInstance();

    /**
     * 工具对象
     *
     * @memberof EntityUIActionBase
     */
    public viewTool = ViewTool.getInstance();

    /**
     * 提示工具类
     *
     * @protected
     * @type {Notice}
     * @memberof UIActionBase
     */
    protected notice: Notice = Notice.getInstance();

    /**
     * 全局 ui 服务构造器对象
     *
     * @private
     * @type {GlobalUiServiceConstructor}
     * @memberof UIActionBase
     */
    private globalUiServiceConstructor: GlobalUiServiceConstructor = new GlobalUiServiceConstructor();

    /**
     * 处理应用上下文参数
     *
     * @protected
     * @param {*} actionTarget 数据目标
     * @param {*} args 传入数据对象
     * @param {*} context 传入应用上下数据参数
     * @returns
     * @memberof UIActionBase
     */
    protected handleContextParam(actionTarget: any, args: any, context: any) {
        return this.formatData(actionTarget, args, context);
    }

    /**
     * 处理界面行为参数
     *
     * @protected
     * @param {*} actionTarget 数据目标
     * @param {*} args 传入数据对象
     * @param {*} context 传入应用上下数据参数
     * @returns
     * @memberof UIActionBase
     */
    protected handleActionParam(actionTarget: any, args: any, params: any) {
        return this.formatData(actionTarget, args, params);
    }

    /**
     * 格式化数据
     *
     * @protected
     * @param {*} actionTarget
     * @param {*} args
     * @param {*} params
     * @returns {*}
     * @memberof UIActionBase
     */
    protected formatData(actionTarget: any, args: any, params: any): any {
        const data: any = {};
        if (Object.is(actionTarget, 'SINGLEKEY') && args && args.length > 0) {
            const arg: any = args[0];
            Object.keys(params).forEach((name: string) => {
                if (!name) {
                    return;
                }
                let value: string | null = params[name];
                if (value && value.startsWith('%') && value.endsWith('%')) {
                    const key = value.substring(1, value.length - 1);
                    if (arg && arg.hasOwnProperty(key)) {
                        value = (arg[key] !== null && arg[key] !== undefined) ? arg[key] : null;
                    } else {
                        value = null;
                    }
                }
                Object.assign(data, { [name]: value });
            });
        } else if (Object.is(actionTarget, 'MULTIKEY')) {
            Object.keys(params).forEach((name: string) => {
                if (!name) {
                    return;
                }
                let value: string | null = params[name];
                let values: any[] = [];
                if (value && value.startsWith('%') && value.endsWith('%')) {
                    const key = value.substring(1, value.length - 1);
                    args.forEach((arg: any) => {
                        if (arg && arg.hasOwnProperty(key)) {
                            value = (arg[key] !== null && arg[key] !== undefined) ? arg[key] : null;
                        } else {
                            value = null;
                        }
                        values.push(value);
                    });
                }
                Object.assign(data, { [name]: values.length > 0 ? values.join(';') : value });
            });
        }
        return data;
    }

    /**
     * 处理界面行为参数
     *
     * @param {*} args 传入数据参数
     * @param {*} context 传入行为附加上下文
     * @param {*} params 传入行为附加参数
     * @param {*} data 处理之后的数据
     * @memberof UIActionBase
     */
    public handleActionParams(args: any, context: any, params: any, data: any) {
        this.handleSingleParam(args, context, data);
        this.handleSingleParam(args, params, data);
    }

    /**
     * 处理单个参数
     *
     * @param {*} args 传入数据参数
     * @param {*} params 传入行为附加参数
     * @param {*} data 处理之后的数据
     * @memberof UIActionBase
     */
    public handleSingleParam(args: any, params: any, data: any) {
        if (params && Object.keys(params).length > 0) {
            const _params: any = {};
            const arg: any = args[0];
            Object.keys(params).forEach((name: string) => {
                if (!name) {
                    return;
                }
                let value: string | null = params[name];
                if (value && value.startsWith('%') && value.endsWith('%')) {
                    const key = value.substring(1, value.length - 1);
                    if (arg && arg.hasOwnProperty(key)) {
                        value = (arg[key] !== null && arg[key] !== undefined) ? arg[key] : null;
                    } else {
                        value = null;
                    }
                }
                Object.assign(_params, { [name]: value });
            });
            Object.assign(data, _params);
        }
    }

    /**
     * 获取其他应用实体界面行为服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof UIActionBase
     */
    public async getService(name: string): Promise<any> {
        return this.globalUiServiceConstructor.getService(name);
    }

    /**
     * 获取其他应用实体服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof UIActionBase
     */
    public async getAppEntityService(name: string): Promise<any> {
        return window.appEntityServiceConstructor.getService(name);
    }

}