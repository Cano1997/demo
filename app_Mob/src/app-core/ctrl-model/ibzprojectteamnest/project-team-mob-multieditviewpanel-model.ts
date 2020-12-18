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
        name: 'ibzprojectteamnest',
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
      {
        name: 'project',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default ProjectTeamMobModel;