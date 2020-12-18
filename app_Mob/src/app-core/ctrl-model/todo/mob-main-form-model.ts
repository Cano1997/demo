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
                name: 'pri',
                prop: 'pri',
                dataType: 'INT',
            },
            {
                name: 'date1',
                prop: 'date1',
                dataType: 'TEXT',
            },
            {
                name: 'begin',
                prop: 'begin',
                dataType: 'NSCODELIST',
            },
            {
                name: 'end',
                prop: 'end',
                dataType: 'NSCODELIST',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'TEXT',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'assignedby',
                prop: 'assignedby',
                dataType: 'TEXT',
            },
            {
                name: 'assigneddate',
                prop: 'assigneddate',
                dataType: 'DATE',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
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
                name: 'todo',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;