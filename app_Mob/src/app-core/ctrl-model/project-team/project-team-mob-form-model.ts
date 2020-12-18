/**
 * ProjectTeamMob 部件模型
 *
 * @export
 * @class ProjectTeamMobModel
 */
export class ProjectTeamMobModel {

    /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProjectTeamMobModel
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
                prop: 'account',
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
                name: 'account',
                prop: 'account',
                dataType: 'TEXT',
            },
            {
                name: 'role',
                prop: 'role',
                dataType: 'TEXT',
            },
            {
                name: 'join',
                prop: 'join',
                dataType: 'DATE',
            },
            {
                name: 'days',
                prop: 'days',
                dataType: 'INT',
            },
            {
                name: 'hours',
                prop: 'hours',
                dataType: 'FLOAT',
            },
            {
                name: 'total',
                prop: 'total',
                dataType: 'INT',
            },
            {
                name: 'limited',
                prop: 'limited',
                dataType: 'SSCODELIST',
            },
            {
                name: 'id',
                prop: 'id',
                dataType: 'ACID',
            },
            {
                name: 'projectteam',
                prop: 'id',
                dataType: 'FONTKEY',
            },
        ];
    }

}
// 默认导出
export default ProjectTeamMobModel;