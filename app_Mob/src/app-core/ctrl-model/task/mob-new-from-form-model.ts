/**
 * MobNewFrom 部件模型
 *
 * @export
 * @class MobNewFromModel
 */
export class MobNewFromModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobNewFromModel
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
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
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
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
            },
            {
                name: 'multiple',
                prop: 'multiple',
                dataType: 'TEXT',
            },
            {
                name: 'noticeusers',
                prop: 'noticeusers',
                dataType: 'TEXT',
            },
            {
                name: 'story',
                prop: 'story',
                dataType: 'PICKUP',
            },
            {
                name: 'storyname',
                prop: 'storyname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'name',
                prop: 'name',
                dataType: 'TEXT',
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
                name: 'task',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobNewFromModel;