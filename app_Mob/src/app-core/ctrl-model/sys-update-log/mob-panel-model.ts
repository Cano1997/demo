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
        name: 'sysupdatelog',
        prop: 'sysupdatelogid',
      },
      {
        name: 'sysupdatelogname',
      },
      {
        name: 'updateman',
      },
      {
        name: 'createman',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'update',
      },
      {
        name: 'updesc',
      },
      {
        name: 'latestupdate',
      },
      {
        name: 'updatefeatures',
      },
      {
        name: 'updatebranch',
      },
    ]
  }

}
// 默认导出
export default MobModel;