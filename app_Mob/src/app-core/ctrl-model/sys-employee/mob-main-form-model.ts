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
                prop: 'userid',
                dataType: 'TEXT',
            },
            {
                name: 'srfmajortext',
                prop: 'personname',
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
                name: 'usericon',
                prop: 'usericon',
                dataType: 'TEXT',
            },
            {
                name: 'addr',
                prop: 'addr',
                dataType: 'TEXT',
            },
            {
                name: 'avatar',
                prop: 'avatar',
                dataType: 'TEXT',
            },
            {
                name: 'bcode',
                prop: 'bcode',
                dataType: 'TEXT',
            },
            {
                name: 'createdate',
                prop: 'createdate',
                dataType: 'DATETIME',
            },
            {
                name: 'createman',
                prop: 'createman',
                dataType: 'TEXT',
            },
            {
                name: 'domains',
                prop: 'domains',
                dataType: 'TEXT',
            },
            {
                name: 'email',
                prop: 'email',
                dataType: 'TEXT',
            },
            {
                name: 'enable',
                prop: 'enable',
                dataType: 'YESNO',
            },
            {
                name: 'ipaddr',
                prop: 'ipaddr',
                dataType: 'TEXT',
            },
            {
                name: 'lang',
                prop: 'lang',
                dataType: 'TEXT',
            },
            {
                name: 'mdeptcode',
                prop: 'mdeptcode',
                dataType: 'PICKUPDATA',
            },
            {
                name: 'mdeptid',
                prop: 'mdeptid',
                dataType: 'PICKUP',
            },
            {
                name: 'nickname',
                prop: 'nickname',
                dataType: 'TEXT',
            },
            {
                name: 'showorder',
                prop: 'showorder',
                dataType: 'INT',
            },
            {
                name: 'memo',
                prop: 'memo',
                dataType: 'TEXT',
            },
            {
                name: 'userid',
                prop: 'userid',
                dataType: 'TEXT',
            },
            {
                name: 'username',
                prop: 'username',
                dataType: 'TEXT',
            },
            {
                name: 'updateman',
                prop: 'updateman',
                dataType: 'TEXT',
            },
            {
                name: 'usercode',
                prop: 'usercode',
                dataType: 'TEXT',
            },
            {
                name: 'updatedate',
                prop: 'updatedate',
                dataType: 'DATETIME',
            },
            {
                name: 'sex',
                prop: 'sex',
                dataType: 'SSCODELIST',
            },
            {
                name: 'phone',
                prop: 'phone',
                dataType: 'TEXT',
            },
            {
                name: 'reserver',
                prop: 'reserver',
                dataType: 'TEXT',
            },
            {
                name: 'orgname',
                prop: 'orgname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'personname',
                prop: 'personname',
                dataType: 'TEXT',
            },
            {
                name: 'mdeptname',
                prop: 'mdeptname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'orgid',
                prop: 'orgid',
                dataType: 'PICKUP',
            },
            {
                name: 'orgcode',
                prop: 'orgcode',
                dataType: 'PICKUPDATA',
            },
            {
                name: 'sysemployee',
                prop: 'userid',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default MobMainModel;