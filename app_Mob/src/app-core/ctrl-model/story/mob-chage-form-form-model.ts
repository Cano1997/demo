/**
 * MobChageForm 部件模型
 *
 * @export
 * @class MobChageFormModel
 */
export class MobChageFormModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobChageFormModel
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
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'status',
                prop: 'status',
                dataType: 'SSCODELIST',
            },
            {
                name: 'version',
                prop: 'version',
                dataType: 'INT',
            },
            {
                name: 'assignedtopk',
                prop: 'assignedtopk',
                dataType: 'TEXT',
            },
            {
                name: 'reviewedby',
                prop: 'reviewedby',
                dataType: 'SMCODELIST',
            },
            {
                name: 'neednotreview',
                prop: 'neednotreview',
                dataType: 'SMCODELIST',
            },
            {
                name: 'title',
                prop: 'title',
                dataType: 'TEXT',
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
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'files',
                prop: 'files',
                dataType: 'TEXT',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
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
export default MobChageFormModel;