/**
 * AllTrendsMob 部件模型
 *
 * @export
 * @class AllTrendsMobModel
 */
export class AllTrendsMobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof AllTrendsMobModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'extra',
      },
      {
        name: 'objecttype',
      },
      {
        name: 'action',
        prop: 'id',
      },
      {
        name: 'comment',
      },
      {
        name: 'read',
      },
      {
        name: 'action',
      },
      {
        name: 'date',
      },
      {
        name: 'product',
      },
      {
        name: 'objectid',
      },
      {
        name: 'actor',
      },
      {
        name: 'project',
      },
      {
        name: 'lastcomment',
      },
      {
        name: 'actionmanner',
      },
      {
        name: 'isactorss',
      },
      {
        name: 'date1',
      },
      {
        name: 'today',
      },
      {
        name: 'yesterday',
      },
      {
        name: 'thisweek',
      },
      {
        name: 'lastweek',
      },
      {
        name: 'thismonth',
      },
      {
        name: 'lastmonth',
      },
      {
        name: 'srfkey',
      },
      {
        name: 'noticeusers',
      },
      {
        name: 'files',
      },
    ]
  }

}
// 默认导出
export default AllTrendsMobModel;