/**
 * MobEditTable 部件模型
 *
 * @export
 * @class MobEditTableModel
 */
export class MobEditTableModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobEditTableModel
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
                prop: 'name',
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
                name: 'projecttname',
                prop: 'projecttname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'buildname',
                prop: 'buildname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'ownerpk',
                prop: 'ownerpk',
                dataType: 'TEXT',
            },
            {
                name: 'pri',
                prop: 'pri',
                dataType: 'NSCODELIST',
            },
            {
                name: 'begin',
                prop: 'begin',
                dataType: 'DATE',
            },
            {
                name: 'end',
                prop: 'end',
                dataType: 'DATE',
            },
            {
                name: 'project',
                prop: 'project',
                dataType: 'PICKUP',
            },
            {
                name: 'build',
                prop: 'build',
                dataType: 'PICKUP',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'product',
                prop: 'product',
                dataType: 'PICKUP',
            },
            {
                name: 'name',
                prop: 'name',
                dataType: 'TEXT',
            },
            {
                name: 'desc',
                prop: 'desc',
                dataType: 'LONGTEXT',
            },
            {
                name: 'mailto',
                prop: 'mailto',
                dataType: 'SMCODELIST',
            },
            {
                name: 'mailtopk',
                prop: 'mailtopk',
                dataType: 'SMCODELIST',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'owner',
                prop: 'owner',
                dataType: 'TEXT',
            },
            {
                name: 'testtask',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobEditTableModel;