/**
 * MobMain 部件模型
 *
 * @export
 * @class MobMainModel
 */
export class MobMainModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobMainModel
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
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'po',
                prop: 'po',
                dataType: 'TEXT',
            },
            {
                name: 'qd',
                prop: 'qd',
                dataType: 'TEXT',
            },
            {
                name: 'rd',
                prop: 'rd',
                dataType: 'TEXT',
            },
            {
                name: 'productplancnt',
                prop: 'productplancnt',
                dataType: 'INT',
            },
            {
                name: 'activestorycnt',
                prop: 'activestorycnt',
                dataType: 'INT',
            },
            {
                name: 'buildcnt',
                prop: 'buildcnt',
                dataType: 'INT',
            },
            {
                name: 'relatedbugcnt',
                prop: 'relatedbugcnt',
                dataType: 'INT',
            },
            {
                name: 'unconfirmbugcnt',
                prop: 'unconfirmbugcnt',
                dataType: 'INT',
            },
            {
                name: 'activebugcnt',
                prop: 'activebugcnt',
                dataType: 'INT',
            },
            {
                name: 'notclosedbugcnt',
                prop: 'notclosedbugcnt',
                dataType: 'INT',
            },
            {
                name: 'casecnt',
                prop: 'casecnt',
                dataType: 'INT',
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
                name: 'product',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;