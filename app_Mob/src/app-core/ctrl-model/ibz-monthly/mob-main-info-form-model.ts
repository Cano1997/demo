/**
 * MobMainInfo 部件模型
 *
 * @export
 * @class MobMainInfoModel
 */
export class MobMainInfoModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobMainInfoModel
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
                name: 'account',
                prop: 'account',
                dataType: 'SSCODELIST',
            },
            {
                name: 'createmanname',
                prop: 'createmanname',
                dataType: 'TEXT',
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
                name: 'workthismonth',
                prop: 'workthismonth',
                dataType: 'HTMLTEXT',
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
                name: 'thismonthtask',
                prop: 'thismonthtask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'nextmonthplanstask',
                prop: 'nextmonthplanstask',
                dataType: 'SMCODELIST',
            },
            {
                name: 'ibz_monthlyid',
                prop: 'ibzmonthlyid',
                dataType: 'ACID',
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
export default MobMainInfoModel;