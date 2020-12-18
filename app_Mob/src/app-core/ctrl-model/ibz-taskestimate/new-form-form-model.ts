/**
 * NewForm 部件模型
 *
 * @export
 * @class NewFormModel
 */
export class NewFormModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof NewFormModel
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
                name: 'srforikey',
            },
            {
                name: 'srfkey',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'id',
                dataType: 'ACID',
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
                name: 'dates',
                prop: 'dates',
                dataType: 'DATE',
            },
            {
                name: 'consumed',
                prop: 'consumed',
                dataType: 'FLOAT',
            },
            {
                name: 'left',
                prop: 'left',
                dataType: 'FLOAT',
            },
            {
                name: 'work',
                prop: 'work',
                dataType: 'LONGTEXT',
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
            {
                name: 'ibztaskestimate',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default NewFormModel;