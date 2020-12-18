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
                name: 'srfupdatedate',
                prop: 'lastediteddate',
                dataType: 'DATETIME',
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
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'addedby',
                prop: 'addedby',
                dataType: 'TEXT',
            },
            {
                name: 'addeddate',
                prop: 'addeddate',
                dataType: 'DATETIME',
            },
            {
                name: 'lasteditedby',
                prop: 'lasteditedby',
                dataType: 'TEXT',
            },
            {
                name: 'lastediteddate',
                prop: 'lastediteddate',
                dataType: 'DATETIME',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'testsuite',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;