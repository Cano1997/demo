<template>
    <div  class="app-mob-mdctrl action-mdctrl ">
        <div class="app-mob-mdctrl-mdctrl" ref="mdctrl">
                    <app-trends-list :items="items"></app-trends-list>
             <div  v-if="items.length == 0" class="no-data">
            </div>
            <div v-show=" loadStatus && !allLoaded && isNeedLoaddingText" class="loadding" >
                    <span >{{$t('app.loadding')?$t('app.loadding'):"加载中"}}</span>
                    <ion-spinner name="dots"></ion-spinner>
            </div>                          
        </div>
    </div>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ActionService from '@/app-core/service/action/action-service';
import TrendsMobService from '@/app-core/ctrl-service/action/trends-mob-mobmdctrl-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import ActionUIService from '@/ui-service/action/action-ui-action';



@Component({
    components: { }
})
export default class TrendsMobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof TrendsMob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof TrendsMob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof TrendsMob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof TrendsMob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof TrendsMob
     */
    protected getControlType(): string {
        return 'MOBMDCTRL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof TrendsMob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  TrendsMobBase
     */
    public transformData(args: any) {
        let _this: any = this;
        if(_this.service && _this.service.handleRequestData instanceof Function && _this.service.handleRequestData('transform',_this.context,args)){
            return _this.service.handleRequestData('transform',_this.context,args);
        }
    }

    /**
     * 建构部件服务对象
     *
     * @type {TrendsMobService}
     * @memberof TrendsMob
     */
    protected service: TrendsMobService = new TrendsMobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof TrendsMob
     */
    protected appEntityService: ActionService = new ActionService();

    /**
     * 界面UI服务对象
     *
     * @type {ActionUIService}
     * @memberof TrendsMobBase
     */  
    public deUIService:ActionUIService = new ActionUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof TrendsMob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 视图类型
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected viewType?: string | 'DEMOBMDVIEW' | 'DEMOBMDVIEW9' | 'DEMOBWFMDVIEW';

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TrendsMob
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected fetchAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop() protected createAction!: string;

    /**
     * 部件样式
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop({default: 'LISTVIEW'}) protected controlStyle!: string | 'ICONVIEW'  | 'LISTVIEW' | 'SWIPERVIEW' | 'LISTVIEW2' | 'LISTVIEW3' | 'LISTVIEW4';

    /**
    *上级传递的选中项
    *@type {Array}
    *@memberof TrendsMob
    */
     @Prop() public selectedData?:Array<any>;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof TrendsMob
     */
    @Prop({default: true}) protected needLoadMore?: boolean;

    /**
    * 新建打开视图
    *
    * @type {Function}
    * @memberof TrendsMob
    */
    @Prop() public newdata?: Function; 


    /**
    * 打开视图
    *
    * @type {Function}
    * @memberof TrendsMob
    */
    @Prop() public opendata?: Function; 


    /**
    * 当前选中数组
    *
    * @type {array}
    * @memberof TrendsMob
    */
    public  selectdata :any = [];

    /**
    * 加载显示状态
    *
    * @type {boolean}
    * @memberof TrendsMob
    */
    public loadStatus: boolean = false;

    /**
    * 关闭行为
    *
    * @type {Function}
    * @memberof TrendsMob
    */
    @Prop() public close?:Function;

    /**
    * 是否显示加载文字
    *
    * @type {boolean}
    * @memberof TrendsMob
    */
    @Prop({ default: true}) public isNeedLoaddingText?:boolean;

    /**
    * 是否为临时模式
    *
    * @type {boolean}
    * @memberof TrendsMob
    */
    @Prop({ default: false}) public isTempMode?:boolean;

    /**
    * 存放多数据选择数组（多选）
    *
    * @type {array}
    * @memberof TrendsMob
    */
    public checkboxList:Array<string> = [];

    /**
    * 是否为分组模式
    *
    * @type {boolean}
    * @memberof TrendsMob
    */
    public isEnableGroup:boolean =  false;

    /**
    * 代码表分组细节
    *
    * @type {Object}
    * @memberof TrendsMob
    */
    public group_detail:any = [];

    /**
    * 分组模式
    *
    * @type {string}
    * @memberof TrendsMob
    */
    public group_mode = 'NONE';

    /**
    * 分组数据
    *
    * @type {array}
    * @memberof TrendsMob
    */
    public group_data?:any = [];

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof TrendsMobBase
     */
    public appStateEvent: Subscription | undefined;

    /**
    * 分组标识
    *
    * @type {array}
    * @memberof TrendsMob
    */
    public group_field:string = '';

    /**
     * 分组方法
     *
     * @memberof TrendsMob
     */
    public group(){
      let _this:any = this;
      if(_this.getGroupDataByCodeList && _this.getGroupDataByCodeList instanceof Function && Object.is(_this.group_mode,"CODELIST") ){
        _this.getGroupDataByCodeList(_this.items);
      }else if(_this.getGroupDataAuto && _this.getGroupDataAuto instanceof Function && Object.is(_this.group_mode,"AUTO") ){
        _this.getGroupDataAuto(_this.items);
      }
    }


    /**
    * 存放数据选择数组(单选)
    *
    * @type {object}
    * @memberof TrendsMob
    */
    public radio:any = '';


    /**
    * 点击多选按钮触发
    *
    *
    * @memberof TrendsMob
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
    * @memberof TrendsMob
    */
    public listMap: any = new Map();

    /**
    * 分页大小
    *
    * @type {number}
    * @memberof TrendsMob
    */
    public pageSize: number = 10;

    /**
    * 总页数
    *
    * @type {number}
    * @memberof TrendsMob
    */
     public pageTotal: number = 0;

    /**
    * 当前页数
    *
    * @type {number}
    * @memberof TrendsMob
    */
     public pageNumber: number = 1;

    /**
    * 判断底部数据是否全部加载完成，若为真，则 bottomMethod 不会被再次触发
    *
    * @type {number}
    * @memberof TrendsMob
    */
    get allLoaded() {
        return ((this.pageNumber + 1) * this.pageSize) >= this.pageTotal ? true : false;
    }

    /**
    * searchKey 搜索关键字
    *
    * @type {string}
    * @memberof TrendsMob
    */
     public searchKey:string = '';

    /**
    * 列表数组
    *
    * @param {Array<any>}
    * @memberof TrendsMob
    */
    public items:Array<any> =[];

    /**
    * 选中数组
    *
    * @param {Array<any>}
    * @memberof TrendsMob
    */
    public selectedArray:Array<any> = [];

    /**
    * 多选计数
    *
    * @param {number}
    * @memberof TrendsMob
    */
    public selectednumber:number =0;

    /**
    * 搜索行为
    *
    * @param {string}
    * @memberof TrendsMob
    */
    @Prop() public searchAction?:string;

    /**
    * 是否为选择视图
    *
    * @param {boolean} 
    * @memberof TrendsMob
    */
    @Prop() public isSelected?:boolean;

    /**
    * 是否多选
    *
    * @type {boolean}
    * @memberof TrendsMob
    */
    @Prop({default:false}) public isMutli?: boolean;

    /**
    * 单选选择值
    *
    * @param {string} 
    * @memberof TrendsMob
    */
    public selectedValue:string = ""; 

    /**
    * 部件排序对象
    *
    * @param {object} 
    * @memberof TrendsMob
    */
    public sort: any = { sort:'date,desc'};
    

    /**
     * 上拉加载更多数据
     *
     * @memberof TrendsMob
     */
    public async loadBottom(): Promise<any> {
        if (this.allLoaded) {
          return;
        }
        this.pageNumber++;
        let params = {};
        if (this.viewparams) {
            Object.assign(params, this.viewparams);
        }
        Object.assign(params, { query: this.searchKey, page: this.pageNumber, size: this.pageSize });
        let response: any = await this.load(params, 'bottom',false);
        let loadmoreBottom: any = this.$refs.loadmoreBottom;
        if (loadmoreBottom) {
            loadmoreBottom.complete();
        }
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof Mdctrl
     */
    public async remove(datas: any[]): Promise<any> {
        let arg: any = {};
        let keys: Array<string> = [];
        let infoStr: string = '';
        datas.forEach((data: any, index: number) => {
            keys.push(data.id);
            if (index < 5) {
                if (!Object.is(infoStr, '')) {
                    infoStr += '、';
                }
                infoStr += data.comment;
            }
        });
        if(datas.length <= 0 ){
          this.$notice.error('请选择至少一条删除~')
          return
        }
        if (datas.length < 5) {
            infoStr = infoStr + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        } else {
            infoStr = infoStr + '...' + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        }
        return new Promise((resolve, reject) => {
            const _remove = async () => {
                let _context: any = { action: keys.join(';') }
                const response: any = await this.service.delete(this.removeAction, Object.assign({}, this.context, _context), arg, this.showBusyIndicator);
                if (response && response.status === 200 && response.data.records) {
                    this.$notice.success((this.$t('app.message.deleteSccess') as string));
                    this.load();
                    resolve(response);
                } else {
                    this.$notice.error(response.message?response.message:"删除失败");
                    reject(response);
                }
            }

            this.$dialog.confirm({
                title: (this.$t('app.message.warning') as string),
                message: this.$t('app.message.confirmToDelete') + infoStr +','+ this.$t('app.message.unrecoverable') + '？',
            }).then(() => {
                _remove();
            }).catch(() => {
            });
        });
    }

    /**
     * 刷新数据
     *
     * @returns {Promise<any>}
     * @memberof Mdctrl
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
     * 长按状态改变事件
     *
     * @memberof TrendsMob
     */
    public onCheackChange(){
        this.$emit('isChooseChange', !this.isChoose);
    }

    /**
     * 快速搜索
     *
     * @param {string} query
     * @returns {Promise<any>}
     * @memberof TrendsMob
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
     * @memberof TrendsMob
     */
    private async load(data: any = {}, type: string = "",isloadding = this.showBusyIndicator): Promise<any> {
        if (!data.page) {
            Object.assign(data, { page: this.pageNumber });
        }
        if (!data.size) {
            Object.assign(data, { size: this.pageSize });
        }
        //部件排序
        if(this.sort){
​           Object.assign(data,this.sort);
        }
        //视图排序
        if(data.data && data.data.sort){
            Object.assign(data, { sort:data.data.sort });
        }
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(data, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(data,tempViewParams);
        const response: any = await this.service.search(this.fetchAction, this.context, data, isloadding);
        this.bottomLoadding = false;
        if (!response || response.status !== 200) {
            this.$notify({ type: 'danger', message: response.error.message });
            return response;
        }

        this.$emit('load', (response.data && response.data.records) ? response.data.records : []);
        this.pageTotal = response.data.total;
        this.$emit('pageTotalChange',this.pageTotal);
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
        this.items.forEach((item:any)=>{
            // 计算是否选中
            let index = this.selectdata.findIndex((temp:any)=>{return temp.srfkey == item.srfkey});
            if(index != -1 || Object.is(this.selectedValue,item.srfkey)){
                item.checked = true;
            }else{
                item.checked = false;
            }
            Object.assign(item,this.getActionState(item)); 
            // 计算权限   
            this.setSlidingDisabled(item);
        });
        if(this.isEnableGroup){
          this.group();
        }
        return response;
    }



    /**
     * checkbox 选中回调
     *
     * @param {*} data
     * @returns
     * @memberof TrendsMob
     */
    public checkboxChange(data: any) {
        let { detail } = data;
        if (!detail) {
            return;
        }
        let { value } = detail;
        this.selectednumber = 0;
        this.items.forEach((item: any, index: number) => {
            if (item.value) {
                this.selectednumber++;
            }
            if (Object.is(item.id, value)) {
                if (detail.checked) {
                    this.selectdata.push(this.items[index]);
                } else {
                    this.selectdata.splice(this.selectdata.findIndex((i: any) => i.value === item.value), 1)
                }
            }
        });
        this.$emit('selectionchange', this.selectdata);
    }

    /**
     * 下拉刷新
     *
     * @returns {Promise<any>}
     * @memberof TrendsMob
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
    * 点击回调事件
    *
    * @memberof TrendsMob
    */
    public item_click(item:any){
        if(this.isChoose){
            let count = this.selectedArray.findIndex((i) => {
            return i.mobentityid == item.mobentityid;
        });
            if (count === -1) {
                this.selectedArray.push(item);
            } else {
                this.selectedArray.splice(count, 1);
            }
        } else {
            this.goPage(item)
        }
    }

    /**
    * 点击列表数据跳转
    *
    * @memberof TrendsMob
    */
    public goPage(item: any) {
        this.$emit('rowclick',item);
    }

    /**
    * 获取多项数据
    *
    * @memberof TrendsMob
    */
    public getDatas(): any[] {
      return this.service.handleRequestDatas(this.context,this.selectedArray);
    }

    /**
    * 获取单项数据
    *
    * @memberof TrendsMob
    */
    public getData(): any {
        return this.selectedArray[0];
    }

    /**
    * vue生命周期created
    *
    * @memberof TrendsMob
    */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TrendsMob
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action, "load")) {
                    this.pageNumber = 0;
                    this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "search")) {
                    this.pageNumber = 0;
                    this.load(Object.assign(data, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "quicksearch")) {
                    this.searchKey = data;
                    this.pageNumber = 0;
                    this.load(Object.assign({ query: data }, { page: this.pageNumber, size: this.pageSize }), "init");
                }
                if (Object.is(action, "refresh")) {
                    this.refresh();
                }
            });
        }
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"Action")){
                    return;
                }
                if(Object.is(action,'appRefresh')){
                    this.refresh();
                }
            })
        }
    }

    /**
     * ion-item-sliding拖动事件
     *
     * @memberof TrendsMob
     */
    public ionDrag(){
      this.$store.commit('setPopupStatus',false)
    }

    /**
     * 滚动条事件（计算是否到底部）
     *
     * @memberof TrendsMob
     */
    public scroll(e:any){
        let list:any = this.$refs.mdctrl;
        if(list){
            let scrollTop = list.scrollTop;
            let clientHeight = list.clientHeight;
            let scrollHeight = list.scrollHeight;
            if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight){
                if(!this.allLoaded){
                    this.bottomLoadding = true;
                    this.loadBottom();
                }
            }
        }
    }

    /**
     * 底部加载状态
     *
     * @memberof TrendsMob
     */
    public bottomLoadding = false;

    /**
     * vue 生命周期
     *
     * @memberof TrendsMob
     */
    public beforeDestroy(){
      let list:any = this.$refs.mdctrl;
      if(list){
        list.removeEventListener('touchend',()=>{
          this.$store.commit('setPopupStatus',true)
        })
      }
    }

    /**
     * vue 生命周期
     *
     * @memberof TrendsMob
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TrendsMob
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if(this.appStateEvent){
            this.appStateEvent.unsubscribe();
        }
        window.removeEventListener('contextmenu',()=>{});
    }

    /**
     * 列表项左滑右滑触发行为
     *
     * @param {*} $event 点击鼠标事件
     * @param {*} tag 操作标识
     * @param {*} item 行数据
     * @memberof Mdctrl
     */
    public mdctrl_click($event: any, tag: any, item: any): void {
        $event.stopPropagation();
        this.selectedArray = [];
        this.selectedArray.push(item);
        this.closeSlidings(item);
    }

    /**
     * 关闭列表项左滑右滑
     * @memberof Mdctrl
     */
    public closeSlidings (item: any) {
        const ele :any= this.$refs[item.srfkey];
        if(ele[0] && this.$util.isFunction(ele[0].closeOpened)){
            ele[0].closeOpened();
        }
    }

    /**
     * 单选选中变化
     * 
     * @memberof Mdctrl
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
    @Prop({default:false}) isChoose?: boolean;

    /**
     * 选中或取消事件
     *
     * @memberof Mdctrl
     */
    public checkboxSelect(item:any){
        let count = this.selectedArray.findIndex((i) => {
            return i.id == item.id;
        });
        let tempFalg = false;
        if(count == -1){
            tempFalg = true;
            this.selectedArray.push(item);
        }else{
            this.selectedArray.splice(count,1);
        }
        this.items.forEach((_item:any,index:number)=>{
            if(_item.id == item.id){
                this.items[index].checked = tempFalg;
            }
        });
        if(!item.checked){
            this.$emit("checkBoxChange",false)
        }else if(this.selectedArray.length == this.items.length){
            this.$emit("checkBoxChange",true)
        }
    }

    /**
     * 全选事件
     *
     * @memberof Mdctrl
     */
    public checkboxAll(value:any) {
        for (let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            this.items[index].checked = value;
        }
        if(value){
            this.selectedArray = [...this.items];
        }else{
            this.selectedArray = [];
        }
        this.$forceUpdate();
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof TrendsMobBase
     */  
    public ActionModel:any ={
    };

    

    /**
     * 获取界面行为权限状态
     *
     * @memberof TrendsMobBase
     */
    public getActionState(data:any){
        //let targetData:any = this.transformData(data);
        let tempActionModel:any = JSON.parse(JSON.stringify(this.ActionModel));
        this.$viewTool.calcActionItemAuthState(data,tempActionModel,this.deUIService);
        return tempActionModel;
    }

    /**
    * 判断列表项左滑右滑禁用状态
    *
    * @memberof TrendsMobBase
    */
    public setSlidingDisabled(item:any){
        item.sliding_disabled = true;
        Object.keys(this.ActionModel).forEach((key,index) => {
           if(item[key].visabled && item.sliding_disabled ){
             item.sliding_disabled = false;
           }
        })

    }

    /**
     * 长按定时器
     *
     * @memberof TrendsMobBase
     */
    public timeOutEvent :number = 0;

    /**
     * 开始长按
     *
     * @memberof TrendsMobBase
     */
    public gotouchstart(){
        let _this = this;
        clearTimeout(this.timeOutEvent); //清除定时器
        this.timeOutEvent = 0;
        this.timeOutEvent = setTimeout(() => {
            if(_this.timeOutEvent > 0){
                this.onCheackChange();
            }
            console.log(this.timeOutEvent);
            this.timeOutEvent = 0
        }, 2000); //这里设置定时
    }

    /**
     * touchmove
     *  如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
     *
     * @memberof TrendsMobBase
     */
    public gotouchmove() {
        clearTimeout(this.timeOutEvent); //清除定时器
        this.timeOutEvent = 0;
    }

    /**
     * touchend
     * 结束长按
     *
     * @memberof TrendsMobBase
     */
    public gotouchend() {
        this.timeOutEvent = 0;
    }

}
</script>

<style lang='less'>
@import './trends-mob-mobmdctrl.less';
</style>