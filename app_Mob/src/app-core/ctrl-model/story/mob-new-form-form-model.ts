/**
 * MobNewForm 部件模型
 *
 * @export
 * @class MobNewFormModel
 */
export class MobNewFormModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobNewFormModel
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
                name: 'project',
                prop: 'project',
                dataType: 'BIGINT',
            },
            {
                name: 'product',
                prop: 'product',
                dataType: 'PICKUP',
            },
            {
                name: 'module',
                prop: 'module',
                dataType: 'PICKUP',
            },
            {
                name: 'prodoctname',
                prop: 'productname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'branch',
                prop: 'branch',
                dataType: 'PICKUP',
            },
            {
                name: 'modulename',
                prop: 'modulename',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'plan',
                prop: 'plan',
                dataType: 'LONGTEXT',
            },
            {
                name: 'source',
                prop: 'source',
                dataType: 'SSCODELIST',
            },
            {
                name: 'sourcenote',
                prop: 'sourcenote',
                dataType: 'TEXT',
            },
            {
                name: 'reviewedby',
                prop: 'reviewedby',
                dataType: 'SMCODELIST',
            },
            {
                name: 'assignedtopk',
                prop: 'assignedtopk',
                dataType: 'TEXT',
            },
            {
                name: 'neednotreview',
                prop: 'neednotreview',
                dataType: 'SMCODELIST',
            },
            {
                name: 'title',
                prop: 'title',
                dataType: 'TEXT',
            },
            {
                name: 'pri',
                prop: 'pri',
                dataType: 'NSCODELIST',
            },
            {
                name: 'storypoints',
                prop: 'storypoints',
                dataType: 'SSCODELIST',
            },
            {
                name: 'estimate',
                prop: 'estimate',
                dataType: 'FLOAT',
            },
            {
                name: 'spec',
                prop: 'spec',
                dataType: 'TEXT',
            },
            {
                name: 'verify',
                prop: 'verify',
                dataType: 'TEXT',
            },
            {
                name: 'mailto',
                prop: 'mailto',
                dataType: 'SMCODELIST',
            },
            {
                name: 'mailtopk',
                prop: 'mailtopk',
                dataType: 'SMCODELIST',
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
export default MobNewFormModel;