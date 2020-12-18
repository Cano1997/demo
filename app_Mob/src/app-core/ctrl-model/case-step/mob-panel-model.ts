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
        name: 'type',
      },
      {
        name: 'casestep',
        prop: 'id',
      },
      {
        name: 'desc',
      },
      {
        name: 'expect',
      },
      {
        name: 'version',
      },
      {
        name: 'ibizcase',
      },
      {
        name: 'parent',
      },
      {
        name: 'reals',
      },
      {
        name: 'steps',
      },
      {
        name: 'files',
      },
      {
        name: 'runid',
      },
      {
        name: 'casestepid',
      },
      {
        name: 'case',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}
// 默认导出
export default MobModel;