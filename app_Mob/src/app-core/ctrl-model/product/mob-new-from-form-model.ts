/**
 * MobNewFROM 部件模型
 *
 * @export
 * @class MobNewFROMModel
 */
export class MobNewFROMModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobNewFROMModel
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
                name: 'name',
                prop: 'name',
                dataType: 'TEXT',
            },
            {
                name: 'code',
                prop: 'code',
                dataType: 'TEXT',
            },
            {
                name: 'line',
                prop: 'line',
                dataType: 'PICKUP',
            },
            {
                name: 'linename',
                prop: 'linename',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'popk',
                prop: 'popk',
                dataType: 'TEXT',
            },
            {
                name: 'qdpk',
                prop: 'qdpk',
                dataType: 'TEXT',
            },
            {
                name: 'rdpk',
                prop: 'rdpk',
                dataType: 'TEXT',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'desc',
                prop: 'desc',
                dataType: 'LONGTEXT',
            },
            {
                name: 'acl',
                prop: 'acl',
                dataType: 'SSCODELIST',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'po',
                prop: 'po',
                dataType: 'TEXT',
            },
            {
                name: 'rd',
                prop: 'rd',
                dataType: 'TEXT',
            },
            {
                name: 'qd',
                prop: 'qd',
                dataType: 'TEXT',
            },
            {
                name: 'product',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobNewFROMModel;