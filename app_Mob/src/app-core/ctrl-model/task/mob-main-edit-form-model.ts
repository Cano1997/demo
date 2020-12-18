/**
 * MobMainEdit 部件模型
 *
 * @export
 * @class MobMainEditModel
 */
export class MobMainEditModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobMainEditModel
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
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'name',
                prop: 'name',
                dataType: 'TEXT',
            },
            {
                name: 'projectname',
                prop: 'projectname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'project',
                prop: 'project',
                dataType: 'PICKUP',
            },
            {
                name: 'module',
                prop: 'module',
                dataType: 'PICKUP',
            },
            {
                name: 'modulename',
                prop: 'modulename',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'allmodules',
                prop: 'allmodules',
                dataType: 'TEXT',
            },
            {
                name: 'storyname',
                prop: 'storyname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'story',
                prop: 'story',
                dataType: 'PICKUP',
            },
            {
                name: 'parentname',
                prop: 'parentname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'parent',
                prop: 'parent',
                dataType: 'PICKUP',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
            },
            {
                name: 'storyversion',
                prop: 'storyversion',
                dataType: 'PICKUPDATA',
            },
            {
                name: 'multiple',
                prop: 'multiple',
                dataType: 'TEXT',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
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
                name: 'eststarted',
                prop: 'eststarted',
                dataType: 'DATE',
            },
            {
                name: 'deadline',
                prop: 'deadline',
                dataType: 'DATE',
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
                name: 'openedby',
                prop: 'openedby',
                dataType: 'SSCODELIST',
            },
            {
                name: 'realstarted',
                prop: 'realstarted',
                dataType: 'DATE',
            },
            {
                name: 'finishedby',
                prop: 'finishedby',
                dataType: 'SSCODELIST',
            },
            {
                name: 'finisheddate',
                prop: 'finisheddate',
                dataType: 'DATE',
            },
            {
                name: 'canceledby',
                prop: 'canceledby',
                dataType: 'SSCODELIST',
            },
            {
                name: 'canceleddate',
                prop: 'canceleddate',
                dataType: 'DATETIME',
            },
            {
                name: 'closedby',
                prop: 'closedby',
                dataType: 'SSCODELIST',
            },
            {
                name: 'closedreason',
                prop: 'closedreason',
                dataType: 'SSCODELIST',
            },
            {
                name: 'closeddate',
                prop: 'closeddate',
                dataType: 'DATETIME',
            },
            {
                name: 'noticeusers',
                prop: 'noticeusers',
                dataType: 'TEXT',
            },
            {
                name: 'desc',
                prop: 'desc',
                dataType: 'LONGTEXT',
            },
            {
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'files',
            },
            {
                name: 'task',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainEditModel;