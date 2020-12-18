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
                name: 'projectname',
                prop: 'projectname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'modulename',
                prop: 'modulename',
                dataType: 'PICKUPTEXT',
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
                name: 'multiple',
                prop: 'multiple',
                dataType: 'TEXT',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'pri',
                prop: 'pri',
                dataType: 'NSCODELIST',
            },
            {
                name: 'estimate',
                prop: 'estimate',
                dataType: 'FLOAT',
            },
            {
                name: 'consumed',
                prop: 'consumed',
                dataType: 'FLOAT',
            },
            {
                name: 'left',
                prop: 'left',
                dataType: 'FLOAT',
            },
            {
                name: 'eststarted',
                prop: 'eststarted',
                dataType: 'DATE',
            },
            {
                name: 'realstarted',
                prop: 'realstarted',
                dataType: 'DATE',
            },
            {
                name: 'deadline',
                prop: 'deadline',
                dataType: 'DATE',
            },
            {
                name: 'finishedby',
                prop: 'finishedby',
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
                name: 'subtask',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;