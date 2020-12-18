/**
 * Createmob 部件模型
 *
 * @export
 * @class CreatemobModel
 */
export class CreatemobModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof CreatemobModel
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
                prop: 'lastediteddate',
                dataType: 'DATETIME',
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
                prop: 'title',
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
                name: 'title',
                prop: 'title',
                dataType: 'TEXT',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'stage',
                prop: 'stage',
                dataType: 'SMCODELIST',
            },
            {
                name: 'precondition',
                prop: 'precondition',
                dataType: 'LONGTEXT',
            },
            {
                name: 'version',
                prop: 'version',
                dataType: 'INT',
            },
            {
                name: 'keywords',
                prop: 'keywords',
                dataType: 'TEXT',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'case',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default CreatemobModel;