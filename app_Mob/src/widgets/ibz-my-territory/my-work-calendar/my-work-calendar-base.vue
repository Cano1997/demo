<template>
    <div class="app-mob-calendar ibzmyterritory-calendar " @touchmove="gotouchmove" @touchstart="gotouchstart">
        <div v-if="show" :class="['calender_box' , activeItem]">
            <app-calendar
                ref="calendar2"
                @prev="prev"
                @next="next"
                :value="value"
                :markDate="markDate"
                :responsive="true"
                :isChangeStyle ="true"
                :illustration="illustration"
                @select="clickDay"
                @selectYear="selectYear"
                @selectMonth="selectMonth"
                :sign="sign"
                :events="eventsDate"
                :tileContent="tileContent"/>
            <ion-segment :scrollable="true" :value="activeItem" @ionChange="ionChange">
                <ion-segment-button value="bug">
                    <ion-label>Bug</ion-label>
                </ion-segment-button>
                <ion-segment-button value="task">
                    <ion-label>任务</ion-label>
                </ion-segment-button>
                <ion-segment-button value="todo">
                    <ion-label>待办</ion-label>
                </ion-segment-button>
                <ion-segment-button value="daily">
                    <ion-label>日报</ion-label>
                </ion-segment-button>
            </ion-segment>
            <div class="calendar-events">
                <ion-list>
                    <ion-item class="calendar_text_item" v-for="item in calendarItems[activeItem]"  :key="item.id" @click="onEventClick(item)">
                    <ion-label class="calendar_text">{{item.title}}</ion-label>
                    </ion-item>
                </ion-list>
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
import IbzMyTerritoryService from '@/app-core/service/ibz-my-territory/ibz-my-territory-service';
import MyWorkService from '@/app-core/ctrl-service/ibz-my-territory/my-work-calendar-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import IbzMyTerritoryUIService from '@/ui-service/ibz-my-territory/ibz-my-territory-ui-action';

import moment from 'moment';


@Component({
    components: { }
})
export default class MyWorkBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MyWork
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MyWork
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MyWork
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MyWork
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MyWork
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MyWork
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MyWork
     */
    protected getControlType(): string {
        return 'CALENDAR'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof MyWork
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  MyWorkBase
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
     * @type {MyWorkService}
     * @memberof MyWork
     */
    protected service: MyWorkService = new MyWorkService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof MyWork
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService();

    /**
     * 界面UI服务对象
     *
     * @type {IbzMyTerritoryUIService}
     * @memberof MyWorkBase
     */  
    public deUIService:IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof MyWork
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MyWork
     */
    @Prop({ default: true }) protected showBusyIndicator!: boolean;

    /**
     * 当前年份
     *
     * @type {string}
     * @memberof MyWork
     */
    protected year: number = 0;

    /**
     * 当前月份(0~11)
     *
     * @type {string}
     * @memberof MyWork
     */
    protected month: number = 0;

    /**
     * 开始时间
     *
     * @type {*}
     * @memberof MyWork
     */
    protected start: any;

    /**
     * 标志数据
     * @type {Array<any>}
     * @memberof MyWork
     */
    public sign: Array<any> = []
    
    /**
     * 结束时间
     *
     * @type {*}
     * @memberof MyWork
     */
    protected end: any;

    /**
     * 当前日期
     * @type {*}
     * @memberof MyWork
     */
    protected currentDate:any = new Date();

    /**
     * 当前天
     *
     * @type {string}
     * @memberof MyWork
     */
    protected day: number = 0;

    /**
     * 标记数组
     *
     * @type {Array<any>}
     * @memberof MyWork
     */
    protected markDate: Array<any> = [];

    /**
     * 事件时间
     *
     * @memberof MyWork
     */
    public eventsDate :any = {};

    /**
     * 日历项集合对象
     *
     * @type {*}
     * @memberof MyWork
     */
    public calendarItems: any = {};

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof MyWorkBase
     */
    public appStateEvent: Subscription | undefined;

    /**
     * 日历数据项模型
     *
     * @type {Map<string, any>}
     * @memberof MyWork
     */
    public calendarItemsModel: Map<string, any> = new Map([
        [
            'bug', {
                appde: 'ibzmyterritory',
                keyPSAppDEField: 'id',
                majorPSAppDEField: 'realname',
            }
        ],
        [
            'task', {
                appde: 'ibzmyterritory',
                keyPSAppDEField: 'id',
                majorPSAppDEField: 'realname',
            }
        ],
        [
            'todo', {
                appde: 'ibzmyterritory',
                keyPSAppDEField: 'id',
                majorPSAppDEField: 'realname',
            }
        ],
        [
            'daily', {
                appde: 'ibzmyterritory',
                keyPSAppDEField: 'id',
                majorPSAppDEField: 'realname',
            }
        ],
    ]);

    /**
     * 日历显示状态
     *
     * @memberof MyWork
     */
    public show = false;

    /**
     *  选中日期
     * 
     * @type {Array<any>}
     * @memberof MyWork
     */
    protected tileContent: Array<any> = [];

    /**
     *  默认选中
     * 
     * @type {Array<any>}
     * @memberof MyWork
     */
    protected value: Array<any> = [];

    /**
     *  日历样式
     * 
     * @type {Array<any>} 
     * @memberof MyWork
     */
    protected calendarStyle: string = 'month';

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyWork
     */
    public getDatas(): any[] {
      return [];
    }
    
    /**
     * 时间轴加载条数
     *
     * @type {number}
     * @memberof MyWork
     */  
    public count :number = 20;


    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyWork
     */
    public getData(): any {
      return {};
    }

    /**
     * vue生命周期created
     *
     * @memberof MyWork
     */
    protected created() {
      this.afterCreated();
    }

    /**
     * 处理created之后的逻辑
     *
     * @memberof MyWork
     */
    protected afterCreated() {
        this.initcurrentTime();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action, "load")) {
                    this.formatData(this.currentDate, data);
                }
            });
        }
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"IbzMyTerritory")){
                    return;
                }
                if(Object.is(action,'appRefresh')){
                    this.formatData(this.currentDate, data);
                }
            })
        }
    }

    /**
     * 事件绘制数据
     *
     * @memberof MyWork
     */
    public evendata :any = {bug:[],task:[],todo:[],daily:[],}

    /**
     * 图标信息
     *
     * @memberof MyWork
     */
    public illustration = [{color:"rgba(254, 228, 90, 1)",text:"Bug"},{color:"rgba(247, 110, 154, 1)",text:"任务"},{color:"rgba(255, 166, 0, 1)",text:"待办"},{color:"rgba(119, 255, 0, 1)",text:"日报"},]
    /**
     * 激活项
     *
     * @type {string}
     * @memberof MyWork
     */
    protected activeItem: string = 'bug';

    /**
     * 分页节点切换
     *
     * @param {*} $event
     * @returns
     * @memberof MyWork
     */
    protected ionChange($event:any) {
        let { detail: _detail } = $event;
        if (!_detail) {
            return ;
        }
        let { value: _value } = _detail;
        if (!_value) {
            return ;
        }
        this.activeItem = _value;
    }

    /**
     * 查询天数
     *
     * @memberof MyWork
     */
    protected selectday(year: any, month: any, weekIndex: any) {
        this.value = [year, month, this.day];
    }

    /**
     * 上一月事件的回调方法
     *
     * @memberof MyWork
     */
    protected prev(year: any, month: any, weekIndex: any) {
        if(this.calendarStyle == "month_timeline" || this.calendarStyle == "month"){
            this.selectday(year, month, this.day);
            this.formatData(new Date(year+'/'+month+'/'+'1'));
        }
        if(this.calendarStyle == "week_timeline" || this.calendarStyle == "week"){
            this.countWeeks(year,month,weekIndex);
        }
    }

    /**
     * 下一月事件的回调方法
     *
     * @memberof MyWork
     */
    protected next(year: any, month: any, weekIndex: any) {
        if(this.calendarStyle == "month_timeline" || this.calendarStyle == "month" ){
            this.selectday(year, month, this.day);
            this.formatData(new Date(year+'/'+month+'/'+'1'));
        }
        if(this.calendarStyle == "week_timeline" || this.calendarStyle == "week"){
            this.countWeeks(year,month,weekIndex);
        }
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof MyWork
     */
    public async remove(datas: any[]): Promise<any> {
        const calendarItemModel: any = this.calendarItemsModel.get(this.activeItem);
        let { appde, keyPSAppDEField, majorPSAppDEField }: { appde: string, keyPSAppDEField: string, majorPSAppDEField: string } = calendarItemModel;
        let arg: any = {};
        let keys: Array<string> = [];
        let infoStr: string = '';
        datas.forEach((data: any, index: number) => {
            keys.push(data[keyPSAppDEField]);
            if (index < 5) {
                if (!Object.is(infoStr, '')) {
                    infoStr += '、';
                }
                infoStr += data[majorPSAppDEField];
            }
        });

        if (datas.length < 5) {
            infoStr = infoStr + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        } else {
            infoStr = infoStr + '...' + this.$t('app.message.totle') + datas.length + this.$t('app.message.data');
        }
        return new Promise((resolve, reject) => {
            const _remove = async () => {
                let _context: any = { [appde]: keys.join(';') }
                const response: any = await this.service.delete(this.activeItem, { ...this.context, ..._context }, arg, this.showBusyIndicator);
                if (response && response.status === 200) {
                    this.$notice.success((this.$t('app.message.deleteSccess') as string));
                    this.formatData(this.currentDate);
                    resolve(response);
                } else {
                    const { error: _data } = response;
                    this.$notice.error(_data.message);
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
     * 选择年份事件的回调方法
     *
     * @memberof MyWork
     */
    protected selectYear(year: any) {
      this.value = [year, this.month, this.day];
      this.formatData(new Date(year+'/'+this.month+'/'+this.day));
    }

    /**
     * 选择月份事件的回调方法
     *
     * @memberof MyWork
     */
    protected selectMonth(month: any, year: any) {
      this.selectday(year, month, this.day);
      this.formatData(new Date(year+'/'+month+'/'+this.day));
    }

    /**
     * 初始化当前时间
     *
     * @memberof MyWork
     */
    protected initcurrentTime() {
      let tempTime = new Date();
      this.year = tempTime.getFullYear();
      this.month = tempTime.getMonth();
      this.day = tempTime.getDate();
    }

    /**
     * 格式化数据
     *
     * @memberof MyWork
     */
    protected formatData(curtime:any,data: any = {}) {
        this.currentDate = curtime;
        this.year = curtime.getFullYear();
        this.month = curtime.getMonth();
        this.day = curtime.getDate();
        this.start = (moment as any)(curtime).startOf('month').format('YYYY-MM-DD HH:mm:ss');
        this.end = (moment as any)(curtime).endOf('month').format('YYYY-MM-DD HH:mm:ss');
        this.load(Object.assign(data, {
          "start": this.start,
          "end": this.end
        }));
    }

    /**
     * 数据加载
     *
     * @protected
     * @param {*} [opt={}]
     * @returns {Promise<any>}
     * @memberof MyWork
     */
    protected async load(opt: any = {},isSetTileContent:boolean=true): Promise<any> {
        const arg: any = { ...opt };
        const isloading: boolean = this.showBusyIndicator === true ? true : false;
        const response: any = await this.service.search(this.activeItem, { ...this.context }, { ...arg }, this.showBusyIndicator);
        if (response && response.status === 200) {
            this.calendarItems = response.data;
            isSetTileContent?this.setTileContent():"";
        } else {
            this.$notice.error('系统异常，请重试!');
        }
        this.show = true;
    }

    /**
     * 设置事件数组
     *
     * @protected
     * @memberof MyWork
     */
    protected setTileContent(){
        this.evendata = {bug:[],task:[],todo:[],daily:[],}
        let bugItem :Array<any> = this.parsingData('bug','deadline');
        let taskItem :Array<any> = this.parsingData('task','eststarted');
        let todoItem :Array<any> = this.parsingData('todo','date');
        let dailyItem :Array<any> = this.parsingData('daily','date');
        this.setSign(bugItem,taskItem,todoItem,dailyItem,);
    }

    /**
     * 格式化标志数据
     * 
     * @param any 
     * @memberof MyWork
     */
    public setSign(bugItem: any,taskItem: any,todoItem: any,dailyItem: any,){
      let signData: any[] = [...bugItem,...taskItem,...todoItem,...dailyItem,];
      let obj: any = {}
      this.sign.length = 0;
      // 格式化数据
      signData.forEach((item:any,index:number) => {
          if(item.time.length == 10){
            let year = item.time.split('-')[0];
            let month = item.time.split('-')[1];
            let day = item.time.split('-')[2];
            if( month < 10 ){
              month = month.replace('0','')
            }
            if(day < 10){
              day = day.replace('0','')
            }
            item.time = year+'-'+month+'-'+day;
          }
          if(!obj[item.time]){
            Object.assign(obj,{[item.time]:item.evens})
          }else{
            obj[item.time].push(item.evens[0])
          }
      });
      for (const key in obj) {
        this.sign.push({time:key,evens:obj[key]});
      }
    }

    /**
     * 解析日历事件数据
     *
     * @param {string} tag
     * @param {string} mark
     * @returns {Array<any>}
     * @memberof MyWork
     */
    public parsingData(tag: string, mark: string): Array<any> {
        let dataItem: any = [];
        if (this.calendarItems[tag]) {
            this.calendarItems[tag].forEach((item: any) => {
                if (dataItem.length == 0) {
                    dataItem.push({ time: item[mark].substring(0, 10), evens: [item] });
                } else {
                    let flag = dataItem.every((currentValue:any)=>{
                        return (currentValue.time !== item[mark].substring(0, 10))
                    })
                    if(flag){
                        dataItem.push({ time: item[mark].substring(0, 10), evens: [item] });
                    }
                }
            });
        }
        return dataItem;
    }

    /**
     * 日历部件数据选择日期回调
     *
     * @param any 
     * @memberof MyWork
     */
    protected clickDay(data: any) {
      if (data) {
        let reTime = data.join('/');
        let temptime = new Date(reTime);
        this.year = temptime.getFullYear();
        this.month = temptime.getMonth();
        this.day = temptime.getDate();
        this.start = (moment as any)(temptime).startOf('day').format('YYYY-MM-DD HH:mm:ss');
        this.end = (moment as any)(temptime).endOf('day').format('YYYY-MM-DD HH:mm:ss');
        this.load(Object.assign(this.viewparams, { "start": this.start, "end": this.end }),false);
      }
    }

    /**
     * 日程点击事件
     *
     * @param {*} $event 事件信息
     * @memberof MyWork
     */
    protected getEditView(deName: string) {
        let view: any = {};
        switch(deName){
            case "ibzdaily": 
                view = {
                    viewname: 'ibz-daily-daily-mob-tab-exp-view', 
                    height: 0, 
                    width: 0,  
                    title: '日报分页导航视图', 
                    placement: '',
                    deResParameters: [],
                    parameters: [{ pathName: 'ibzdailies', parameterName: 'ibzdaily' }, { pathName: 'dailymobtabexpview', parameterName: 'dailymobtabexpview' } ],
                };
                break;
            case "task": 
                view = {
                    viewname: 'task-mob-edit-view', 
                    height: 0, 
                    width: 0,  
                    title: '任务移动端编辑视图', 
                    placement: '',
                    deResParameters: [{ pathName: 'stories', parameterName: 'story' }, ],
                    parameters: [{ pathName: 'tasks', parameterName: 'task' }, { pathName: 'mobeditview', parameterName: 'mobeditview' } ],
                };
                break;
            case "bug": 
                view = {
                    viewname: 'bug-mob-edit-view', 
                    height: 0, 
                    width: 0,  
                    title: 'Bug移动端编辑视图', 
                    placement: '',
                    deResParameters: [{ pathName: 'products', parameterName: 'product' }, ],
                    parameters: [{ pathName: 'bugs', parameterName: 'bug' }, { pathName: 'mobeditview', parameterName: 'mobeditview' } ],
                };
                break;
            case "todo": 
                view = {
                    viewname: 'todo-mob-edit-view', 
                    height: 0, 
                    width: 0,  
                    title: '待办事宜表移动端编辑视图', 
                    placement: '',
                    deResParameters: [],
                    parameters: [{ pathName: 'todos', parameterName: 'todo' }, { pathName: 'mobeditview', parameterName: 'mobeditview' } ],
                };
                break;
        }
        return view;
    }

    /**
     * 日程点击事件
     *
     * @param {*} $event 事件信息
     * @memberof MyWork
     */
    protected async onEventClick($event: any): Promise<any> {
        let view: any = {};
        let _context: any = { ...this.context };
        let itemType = $event.itemType;
        switch(itemType) {
            case "bug":
                _context.bug = $event.bug;
                view = this.getEditView("bug");
                break;
            case "task":
                _context.task = $event.task;
                view = this.getEditView("task");
                break;
            case "todo":
                _context.todo = $event.todo;
                view = this.getEditView("todo");
                break;
            case "daily":
                _context.ibzdaily = $event.ibzdaily;
                view = this.getEditView("ibzdaily");
                break;
        }
        if (Object.is(view.placement, 'INDEXVIEWTAB') || Object.is(view.placement, '')) {
            const routePath = this.globaluiservice.openService.formatRouteParam(_context, view.deResParameters, view.parameters, [this.context], this.viewparams);
            this.$router.push(routePath);
        } else {
            let response: any;
            if (Object.is(view.placement, 'POPUPMODAL')) {
                response = await this.$appmodal.openModal(view,  _context,  { ...this.viewparams });
            } else if (view.placement.startsWith('DRAWER')) {
                response = await this.$appdrawer.openDrawer(view,  _context,  { ...this.viewparams });
            }
            if (response && Object.is(response.ret, 'OK')) {
                // 刷新日历
                this.load(Object.assign(this.viewparams, { "start": this.start, "end": this.end }),false);
            }
        }
    }
    /**
     * 根据周下标计算事件
     *
     * @param {*} $event 事件信息
     * @memberof MyWork
     */
    public countWeeks(year: any, month: any, week: any) {
        let date = new Date(year + '/' + month + '/' + 1);
        let weekline = date.getDay();
        if(weekline == 0){
          this.formatData(new Date(year + '/' + month + '/' + (week*7 +1)));
        }else{
          this.formatData(new Date(year + '/' + month + '/' + (week*7 - weekline + 1)));
        }
    }

    
    /**
    * 选中数组
    *
    * @param {Array<any>}
     * @memberof MyWork
    */
    public selectedArray:Array<any> = [];
    
   /**
     * 是否展示多选
     *
     * @memberof MyWork
     */
    @Prop({default:false}) isChoose?: boolean;

    /**
     * 选中或取消事件
     *
     * @memberof MyWork
     */
    public checkboxSelect(item:any){
        let count = this.selectedArray.findIndex((i) => {
            return i.mobile_entity1id == item.mobile_entity1id;
        });
        if(count == -1){
            this.selectedArray.push(item);
        }else{
            this.selectedArray.splice(count,1);
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MyWork
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyWork
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
     * 开始拖动位置
     *
     * @memberof MyWorkBase
     */
    public StarttouchLength = 0;

    /**
     * 开始滑动
     *
     * @memberof MyWorkBase
     */
    public gotouchstart(e:any){
        let _this = this;
        let touch :any=e.touches[0];   
        let startY = touch.pageY; 
        this.StarttouchLength = startY;
        // console.log("开始",startY);
        
    }

    /**
     * touchmove
     *  
     *
     * @memberof MyWorkBase
     */
    public gotouchmove(e:any) {
        let touch :any=e.touches[0];   
        let startY = touch.pageY; 
        let calendar:any = this.$refs.calendar2;
        if(calendar){
            if(startY-this.StarttouchLength<0){
                calendar.changeStyle2(false);
            }else{
                calendar.changeStyle2(true);
            }
        }
    }

}
</script>

<style lang='less'>
@import './my-work-calendar.less';
</style>