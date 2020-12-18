/**
 * MobInfo 部件模型
 *
 * @export
 * @class MobInfoModel
 */
export class MobInfoModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobInfoModel
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
                name: 'usercode',
                prop: 'usercode',
                dataType: 'TEXT',
            },
            {
                name: 'personname',
                prop: 'personname',
                dataType: 'TEXT',
            },
            {
                name: 'username',
                prop: 'username',
                dataType: 'TEXT',
            },
            {
                name: 'orgname',
                prop: 'orgname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'mdeptname',
                prop: 'mdeptname',
                dataType: 'PICKUPTEXT',
            },
            {
                name: 'bcode',
                prop: 'bcode',
                dataType: 'TEXT',
            },
            {
                name: 'nickname',
                prop: 'nickname',
                dataType: 'TEXT',
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
                name: 'avatar',
                prop: 'avatar',
                dataType: 'TEXT',
            },
            {
                name: 'email',
                prop: 'email',
                dataType: 'TEXT',
            },
            {
                name: 'userid',
                prop: 'userid',
                dataType: 'TEXT',
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
export default MobInfoModel;