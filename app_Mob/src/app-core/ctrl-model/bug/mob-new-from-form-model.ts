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
                name: 'productname',
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
                name: 'modulename',
                prop: 'modulename',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'module',
                prop: 'module',
                dataType: 'PICKUP',
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
                name: 'openedbuild',
                prop: 'openedbuild',
                dataType: 'SMCODELIST',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
            },
            {
                name: 'deadline',
                prop: 'deadline',
                dataType: 'DATE',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'os',
                prop: 'os',
                dataType: 'SSCODELIST',
            },
            {
                name: 'browser',
                prop: 'browser',
                dataType: 'SSCODELIST',
            },
            {
                name: 'title',
                prop: 'title',
                dataType: 'TEXT',
            },
            {
                name: 'severity',
                prop: 'severity',
                dataType: 'NSCODELIST',
            },
            {
                name: 'pri',
                prop: 'pri',
                dataType: 'NSCODELIST',
            },
            {
                name: 'steps',
                prop: 'steps',
                dataType: 'LONGTEXT',
            },
            {
                name: 'task',
                prop: 'task',
                dataType: 'PICKUP',
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
                name: 'taskname',
                prop: 'taskname',
                dataType: 'PICKUPTEXT',
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
                name: 'bug',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobNewFROMModel;