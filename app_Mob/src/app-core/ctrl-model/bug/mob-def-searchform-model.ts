/**
 * MobDef 部件模型
 *
 * @export
 * @class MobDefModel
 */
export class MobDefModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobDefModel
    */
    public getDataItems(): any[] {
        return [
            // 工作流备注字段
            {
                name: 'srfwfmemo',
                prop: 'srfwfmemo',
                dataType: 'TEXT',
            },
            {
                name: 'n_title_like',
                prop: 'n_title_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_status_eq',
                prop: 'n_status_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_type_eq',
                prop: 'n_type_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_openedby_eq',
                prop: 'n_openedby_eq', 
                dataType: 'SSCODELIST',
            },
            {
                name: 'n_severity_eq',
                prop: 'n_severity_eq', 
                dataType: 'NSCODELIST',
            },
            {
                name: 'n_modulename_like',
                prop: 'n_modulename_like', 
                dataType: 'PICKUPTEXT',
            },
        ];
    }

}
// 默认导出
export default MobDefModel;