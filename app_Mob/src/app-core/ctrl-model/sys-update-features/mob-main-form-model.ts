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
                prop: 'sysupdatefeaturesid',
                dataType: 'GUID',
            },
            {
                name: 'srfmajortext',
                prop: 'sysupdatefeaturesname',
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
                name: 'sys_update_featuresname',
                prop: 'sysupdatefeaturesname',
                dataType: 'TEXT',
            },
            {
                name: 'createman',
                prop: 'createman',
                dataType: 'TEXT',
            },
            {
                name: 'createdate',
                prop: 'createdate',
                dataType: 'DATETIME',
            },
            {
                name: 'updateman',
                prop: 'updateman',
                dataType: 'TEXT',
            },
            {
                name: 'updatedate',
                prop: 'updatedate',
                dataType: 'DATETIME',
            },
            {
                name: 'sys_update_featuresid',
                prop: 'sysupdatefeaturesid',
                dataType: 'GUID',
            },
            {
                name: 'sysupdatefeatures',
                prop: 'sysupdatefeaturesid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;