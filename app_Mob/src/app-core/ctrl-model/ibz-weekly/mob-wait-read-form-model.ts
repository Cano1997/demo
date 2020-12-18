/**
 * MobWaitRead 部件模型
 *
 * @export
 * @class MobWaitReadModel
 */
export class MobWaitReadModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobWaitReadModel
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
                prop: 'updatedate',
                dataType: 'DATETIME',
            },
            {
                name: 'srforikey',
            },
            {
                name: 'srfkey',
                prop: 'ibzweeklyid',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'ibzweeklyname',
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
                name: 'account',
                prop: 'account',
                dataType: 'SSCODELIST',
            },
            {
                name: 'ibz_weeklyname',
                prop: 'ibzweeklyname',
                dataType: 'TEXT',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
            },
            {
                name: 'workthisweek',
                prop: 'workthisweek',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'plannextweek',
                prop: 'plannextweek',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'reportto',
                prop: 'reportto',
                dataType: 'SSCODELIST',
            },
            {
                name: 'mailto',
                prop: 'mailto',
                dataType: 'SMCODELIST',
            },
            {
                name: 'thisweektask',
                prop: 'thisweektask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'nextweektask',
                prop: 'nextweektask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'ibz_weeklyid',
                prop: 'ibzweeklyid',
                dataType: 'ACID',
            },
            {
                name: 'issubmit',
                prop: 'issubmit',
                dataType: 'SSCODELIST',
            },
            {
                name: 'ibzweekly',
                prop: 'ibzweeklyid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobWaitReadModel;