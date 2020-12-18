/**
 * CompleteFormMob 部件模型
 *
 * @export
 * @class CompleteFormMobModel
 */
export class CompleteFormMobModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof CompleteFormMobModel
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
                name: 'consumed',
                prop: 'consumed',
                dataType: 'FLOAT',
            },
            {
                name: 'currentconsumed',
                prop: 'currentconsumed',
                dataType: 'FLOAT',
            },
            {
                name: 'totaltime',
                prop: 'totaltime',
                dataType: 'FLOAT',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
            },
            {
                name: 'finisheddate',
                prop: 'finisheddate',
                dataType: 'DATE',
            },
            {
                name: 'files',
            },
            {
                name: 'multiple',
                prop: 'multiple',
                dataType: 'TEXT',
            },
            {
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
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
export default CompleteFormMobModel;