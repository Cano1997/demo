/**
 * DailyInfoMob 部件模型
 *
 * @export
 * @class DailyInfoMobModel
 */
export class DailyInfoMobModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DailyInfoMobModel
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
                name: 'account',
                prop: 'account',
                dataType: 'SSCODELIST',
            },
            {
                name: 'ibzdailyname',
                prop: 'ibzdailyname',
                dataType: 'TEXT',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
            },
            {
                name: 'worktoday',
                prop: 'worktoday',
                dataType: 'HTMLTEXT',
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
                name: 'ibz_dailyid',
                prop: 'ibzdailyid',
                dataType: 'ACID',
            },
            {
                name: 'todaytask',
                prop: 'todaytask',
                dataType: 'SMCODELIST',
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
export default DailyInfoMobModel;