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
        name: 'title',
      },
      {
        name: 'productplan',
        prop: 'id',
      },
      {
        name: 'begin',
      },
      {
        name: 'desc',
      },
      {
        name: 'end',
      },
      {
        name: 'deleted',
      },
      {
        name: 'order',
      },
      {
        name: 'parentname',
      },
      {
        name: 'branch',
      },
      {
        name: 'parent',
      },
      {
        name: 'product',
      },
      {
        name: 'statuss',
      },
      {
        name: 'future',
      },
      {
        name: 'delta',
      },
      {
        name: 'oldtitle',
      },
      {
        name: 'storycnt',
      },
      {
        name: 'bugcnt',
      },
      {
        name: 'isexpired',
      },
      {
        name: 'estimatecnt',
      },
      {
        name: 'beginstr',
      },
      {
        name: 'endstr',
      },
      {
        name: 'plantemplet',
      },
    ]
  }

}
// 默认导出
export default MobTabExpViewtabexppanelModel;