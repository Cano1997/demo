/**
 * MobWeekEdit 部件模型
 *
 * @export
 * @class MobWeekEditModel
 */
export class MobWeekEditModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobWeekEditModel
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
                name: 'thisweektask',
                prop: 'thisweektask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'workthisweek',
                prop: 'workthisweek',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'nextweektask',
                prop: 'nextweektask',
                dataType: 'SMCODELIST',
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
                name: 'files',
                prop: 'files',
                dataType: 'TEXT',
            },
            {
                name: 'reportto',
                prop: 'reportto',
                dataType: 'SSCODELIST',
            },
            {
                name: 'reporttopk',
                prop: 'reporttopk',
                dataType: 'TEXT',
            },
            {
                name: 'mailto',
                prop: 'mailto',
                dataType: 'SMCODELIST',
            },
            {
                name: 'ibz_weeklyid',
                prop: 'ibzweeklyid',
                dataType: 'ACID',
            },
            {
                name: 'account',
                prop: 'account',
                dataType: 'SSCODELIST',
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
export default MobWeekEditModel;