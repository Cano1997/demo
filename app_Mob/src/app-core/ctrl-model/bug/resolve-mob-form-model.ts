/**
 * ResolveMob 部件模型
 *
 * @export
 * @class ResolveMobModel
 */
export class ResolveMobModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ResolveMobModel
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
                name: 'product',
                prop: 'product',
                dataType: 'PICKUP',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'resolution',
                prop: 'resolution',
                dataType: 'SSCODELIST',
            },
            {
                name: 'resolvedbuild',
                prop: 'resolvedbuild',
                dataType: 'SSCODELIST',
            },
            {
                name: 'resolveddate',
                prop: 'resolveddate',
                dataType: 'DATETIME',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
            },
            {
                name: 'project',
                prop: 'project',
                dataType: 'PICKUP',
            },
            {
                name: 'files',
                prop: 'files',
                dataType: 'TEXT',
            },
            {
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
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
export default ResolveMobModel;