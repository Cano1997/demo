/**
 * EditForm 部件模型
 *
 * @export
 * @class EditFormModel
 */
export class EditFormModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof EditFormModel
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
                name: 'ibz_weeklyid',
                prop: 'ibzweeklyid',
                dataType: 'ACID',
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
export default EditFormModel;