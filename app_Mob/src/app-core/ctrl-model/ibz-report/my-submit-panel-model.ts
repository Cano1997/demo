/**
 * MySubmit 部件模型
 *
 * @export
 * @class MySubmitModel
 */
export class MySubmitModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MySubmitModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'updatedate',
      },
      {
        name: 'worktoday',
      },
      {
        name: 'todaytask',
      },
      {
        name: 'tomorrowplanstask',
      },
      {
        name: 'createman',
      },
      {
        name: 'reportto',
      },
      {
        name: 'createdate',
      },
      {
        name: 'date',
      },
      {
        name: 'issubmit',
      },
      {
        name: 'updatemanname',
      },
      {
        name: 'files',
      },
      {
        name: 'updateman',
      },
      {
        name: 'reportstatus',
      },
      {
        name: 'comment',
      },
      {
        name: 'mailto',
      },
      {
        name: 'ibzreport',
        prop: 'ibzdailyid',
      },
      {
        name: 'planstomorrow',
      },
      {
        name: 'account',
      },
      {
        name: 'createmanname',
      },
      {
        name: 'ibzdailyname',
      },
      {
        name: 'type',
      },
      {
        name: 'dailycnt',
      },
      {
        name: 'monthlycnt',
      },
      {
        name: 'submittime',
      },
      {
        name: 'reportlycnt',
      },
    ]
  }

}
// 默认导出
export default MySubmitModel;