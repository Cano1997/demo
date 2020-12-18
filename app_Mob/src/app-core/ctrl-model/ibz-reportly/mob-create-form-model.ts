/**
 * MobCreate 部件模型
 *
 * @export
 * @class MobCreateModel
 */
export class MobCreateModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobCreateModel
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
                name: 'ibz_reportlyname',
                prop: 'ibzreportlyname',
                dataType: 'TEXT',
            },
            {
                name: 'content',
                prop: 'content',
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
                name: 'ibz_reportlyid',
                prop: 'ibzreportlyid',
                dataType: 'ACID',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
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
                name: 'ibzreportly',
                prop: 'ibzreportlyid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobCreateModel;