/**
 * MobPickupViewpickupviewpanel 部件模型
 *
 * @export
 * @class MobPickupViewpickupviewpanelModel
 */
export class MobPickupViewpickupviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobPickupViewpickupviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'productlinename',
      },
      {
        name: 'productline',
        prop: 'productlineid',
      },
      {
        name: 'updateman',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'createdate',
      },
      {
        name: 'createman',
      },
    ]
  }

}
// 默认导出
export default MobPickupViewpickupviewpanelModel;