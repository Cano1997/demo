import FileUIActionBase from './file-ui-action-base';
import { Util, Loading } from '@/ibiz-core/utils';
/**
 * 附件UI服务对象
 *
 * @export
 * @class FileUIAction
 * @extends {FileUIActionBase}
 */
export class FileUIAction extends FileUIActionBase { 
    /**
     * 下载
     *
     * @param {any[]} args 数据
     * @param {*} [contextJO={}] 行为上下文
     * @param {*} [paramJO={}] 行为参数
     * @param {*} [$event] 事件
     * @param {*} [xData] 数据目标
     * @param {*} [container] 行为容器对象
     * @param {string} [srfParentDeName] 
     * @returns {Promise<any>}
     * @memberof FileUIService
     */
    public async File_ibzdownload(args: any[], contextJO: any = {}, paramJO: any = {}, $event?: any, xData?: any, container?: any, srfParentDeName?: string): Promise<any> {
        const _args: any[] = Util.deepCopy(args);
        const actionTarget: string | null = 'SINGLEKEY';
        Object.assign(contextJO, { file: '%file%' });
        Object.assign(paramJO, { id: '%file%' });
        Object.assign(paramJO, { title: '%title%' });
            
        let context: any = this.handleContextParam(actionTarget, _args, contextJO);
        let params: any = this.handleActionParam(actionTarget, _args, paramJO);
        context = { ...container.context, ...context };
        let parentObj: any = {
            srfparentdename: srfParentDeName ? srfParentDeName : null,
            srfparentkey: srfParentDeName ? context[srfParentDeName.toLowerCase()] : null,
        };
        Object.assign(context, parentObj);
        Object.assign(params, parentObj);
        let panelNavParam= { } ;
        let panelNavContext= { } ;
        const { context: _context, param: _params } = this.viewTool.formatNavigateParam( panelNavContext, panelNavParam, context, params, _args);
        // 自定义实体界面行为
        // this.notice.warning('下载 未实现');
        let environment:any  = (window as any).Environment
        // window.open(this.)
        let url = environment.BaseUrl + environment.ExportFile;
        window.open(`${url}/${_args[0].curData.id}`);
    }
}
// 默认导出
export default FileUIAction;
