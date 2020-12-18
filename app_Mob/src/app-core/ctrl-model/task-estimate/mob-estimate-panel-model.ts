/**
 * MobEstimate 部件模型
 *
 * @export
 * @class MobEstimateModel
 */
export class MobEstimateModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobEstimateModel
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
        name: 'taskestimate',
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
export default MobEstimateModel;