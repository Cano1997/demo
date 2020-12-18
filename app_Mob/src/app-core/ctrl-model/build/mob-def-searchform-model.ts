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
                name: 'n_name_like',
                prop: 'n_name_like', 
                dataType: 'TEXT',
            },
            {
                name: 'n_productname_like',
                prop: 'n_productname_like', 
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'n_date_ltandeq',
                prop: 'n_date_ltandeq', 
                dataType: 'DATE',
            },
        ];
    }

}
// 默认导出
export default MobDefModel;