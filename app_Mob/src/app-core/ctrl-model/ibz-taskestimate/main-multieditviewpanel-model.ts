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
        name: 'account',
      },
      {
        name: 'left',
      },
      {
        name: 'consumed',
      },
      {
        name: 'ibztaskestimate',
        prop: 'id',
      },
      {
        name: 'date',
      },
      {
        name: 'work',
      },
      {
        name: 'task',
      },
      {
        name: 'dates',
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