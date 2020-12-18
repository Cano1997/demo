/**
 * MobTabExpViewtabexppanel 部件模型
 *
 * @export
 * @class MobTabExpViewtabexppanelModel
 */
export class MobTabExpViewtabexppanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobTabExpViewtabexppanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'createman',
      },
      {
        name: 'ibzfavorites',
        prop: 'ibzfavoritesid',
      },
      {
        name: 'createdate',
      },
      {
        name: 'ibzfavoritesname',
      },
      {
        name: 'updateman',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'objectid',
      },
      {
        name: 'account',
      },
      {
        name: 'type',
      },
    ]
  }

}
// 默认导出
export default MobTabExpViewtabexppanelModel;