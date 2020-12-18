/**
 * ReviewMob 部件模型
 *
 * @export
 * @class ReviewMobModel
 */
export class ReviewMobModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ReviewMobModel
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
                name: 'revieweddate',
                prop: 'revieweddate',
                dataType: 'DATE',
            },
            {
                name: 'result',
                prop: 'result',
                dataType: 'SSCODELIST',
            },
            {
                name: 'pri',
                prop: 'pri',
                dataType: 'NSCODELIST',
            },
            {
                name: 'estimate',
                prop: 'estimate',
                dataType: 'FLOAT',
            },
            {
                name: 'preversion',
                prop: 'preversion',
                dataType: 'INT',
            },
            {
                name: 'closedreason',
                prop: 'closedreason',
                dataType: 'SSCODELIST',
            },
            {
                name: 'assignedtopk',
                prop: 'assignedtopk',
                dataType: 'TEXT',
            },
            {
                name: 'version',
                prop: 'version',
                dataType: 'INT',
            },
            {
                name: 'reviewedby',
                prop: 'reviewedby',
                dataType: 'SMCODELIST',
            },
            {
                name: 'comment',
                prop: 'comment',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'assignedto',
                prop: 'assignedto',
                dataType: 'TEXT',
            },
            {
                name: 'story',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default ReviewMobModel;