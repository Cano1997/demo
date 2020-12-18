/**
 * ProjectTeam 部件模型
 *
 * @export
 * @class ProjectTeamModel
 */
export class ProjectTeamModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProjectTeamModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'join',
      },
      {
        name: 'account',
      },
      {
        name: 'hours',
      },
      {
        name: 'left',
      },
      {
        name: 'days',
      },
      {
        name: 'projectteam',
        prop: 'id',
      },
      {
        name: 'consumed',
      },
      {
        name: 'order',
      },
      {
        name: 'estimate',
      },
      {
        name: 'limited',
      },
      {
        name: 'role',
      },
      {
        name: 'type',
      },
      {
        name: 'total',
      },
      {
        name: 'root',
      },
      {
        name: 'username',
      },
      {
        name: 'taskcnt',
      },
    ]
  }

}
// 默认导出
export default ProjectTeamModel;