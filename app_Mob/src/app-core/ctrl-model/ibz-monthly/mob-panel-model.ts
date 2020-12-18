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
        name: 'ibzmonthly',
        prop: 'ibzmonthlyid',
      },
      {
        name: 'createman',
      },
      {
        name: 'updateman',
      },
      {
        name: 'createdate',
      },
      {
        name: 'ibzmonthlyname',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'date',
      },
      {
        name: 'account',
      },
      {
        name: 'workthismonth',
      },
      {
        name: 'plansnextmonth',
      },
      {
        name: 'reportto',
      },
      {
        name: 'mailto',
      },
      {
        name: 'comment',
      },
      {
        name: 'thismonthtask',
      },
      {
        name: 'nextmonthplanstask',
      },
      {
        name: 'files',
      },
      {
        name: 'issubmit',
      },
      {
        name: 'updatemanname',
      },
      {
        name: 'reportstatus',
      },
      {
        name: 'createmanname',
      },
    ]
  }

}
// 默认导出
export default MobModel;