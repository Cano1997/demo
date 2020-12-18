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
                name: 'projectname',
                prop: 'projectname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'openedbuild',
                prop: 'openedbuild',
                dataType: 'SMCODELIST',
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
                name: 'deadline',
                prop: 'deadline',
                dataType: 'DATE',
            },
            {
                name: 'repotype',
                prop: 'repotype',
                dataType: 'PICKUPDATA',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'resolution',
                prop: 'resolution',
                dataType: 'SSCODELIST',
            },
            {
                name: 'resolveddate',
                prop: 'resolveddate',
                dataType: 'DATETIME',
            },
            {
                name: 'resolvedby',
                prop: 'resolvedby',
                dataType: 'SSCODELIST',
            },
            {
                name: 'steps',
                prop: 'steps',
                dataType: 'LONGTEXT',
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
export default MobMainModel;