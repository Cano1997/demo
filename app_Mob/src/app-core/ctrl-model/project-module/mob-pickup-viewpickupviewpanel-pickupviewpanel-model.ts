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
        name: 'type',
      },
      {
        name: 'collector',
      },
      {
        name: 'projectmodule',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'path',
      },
      {
        name: 'owner',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'name',
      },
      {
        name: 'grade',
      },
      {
        name: 'order',
      },
      {
        name: 'branch',
      },
      {
        name: 'parent',
      },
      {
        name: 'root',
      },
      {
        name: 'rootname',
      },
      {
        name: 'parentname',
      },
      {
        name: 'orderpk',
      },
    ]
  }

}
// 默认导出
export default MobPickupViewpickupviewpanelModel;