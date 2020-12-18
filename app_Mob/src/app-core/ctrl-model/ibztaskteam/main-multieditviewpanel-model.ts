/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export class MainModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainModel
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
        name: 'ibztaskteam',
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
export default MainModel;