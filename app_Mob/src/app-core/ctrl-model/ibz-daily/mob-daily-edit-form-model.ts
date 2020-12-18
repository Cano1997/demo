/**
 * MobDailyEdit 部件模型
 *
 * @export
 * @class MobDailyEditModel
 */
export class MobDailyEditModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobDailyEditModel
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
                prop: 'ibzdailyid',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'ibzdailyname',
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
                name: 'ibz_dailyname',
                prop: 'ibzdailyname',
                dataType: 'TEXT',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
            },
            {
                name: 'todaytask',
                prop: 'todaytask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'worktoday',
                prop: 'worktoday',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'tomorrowplanstask',
                prop: 'tomorrowplanstask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'planstomorrow',
                prop: 'planstomorrow',
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
                name: 'ibz_dailyid',
                prop: 'ibzdailyid',
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
                name: 'ibzdaily',
                prop: 'ibzdailyid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobDailyEditModel;