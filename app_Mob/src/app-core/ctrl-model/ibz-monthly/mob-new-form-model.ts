/**
 * MobNew 部件模型
 *
 * @export
 * @class MobNewModel
 */
export class MobNewModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobNewModel
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
                prop: 'ibzmonthlyid',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'ibzmonthlyname',
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
                name: 'ibzmonthlyname',
                prop: 'ibzmonthlyname',
                dataType: 'TEXT',
            },
            {
                name: 'date',
                prop: 'date',
                dataType: 'DATE',
            },
            {
                name: 'thismonthtask',
                prop: 'thismonthtask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'workthismonth',
                prop: 'workthismonth',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'nextmonthplanstask',
                prop: 'nextmonthplanstask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'plansnextmonth',
                prop: 'plansnextmonth',
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
                name: 'ibz_monthlyid',
                prop: 'ibzmonthlyid',
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
                name: 'ibzmonthly',
                prop: 'ibzmonthlyid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobNewModel;