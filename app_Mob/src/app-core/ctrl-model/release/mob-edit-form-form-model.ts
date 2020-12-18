/**
 * MobEditForm 部件模型
 *
 * @export
 * @class MobEditFormModel
 */
export class MobEditFormModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobEditFormModel
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
                name: 'product',
                prop: 'product',
                dataType: 'PICKUP',
            },
            {
                name: 'productname',
                prop: 'productname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'name',
                prop: 'name',
                dataType: 'TEXT',
            },
            {
                name: 'marker',
                prop: 'marker',
                dataType: 'SSCODELIST',
            },
            {
                name: 'buildname',
                prop: 'buildname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
            },
            {
                name: 'desc',
                prop: 'desc',
                dataType: 'LONGTEXT',
            },
            {
                name: 'files',
                prop: 'files',
                dataType: 'TEXT',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'release',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobEditFormModel;