<template>
    <div  class="app-mob-mdctrl ibzdaily-mdctrl ">
        <div class="app-mob-mdctrl-mdctrl" ref="mdctrl">
            <ion-list class="items" ref="ionlist">
                <template v-if="(viewType == 'DEMOBMDVIEW9') && controlStyle != 'SWIPERVIEW' ">
                    <ion-item-sliding ref="sliding" v-for="(item,index) in items" @click="item_click(item)" :key="item.srfkey" class="app-mob-mdctrl-item" :disabled="item.sliding_disabled" @ionDrag="ionDrag">
                        <ion-item>
                            <!-- 列表视图样式 -->
                            <app-list-index-text :dataItemNames = "[]" :item="item" :index="index" major="ibzdailyname" v-if="controlStyle.substring(0,8) === 'LISTVIEW'"></app-list-index-text>
                                <!-- 图标视图样式 -->
                            <app-icon-list :item="item" v-if="controlStyle === 'ICONVIEW'"></app-icon-list>
                        </ion-item>
                    </ion-item-sliding>
                </template>
            </ion-list>
            <ion-list class="items" ref="ionlist" >
                <template v-if="(viewType == 'DEMOBMDVIEW') && controlStyle != 'SWIPERVIEW' ">
                      <ion-item-sliding  :ref="item.srfkey" v-for="(item,index) in items" @click="item_click(item)" :key="item.srfkey" class="app-mob-mdctrl-item" :disabled="item.sliding_disabled" @ionDrag="ionDrag">
                        <ion-item>
                            <!-- 列表视图样式 -->
                            <app-list-index-text :dataItemNames = "[]" :item="item" :index="index" major="ibzdailyname" v-if="controlStyle.substring(0,8) === 'LISTVIEW'"></app-list-index-text>
                            <!-- 图标视图样式 -->
                            <app-icon-list :item="item" v-if="controlStyle === 'ICONVIEW'"></app-icon-list>
                        </ion-item>                      
                      </ion-item-sliding>
                </template>
                <template v-else-if="(viewType == 'DEMOBMDVIEW9')">
                </template>
                <template v-else-if="(viewType == 'DEMOBMDVIEW' || viewType == 'DEMOBMDVIEW9') && controlStyle === 'SWIPERVIEW'">
                    <app-list-swipe :items="items"></app-list-swipe>
                </template>
                <template v-else-if="viewType == 'DEMOBWFMDVIEW' || viewType == 'DEMOBWFDYNAEXPMDVIEW'">
                    <li v-for="item in items" @click="goPage(item)" :key="item.srfkey" class="app-mob-mdctrl-item">
                        <van-panel :title="item.srfmajortext ">
                            <div class="van-cell van-panel__header" >
                                <div class="van-cell__title time">
                                    <div class="van-cell__label">
                                        {{ item.starttime }}
                                    </div>
                                </div>
                                <div class="van-cell__title subtitle">
                                    <span>步骤</span>
                                    <div class="van-cell__label">
                                        {{ item.wfstep }}
                                    </div>
                                </div>
                                <div class="van-cell__title content" >
                                    <span>{{item.startusername}}</span>
                                    <div class="van-cell__label">
                                        {{ item.documentcentername }}
                                    </div>
                                </div>
                            </div>
                        </van-panel>
                    </li>
                </template>
                <template v-else>
                    <ion-list  v-model="selectedArray"   v-if="isMutli" class="pickUpList">
                        <ion-item v-for="(item, index) of items" :key="item.srfkey" class="app-mob-mdctrl-item" >
                            <ion-checkbox color="secondary" :checked="item.checked" :value="item.srfkey" @ionChange="checkboxChange"  slot="end"></ion-checkbox>
                            <ion-label>{{item.ibzdailyname}}</ion-label>
                        </ion-item>
                    </ion-list>
                    <div class="pickUpList">
                    <ion-radio-group  :value="selectedValue" v-if="!isMutli">
                        <ion-item v-for="(item, index) of items" :key="item.srfkey" class="app-mob-mdctrl-item"  @click="onSimpleSelChange(item)">
                            <ion-label>{{item.ibzdailyname}}</ion-label>
                            <ion-radio slot="end" :checked="item.checked" :value="item.srfkey"></ion-radio>
                        </ion-item>
                    </ion-radio-group>
                    </div>
                </template>
            </ion-list>
             <div  v-if="items.length == 0" class="no-data">
                <div>暂无数据</div>
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
import IbzDailyService from '@/app-core/service/ibz-daily/ibz-daily-service';
import ReportReceivedMobService from '@/app-core/ctrl-service/ibz-daily/report-received-mob-mobmdctrl-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzDailyUIService from '@/ui-service/ibz-daily/ibz-daily-ui-action';



@Component({
    components: { }
})
export default class ReportReceivedMobBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ReportReceivedMob
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ReportReceivedMob
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ReportReceivedMob
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ReportReceivedMob
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ReportReceivedMob
     */
    protected getControlType(): string {
        return 'MOBMDCTRL'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ReportReceivedMob
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  ReportReceivedMobBase
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
     * @type {ReportReceivedMobService}
     * @memberof ReportReceivedMob
     */
    protected service: ReportReceivedMobService = new ReportReceivedMobService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzDailyService}
     * @memberof ReportReceivedMob
     */
    protected appEntityService: IbzDailyService = new IbzDailyService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzDailyUIService}
     * @memberof ReportReceivedMobBase
     */  
    public deUIService:IbzDailyUIService = new IbzDailyUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ReportReceivedMob
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 视图类型
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected viewType?: string | 'DEMOBMDVIEW' | 'DEMOBMDVIEW9' | 'DEMOBWFMDVIEW';

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof ReportReceivedMob
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected fetchAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop() protected createAction!: string;

    /**
     * 部件样式
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop({default: 'LISTVIEW'}) protected controlStyle!: string | 'ICONVIEW'  | 'LISTVIEW' | 'SWIPERVIEW' | 'LISTVIEW2' | 'LISTVIEW3' | 'LISTVIEW4';

    /**
    *上级传递的选中项
    *@type {Array}
    *@memberof ReportReceivedMob
    */
     @Prop() public selectedData?:Array<any>;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof ReportReceivedMob
     */
    @Prop({default: true}) protected needLoadMore?: boolean;

    /**
    * 新建打开视图
    *
    * @type {Function}
    * @memberof ReportReceivedMob
    */
    @Prop() public newdata?: Function; 


    /**
    * 打开视图
    *
    * @type {Function}
    * @memberof ReportReceivedMob
    */
    @Prop() public opendata?: Function; 


    /**
    * 当前选中数组
    *
    * @type {array}
    * @memberof ReportReceivedMob
    */
    public  selectdata :any = [];

    /**
    * 加载显示状态
    *
    * @type {boolean}
    * @memberof ReportReceivedMob
    */
    public loadStatus: boolean = false;

    /**
    * 关闭行为
    *
    * @type {Function}
    * @memberof ReportReceivedMob
    */
    @Prop() public close?:Function;

    /**
    * 是否显示加载文字
    *
    * @type {boolean}
    * @memberof ReportReceivedMob
    */
    @Prop({ default: true}) public isNeedLoaddingText?:boolean;

    /**
    * 是否为临时模式
    *
    * @type {boolean}
    * @memberof ReportReceivedMob
    */
    @Prop({ default: false}) public isTempMode?:boolean;

    /**
    * 存放多数据选择数组（多选）
    *
    * @type {array}
    * @memberof ReportReceivedMob
    */
    public checkboxList:Array<string> = [];

    /**
    * 是否为分组模式
    *
    * @type {boolean}
    * @memberof ReportReceivedMob
    */
    public isEnableGroup:boolean =  false;

    /**
    * 代码表分组细节
    *
    * @type {Object}
    * @memberof ReportReceivedMob
    */
    public group_detail:any = [];

    /**
    * 分组模式
    *
    * @type {string}
    * @memberof ReportReceivedMob
    */
    public group_mode = 'NONE';

    /**
    * 分组数据
    *
    * @type {array}
    * @memberof ReportReceivedMob
    */
    public group_data?:any = [];

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof ReportReceivedMobBase
     */
    public appStateEvent: Subscription | undefined;

    /**
    * 分组标识
    *
    * @type {array}
    * @memberof ReportReceivedMob
    */
    public group_field:string = '';

    /**
     * 分组方法
     *
     * @memberof ReportReceivedMob
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
    * @memberof ReportReceivedMob
    */
    public radio:any = '';


    /**
    * 点击多选按钮触发
    *
    *
    * @memberof ReportReceivedMob
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
    * @memberof ReportReceivedMob
    */
    public listMap: any = new Map();

    /**
    * 分页大小
    *
    * @type {number}
    * @memberof ReportReceivedMob
    */
    public pageSize: number = 1000;

    /**
    * 总页数
    *
    * @type {number}
    * @memberof ReportReceivedMob
    */
     public pageTotal: number = 0;

    /**
    * 当前页数
    *
    * @type {number}
    * @memberof ReportReceivedMob
    */
     public pageNumber: number = 1;

    /**
    * 判断底部数据是否全部加载完成，若为真，则 bottomMethod 不会被再次触发
    *
    * @type {number}
    * @memberof ReportReceivedMob
    */
    get allLoaded() {
        return ((this.pageNumber + 1) * this.pageSize) >= this.pageTotal ? true : false;
    }

    /**
    * searchKey 搜索关键字
    *
    * @type {string}
    * @memberof ReportReceivedMob
    */
     public searchKey:string = '';

    /**
    * 列表数组
    *
    * @param {Array<any>}
    * @memberof ReportReceivedMob
    */
    public items:Array<any> =[];

    /**
    * 选中数组
    *
    * @param {Array<any>}
    * @memberof ReportReceivedMob
    */
    public selectedArray:Array<any> = [];

    /**
    * 多选计数
    *
    * @param {number}
    * @memberof ReportReceivedMob
    */
    public selectednumber:number =0;

    /**
    * 搜索行为
    *
    * @param {string}
    * @memberof ReportReceivedMob
    */
    @Prop() public searchAction?:string;

    /**
    * 是否为选择视图
    *
    * @param {boolean} 
    * @memberof ReportReceivedMob
    */
    @Prop() public isSelected?:boolean;

    /**
    * 是否多选
    *
    * @type {boolean}
    * @memberof ReportReceivedMob
    */
    @Prop({default:false}) public isMutli?: boolean;

    /**
    * 单选选择值
    *
    * @param {string} 
    * @memberof ReportReceivedMob
    */
    public selectedValue:string = ""; 

    /**
    * 部件排序对象
    *
    * @param {object} 
    * @memberof ReportReceivedMob
    */
    public sort: any = { };
    

    /**
     * 上拉加载更多数据
     *
     * @memberof ReportReceivedMob
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
            keys.push(data.ibzdailyid);
            if (index < 5) {
                if (!Object.is(infoStr, '')) {
                    infoStr += '、';
                }
                infoStr += data.ibzdailyname;
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
                let _context: any = { ibzdaily: keys.join(';') }
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
     * @memberof ReportReceivedMob
     */
    public onCheackChange(){
        this.$emit('isChooseChange', !this.isChoose);
    }

    /**
     * 快速搜索
     *
     * @param {string} query
     * @returns {Promise<any>}
     * @memberof ReportReceivedMob
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
     * @memberof ReportReceivedMob
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
     * @memberof ReportReceivedMob
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
            if (Object.is(item.ibzdailyid, value)) {
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
     * @memberof ReportReceivedMob
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
    * @memberof ReportReceivedMob
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
    * @memberof ReportReceivedMob
    */
    public goPage(item: any) {
        this.$emit('rowclick',item);
    }

    /**
    * 获取多项数据
    *
    * @memberof ReportReceivedMob
    */
    public getDatas(): any[] {
      return this.service.handleRequestDatas(this.context,this.selectedArray);
    }

    /**
    * 获取单项数据
    *
    * @memberof ReportReceivedMob
    */
    public getData(): any {
        return this.selectedArray[0];
    }

    /**
    * vue生命周期created
    *
    * @memberof ReportReceivedMob
    */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ReportReceivedMob
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
                if(!Object.is(name,"IbzDaily")){
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
     * @memberof ReportReceivedMob
     */
    public ionDrag(){
      this.$store.commit('setPopupStatus',false)
    }

    /**
     * 滚动条事件（计算是否到底部）
     *
     * @memberof ReportReceivedMob
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
     * @memberof ReportReceivedMob
     */
    public bottomLoadding = false;

    /**
     * vue 生命周期
     *
     * @memberof ReportReceivedMob
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
     * @memberof ReportReceivedMob
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ReportReceivedMob
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
            return i.ibzdailyid == item.ibzdailyid;
        });
        let tempFalg = false;
        if(count == -1){
            tempFalg = true;
            this.selectedArray.push(item);
        }else{
            this.selectedArray.splice(count,1);
        }
        this.items.forEach((_item:any,index:number)=>{
            if(_item.ibzdailyid == item.ibzdailyid){
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
     * @memberof ReportReceivedMobBase
     */  
    public ActionModel:any ={
    };

    

    /**
     * 获取界面行为权限状态
     *
     * @memberof ReportReceivedMobBase
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
    * @memberof ReportReceivedMobBase
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
     * @memberof ReportReceivedMobBase
     */
    public timeOutEvent :number = 0;

    /**
     * 开始长按
     *
     * @memberof ReportReceivedMobBase
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
     * @memberof ReportReceivedMobBase
     */
    public gotouchmove() {
        clearTimeout(this.timeOutEvent); //清除定时器
        this.timeOutEvent = 0;
    }

    /**
     * touchend
     * 结束长按
     *
     * @memberof ReportReceivedMobBase
     */
    public gotouchend() {
        this.timeOutEvent = 0;
    }

}
</script>

<style lang='less'>
@import './report-received-mob-mobmdctrl.less';
</style>