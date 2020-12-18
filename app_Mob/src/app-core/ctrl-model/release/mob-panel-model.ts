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
        name: 'stories',
      },
      {
        name: 'marker',
      },
      {
        name: 'release',
        prop: 'id',
      },
      {
        name: 'leftbugs',
      },
      {
        name: 'bugs',
      },
      {
        name: 'deleted',
      },
      {
        name: 'name',
      },
      {
        name: 'date',
      },
      {
        name: 'status',
      },
      {
        name: 'substatus',
      },
      {
        name: 'desc',
      },
      {
        name: 'buildname',
      },
      {
        name: 'product',
      },
      {
        name: 'build',
      },
      {
        name: 'branch',
      },
      {
        name: 'productname',
      },
      {
        name: 'files',
      },
      {
        name: 'backgroundid',
      },
      {
        name: 'sqlid',
      },
      {
        name: 'frontapplication',
      },
      {
        name: 'rebuild',
      },
      {
        name: 'releasetype',
      },
      {
        name: 'builder',
      },
      {
        name: 'builddate',
      },
      {
        name: 'noticeusers',
      },
    ]
  }

}
// 默认导出
export default MobModel;