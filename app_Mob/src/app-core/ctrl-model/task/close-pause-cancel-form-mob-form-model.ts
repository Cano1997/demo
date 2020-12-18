/**
 * ClosePauseCancelFormMob 部件模型
 *
 * @export
 * @class ClosePauseCancelFormMobModel
 */
export class ClosePauseCancelFormMobModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ClosePauseCancelFormMobModel
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
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'noticeusers',
                prop: 'noticeusers',
                dataType: 'TEXT',
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
export default ClosePauseCancelFormMobModel;