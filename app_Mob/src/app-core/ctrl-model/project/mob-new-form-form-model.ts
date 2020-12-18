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
                name: 'srforikey',
            },
            {
                name: 'srfkey',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'srfmajortext',
                prop: 'name',
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
                name: 'name',
                prop: 'name',
                dataType: 'TEXT',
            },
            {
                name: 'code',
                prop: 'code',
                dataType: 'TEXT',
            },
            {
                name: 'begin',
                prop: 'begin',
                dataType: 'DATE',
            },
            {
                name: 'period',
                prop: 'period',
                dataType: 'SSCODELIST',
            },
            {
                name: 'end',
                prop: 'end',
                dataType: 'DATE',
            },
            {
                name: 'days',
                prop: 'days',
                dataType: 'INT',
            },
            {
                name: 'team',
                prop: 'team',
                dataType: 'TEXT',
            },
            {
                name: 'type',
                prop: 'type',
                dataType: 'SSCODELIST',
            },
            {
                name: 'products',
                prop: 'products',
                dataType: 'TEXT',
            },
            {
                name: 'srfarray',
                prop: 'srfarray',
                dataType: 'TEXT',
            },
            {
                name: 'branchs',
                prop: 'branchs',
                dataType: 'TEXT',
            },
            {
                name: 'plans',
                prop: 'plans',
                dataType: 'TEXT',
            },
            {
                name: 'formitemex1',
            },
            {
                name: 'desc',
                prop: 'desc',
                dataType: 'LONGTEXT',
            },
            {
                name: 'acl',
                prop: 'acl',
                dataType: 'SSCODELIST',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'project',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobNewFormModel;