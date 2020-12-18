/**
 * MobMain 部件模型
 *
 * @export
 * @class MobMainModel
 */
export class MobMainModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobMainModel
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
                prop: 'sysupdatelogid',
                dataType: 'GUID',
            },
            {
                name: 'srfmajortext',
                prop: 'sysupdatelogname',
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
                name: 'sys_update_logname',
                prop: 'sysupdatelogname',
                dataType: 'TEXT',
            },
            {
                name: 'update',
                prop: 'update',
                dataType: 'DATE',
            },
            {
                name: 'updesc',
                prop: 'updesc',
                dataType: 'HTMLTEXT',
            },
            {
                name: 'sys_update_logid',
                prop: 'sysupdatelogid',
                dataType: 'GUID',
            },
            {
                name: 'sysupdatelog',
                prop: 'sysupdatelogid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;