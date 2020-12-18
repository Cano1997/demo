/**
 * UserCenter 部件模型
 *
 * @export
 * @class UserCenterModel
 */
export class UserCenterModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof UserCenterModel
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
                prop: 'realname',
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
                name: 'realname',
                prop: 'realname',
                dataType: 'TEXT',
            },
            {
                name: 'gender',
                prop: 'gender',
                dataType: 'SSCODELIST',
            },
            {
                name: 'account',
                prop: 'account',
                dataType: 'TEXT',
            },
            {
                name: 'address',
                prop: 'address',
                dataType: 'TEXT',
            },
            {
                name: 'dingding',
                prop: 'dingding',
                dataType: 'TEXT',
            },
            {
                name: 'phone',
                prop: 'phone',
                dataType: 'TEXT',
            },
            {
                name: 'mobile',
                prop: 'mobile',
                dataType: 'TEXT',
            },
            {
                name: 'role',
                prop: 'role',
                dataType: 'SSCODELIST',
            },
            {
                name: 'qq',
                prop: 'qq',
                dataType: 'TEXT',
            },
            {
                name: 'weixin',
                prop: 'weixin',
                dataType: 'TEXT',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'user',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default UserCenterModel;