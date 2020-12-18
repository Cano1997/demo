/**
 * MobMainTable 部件模型
 *
 * @export
 * @class MobMainTableModel
 */
export class MobMainTableModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobMainTableModel
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
                name: 'srforikey',
            },
            {
                name: 'srfkey',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'title',
                dataType: 'TEXT',
            },
            {
                name: 'srftempmode',
            },
            {
                name: 'srfuf',
            },
            {
                name: 'srfdeid',
            },
            {
                name: 'srfsourcekey',
            },
            {
                name: 'product',
                prop: 'product',
                dataType: 'PICKUP',
            },
            {
                name: 'branch',
                prop: 'branch',
                dataType: 'PICKUP',
            },
            {
                name: 'title',
                prop: 'title',
                dataType: 'TEXT',
            },
            {
                name: 'oldtitle',
                prop: 'oldtitle',
                dataType: 'TEXT',
            },
            {
                name: 'future',
                prop: 'future',
                dataType: 'SSCODELIST',
            },
            {
                name: 'begin',
                prop: 'begin',
                dataType: 'DATE',
            },
            {
                name: 'delta',
                prop: 'delta',
                dataType: 'SSCODELIST',
            },
            {
                name: 'end',
                prop: 'end',
                dataType: 'DATE',
            },
            {
                name: 'desc',
                prop: 'desc',
                dataType: 'LONGTEXT',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'productplan',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainTableModel;