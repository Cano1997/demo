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
                name: 'code',
                prop: 'code',
                dataType: 'TEXT',
            },
            {
                name: 'pm',
                prop: 'pm',
                dataType: 'SSCODELIST',
            },
            {
                name: 'po',
                prop: 'po',
                dataType: 'SSCODELIST',
            },
            {
                name: 'qd',
                prop: 'qd',
                dataType: 'SSCODELIST',
            },
            {
                name: 'rd',
                prop: 'rd',
                dataType: 'SSCODELIST',
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
                name: 'days',
                prop: 'days',
                dataType: 'INT',
            },
            {
                name: 'team',
                prop: 'team',
                dataType: 'TEXT',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'storycnt',
                prop: 'storycnt',
                dataType: 'INT',
            },
            {
                name: 'bugcnt',
                prop: 'bugcnt',
                dataType: 'INT',
            },
            {
                name: 'taskcnt',
                prop: 'taskcnt',
                dataType: 'INT',
            },
            {
                name: 'totalestimate',
                prop: 'totalestimate',
                dataType: 'FLOAT',
            },
            {
                name: 'totalconsumed',
                prop: 'totalconsumed',
                dataType: 'FLOAT',
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
                name: 'project',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;