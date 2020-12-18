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
                name: 'prodoctname',
                prop: 'productname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'branch',
                prop: 'branch',
                dataType: 'PICKUP',
            },
            {
                name: 'product',
                prop: 'product',
                dataType: 'PICKUP',
            },
            {
                name: 'branchname',
                prop: 'branchname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'modulename1',
                prop: 'modulename1',
                dataType: 'TEXT',
            },
            {
                name: 'version',
                prop: 'version',
                dataType: 'INT',
            },
            {
                name: 'title',
                prop: 'title',
                dataType: 'TEXT',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'pri',
                prop: 'pri',
                dataType: 'NSCODELIST',
            },
            {
                name: 'storypoints',
                prop: 'storypoints',
                dataType: 'SSCODELIST',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
            },
            {
                name: 'assigneddate',
                prop: 'assigneddate',
                dataType: 'DATETIME',
            },
            {
                name: 'source',
                prop: 'source',
                dataType: 'SSCODELIST',
            },
            {
                name: 'sourcenote',
                prop: 'sourcenote',
                dataType: 'TEXT',
            },
            {
                name: 'stage',
                prop: 'stage',
                dataType: 'SSCODELIST',
            },
            {
                name: 'closedby',
                prop: 'closedby',
                dataType: 'SSCODELIST',
            },
            {
                name: 'closeddate',
                prop: 'closeddate',
                dataType: 'DATETIME',
            },
            {
                name: 'closedreason',
                prop: 'closedreason',
                dataType: 'SSCODELIST',
            },
            {
                name: 'spec',
                prop: 'spec',
                dataType: 'TEXT',
            },
            {
                name: 'verify',
                prop: 'verify',
                dataType: 'TEXT',
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
                name: 'keywords',
                prop: 'keywords',
                dataType: 'TEXT',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'story',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;