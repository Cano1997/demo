import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import { Vue, Prop } from 'vue-property-decorator';
import { ControlBase } from './ControlBase'
/**
 * 部件基类
 *
 * @export
 * @class ControlBase
 * @extends {Vue}
 */
export class MOBMDCTRLBase extends ControlBase {


/**
     * 视图类型
     *
     * @type {string}
     * @memberof MOBMDCTRLBase
     */
    @Prop() protected viewType?: string | 'DEMOBMDVIEW' | 'DEMOBMDVIEW9' | 'DEMOBWFMDVIEW';

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MOBMDCTRLBase
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MOBMDCTRLBase
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MOBMDCTRLBase
     */
    @Prop() protected fetchAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MOBMDCTRLBase
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MOBMDCTRLBase
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MOBMDCTRLBase
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MOBMDCTRLBase
     */
    @Prop() protected createAction!: string;

    /**
    *上级传递的选中项
    *@type {Array}
    *@memberof MOBMDCTRLBase
    */
   @Prop() public selectedData?:Array<any>;


   /**
   * 新建打开视图
   *
   * @type {Function}
   * @memberof MOBMDCTRLBase
   */
   @Prop() public newdata?: Function; 


   /**
   * 打开视图
   *
   * @type {Function}
   * @memberof MOBMDCTRLBase
   */
   @Prop() public opendata?: Function; 


   /**
   * 当前选中数组
   *
   * @type {array}
   * @memberof MOBMDCTRLBase
   */
   public  selectdata :any = [];

   /**
   * 关闭行为
   *
   * @type {Function}
   * @memberof MOBMDCTRLBase
   */
   @Prop() public close?:Function;


   /**
   * 是否为临时模式
   *
   * @type {boolean}
   * @memberof MOBMDCTRLBase
   */
   @Prop({ default: false}) public isTempMode?:boolean;

   /**
    * 存放多数据选择数组（多选）
    *
    * @type {array}
    * @memberof MOBMDCTRLBase
    */
   public checkboxList:Array<string> = [];

   /**
   * 存放数据选择数组(单选)
   *
   * @type {object}
   * @memberof MOBMDCTRLBase
   */
   public radio:any = '';


   /**
   * 点击多选按钮触发
   *
   *
   * @memberof MOBMDCTRLBase
   */
   public change(){
       if(this.isMutli){
            let checkboxLists= this.items.filter((item,index)=>{
                 if(this.checkboxList.indexOf(item.srfkey)!=-1){
                   return true;
                 }else{
                   return false;
                 }
               })
         this.$emit('selectchange',checkboxLists);
       }else{
          let radioItem = this.items.filter((item,index)=>{return item.srfkey==this.radio});
          this.$emit('selectchange',radioItem);
       }
   }

   /**
    * 列表键值对
    *
    * @type {Map}
    * @memberof MOBMDCTRLBase
    */
   public listMap: any = new Map();

   /**
   * 分页大小
   *
   * @type {number}
   * @memberof MOBMDCTRLBase
   */
   public pageSize: number = 20;

   /**
   * 总页数
   *
   * @type {number}
   * @memberof MOBMDCTRLBase
   */
    public pageTotal: number = 0;

   /**
   * 当前页数
   *
   * @type {number}
   * @memberof MOBMDCTRLBase
   */
    public pageNumber: number = 1;

   /**
   * 判断底部数据是否全部加载完成，若为真，则 bottomMethod 不会被再次触发
   *
   * @type {number}
   * @memberof MOBMDCTRLBase
   */
   get allLoaded() {
       return ((this.pageNumber + 1) * this.pageSize) >= this.pageTotal ? true : false;
   }


   /**
   * searchKey 搜索关键字
   *
   * @type {string}
   * @memberof MOBMDCTRLBase
   */
    public searchKey:string = '';

   /**
   * 列表数组
   *
   * @param {Array<any>}
   * @memberof MOBMDCTRLBase
   */
   public items:Array<any> =[];

   /**
   * 选中数组
   *
   * @param {Array<any>}
   * @memberof MOBMDCTRLBase
   */
   public selectedArray:Array<any> = [];

   /**
   * 多选计数
   *
   * @param {number}
   * @memberof MOBMDCTRLBase
   */
   public selectednumber:number =0;

   /**
   * 搜索行为
   *
   * @param {string}
   * @memberof MOBMDCTRLBase
   */
   @Prop() public searchAction?:string;

   /**
   * 是否为选择视图
   *
   * @param {boolean} 
   * @memberof MOBMDCTRLBase
   */
   @Prop() public isSelected?:boolean;

   /**
   * 是否多选
   *
   * @type {boolean}
   * @memberof MOBMDCTRLBase
   */
   @Prop({default:false}) public isMutli?: boolean;

   /**
   * 单选选择值
   *
   * @param {string} 
   * @memberof MOBMDCTRLBase
   */
   public selectedValue:string = ""; 
   
   /**
   * 底部改变状态
   * 
   * @memberof MOBMDCTRLBase
   */
   public handleBottomChange(status: String) {
   //   this.bottomStatus = status;
   }

   /**
   * 顶部改变状态
   * 
   * @memberof MOBMDCTRLBase
   */
   public handleTopChange(status: String) {
   //   this.moveTranslate = 1;
   //   this.topStatus = status;
   }


    /**
     * 刷新数据
     *
     * @returns {Promise<any>}
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    public refresh(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.load().then((res) => {
                resolve(res);
            }).catch((error: any) => {
                reject(error);
            })
        })
    }

    /**
     * 快速搜索
     *
     * @param {string} query
     * @returns {Promise<any>}
     * @memberof MOBMDCTRLBase
     */
    public async quickSearch(query: string): Promise<any> {
        this.searchKey = query;
        this.pageNumber = 0;
        const response = await this.load(Object.assign({ query: query }, { page: this.pageNumber, size: this.pageSize }), "init");
        return response;
    }

    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof MOBMDCTRLBase
     */
    public async load(data: any = {}, type: string = ""): Promise<any> {
        if (!data.page) {
            Object.assign(data, { page: this.pageNumber });
        }
        if (!data.size) {
            Object.assign(data, { size: this.pageSize });
        }
        //排序
        if(data.data && data.data.sort){
            Object.assign(data, { sort:data.data.sort });
        }
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(data, parentdata);
        const response: any = await this.service.search(this.fetchAction, this.context, data, this.showBusyIndicator);
        if (!response || response.status !== 200) {
            this.$notice.error(response.error.message );
            return response;
        }

        this.$emit('load', (response.data && response.data.records) ? response.data.records : []);
        this.pageTotal = response.data.total;
        if (type == 'top') {
            this.items = [];
            this.items = response.data.records;
        } else if (type == 'bottom') {
            for (let i = 0; i < response.data.records.length; i++) {
                this.items.push(response.data.records[i]);
            }
        } else {
            this.items = [];
            this.items = response.data.records;
        }
        return response;
    }

    /**
    * 全选
    *
    * @private
    * @param {*} [arg={}]
    * @memberof MOBMDCTRLBase
    */
   private handleClick() {
    this.items.forEach((item: any) => {
        item.value = true;
    });
    this.selectednumber = this.items.length;
}



    /**
     * 下拉刷新
     *
     * @returns {Promise<any>}
     * @memberof MOBMDCTRLBase
     */
    public async pullDownToRefresh(): Promise<any> {
        this.pageNumber = 0;
        let params = {};
        if (this.viewparams) {
            Object.assign(params, this.viewparams);
        }
        Object.assign(params, { query: this.searchKey, pageNumber: this.pageNumber, pageSize: this.pageSize });
        let response: any = await this.load(params, 'top');
        return response;
    }

    /**
    * 点击列表数据跳转
    *
    * @memberof MOBMDCTRLBase
    */
    public goPage(item: String) {
    this.selectedArray.push(item);
    this.$emit('rowclick',item);
    }

    /**
    * 获取多项数据
    *
    * @memberof MOBMDCTRLBase
    */
    public getDatas(): any[] {
    return this.selectedArray;
    }

    /**
    * 获取单项数据
    *
    * @memberof MOBMDCTRLBase
    */
    public getData(): any {
        return this.selectedArray[0];
    }


        /**
     * 单选选中变化
     * 
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    public onSimpleSelChange(item: any = {}) {
        this.$emit('selectionchange', [item]);
        this.selectedValue = item.srfkey;
        this.selectedArray = [];
        this.goPage(item);
    }


   /**
     * 是否展示多选
     *
     * @memberof Mdctrl
     */
    @Prop({default:false}) showCheack?: boolean;

    /**
     * 长按定时器
     *
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    public loop :any;
    
    /**
     * 开始长按
     *
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    public start () {
      clearTimeout(this.loop); //再次清空定时器，防止重复注册定时器
      this.loop = setTimeout(() => {
        this.$emit('showCheackChange', !this.showCheack);
      }, 1000);
    }

    /**
     * 结束长按
     *
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    public end () {
      clearTimeout(this.loop); //清空定时器，防止重复注册定时器
    }

    /**
     * 全选事件
     *
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    public checkboxAll(item:any) {
        this.selectAllIschecked = item.detail.checked;
        if(this.selectAllIschecked){
            this.selectedArray = JSON.parse(JSON.stringify(this.items));
        }else{
            this.selectedArray = [];
        }
        this.items.forEach((item:any,index:number)=>{
            this.items[index].checked = this.selectAllIschecked
        });
        this.$forceUpdate();
    }


    /**
     * 全选按钮选中状态
     *
     * @memberof ${srfclassname('${ctrl.name}')}
     */
    public selectAllIschecked = false;


    /**
     * 关闭滑动项
     *
     * @memberof Mdctrl
     */
    public closeSliding(){
        let sliding :any = this.$refs.sliding;
        if(sliding){
            sliding.forEach((item:any) => {
                item.closeOpened();
            });
        }
    }

}