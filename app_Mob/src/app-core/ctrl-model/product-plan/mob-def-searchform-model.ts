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
                name: 'n_begin_gtandeq',
                prop: 'n_begin_gtandeq', 
                dataType: 'DATE',
            },
            {
                name: 'n_end_ltandeq',
                prop: 'n_end_ltandeq', 
                dataType: 'DATE',
            },
        ];
    }

}
// 默认导出
export default MobDefModel;