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
        name: 'name',
      },
      {
        name: 'addeddate',
      },
      {
        name: 'testsuite',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'lasteditedby',
      },
      {
        name: 'type',
      },
      {
        name: 'lastediteddate',
      },
      {
        name: 'addedby',
      },
      {
        name: 'desc',
      },
      {
        name: 'product',
      },
      {
        name: 'casecnt',
      },
    ]
  }

}
// 默认导出
export default MobTabExpViewtabexppanelModel;