/**
 * MobReportlyDetail 部件模型
 *
 * @export
 * @class MobReportlyDetailModel
 */
export class MobReportlyDetailModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobReportlyDetailModel
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
                prop: 'ibzreportlyid',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'ibzreportlyname',
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
                name: 'ibzreportlyname',
                prop: 'ibzreportlyname',
                dataType: 'TEXT',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
            },
            {
                name: 'content',
                prop: 'content',
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
                name: 'ibz_reportlyid',
                prop: 'ibzreportlyid',
                dataType: 'ACID',
            },
            {
                name: 'issubmit',
                prop: 'issubmit',
                dataType: 'SSCODELIST',
            },
            {
                name: 'ibzreportly',
                prop: 'ibzreportlyid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobReportlyDetailModel;