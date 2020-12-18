/**
 * MobStartForm 部件模型
 *
 * @export
 * @class MobStartFormModel
 */
export class MobStartFormModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobStartFormModel
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
                name: 'realstarted',
                prop: 'realstarted',
                dataType: 'DATE',
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
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
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
export default MobStartFormModel;