/**
 * Mob 部件模型
 *
 * @export
 * @class MobModel
 */
export class MobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'role',
      },
      {
        name: 'root',
      },
      {
        name: 'limited',
      },
      {
        name: 'total',
      },
      {
        name: 'username',
      },
      {
        name: 'order',
      },
      {
        name: 'days',
      },
      {
        name: 'type',
      },
      {
        name: 'estimate',
      },
      {
        name: 'account',
      },
      {
        name: 'consumed',
      },
      {
        name: 'taskteam',
        prop: 'id',
      },
      {
        name: 'join',
      },
      {
        name: 'hours',
      },
      {
        name: 'left',
      },
      {
        name: 'task',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default MobModel;