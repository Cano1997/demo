<template>
    <div :id="mapId" class="map"></div>
</template>


<script lang='ts'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import ActionService from '@/app-core/service/action/action-service';
import UserLoginPositionService from '@/app-core/ctrl-service/action/user-login-position-map-service';
import AppCenterService from "@/ibiz-core/app-service/app/app-center-service";

import ActionUIService from '@/ui-service/action/action-ui-action';

import echarts from 'echarts';
import 'echarts/map/js/china.js'
import { Http } from "@/ibiz-core/utils";


@Component({
    components: { }
})
export default class UserLoginPositionBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof UserLoginPosition
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof UserLoginPosition
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof UserLoginPosition
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof UserLoginPosition
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof UserLoginPosition
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof UserLoginPosition
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof UserLoginPosition
     */
    protected getControlType(): string {
        return 'MAP'
    }

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof UserLoginPosition
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 转化数据
     *
     * @param {any} args
     * @memberof  UserLoginPositionBase
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
     * @type {UserLoginPositionService}
     * @memberof UserLoginPosition
     */
    protected service: UserLoginPositionService = new UserLoginPositionService({$store:this.$store});

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof UserLoginPosition
     */
    protected appEntityService: ActionService = new ActionService();

    /**
     * 界面UI服务对象
     *
     * @type {ActionUIService}
     * @memberof UserLoginPositionBase
     */  
    public deUIService:ActionUIService = new ActionUIService(this.$store);
    

    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof UserLoginPosition
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof UserLoginPositionBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof UserLoginPosition
     */
    @Prop() protected fetchAction!: string;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof UserLoginPosition
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 应用状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof UserLoginPositionBase
     */
    public appStateEvent: Subscription | undefined;

    /**
    * 地图数据数组
    *
    * @param {Array<any>}
    * @memberof UserLoginPosition
    */
    public items:Array<any> =[];

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof UserLoginPositionBase
     */
    public getData(): any {
        return null;
    }

    /**
    * vue生命周期created
    *
    * @memberof UserLoginPosition
    */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof UserLoginPosition
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action, "load")) {
                    this.load(Object.assign(data));
                }
                if (Object.is(action, "search")) {
                    this.load(Object.assign(data));
                }
                if (Object.is(action, "quicksearch")) {
                    this.load(Object.assign({ query: data }));
                }
                if (Object.is(action, "refresh")) {
                    this.refresh();
                }
            });
        }
        if(AppCenterService && AppCenterService.getMessageCenter()){
            this.appStateEvent = AppCenterService.getMessageCenter().subscribe(({ name, action, data }) =>{
                if(!Object.is(name,"MOBMAP")){
                    return;
                }
                if(Object.is(action,'appRefresh')){
                    this.refresh();
                }
            })
        }
    }

    /**
     * 数据加载
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [type=""]
     * @returns {Promise<any>}
     * @memberof UserLoginPosition
     */
    private async load(data: any = {}, type: string = "",isloadding = this.showBusyIndicator): Promise<any> {
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(data, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(data,{viewparams:tempViewParams});
        const response: any = await this.service.search(this.fetchAction, this.context, data, isloadding);
        if (!response || response.status !== 200) {
            this.$notify({ type: 'danger', message: response.error.message });
            return response;
        }
        this.$emit('load', (response.data && response.data) ? response.data : []);
        this.items = [];
        this.items = response.data;
        for (let index = 0; index < this.series.length; index++) {
            const element:any = this.series[index];
            element.data = await this.convertDat(element.modelType);
        }
        this.setOptions();
        return response;
    }

    /**
     * 刷新数据
     *
     * @returns {Promise<any>}
     * @memberof Map
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
     * map对象
     *
     * @type {}
     * @memberof MapBase
     */   
    public map :any;

    /**
     * 图表div绑定的id
     *
     * @type {}
     * @memberof MapBase
     */   
    public mapId:string = this.$util.createUUID();


    public mapStyle = ""

    /**
     * 地图数据项模型
     *
     * @type {}
     * @memberof MapBase
     */   
    public mapItems:any = {
                            'test':{
                            bkcolor:'',
                            color:'',
                            content:'',
                            latitude:'actionmanner',
                            longitude:'objectid',
                            text:'comment',
                            tips:'',
                            code:'0'
                        }
                    }

    //点击弹出
    public tooltip = {
      
    }
    // 旁边的滑动栏
    public visualMap = {
        left: 'left',
        top: 'bottom',
        pieces: [
                {
                    label:'test',
                    color:'rgba(58, 211, 155, 1)',
                    dimension:4,
                    min:0,
                    max:0,
                }
        ],
        show: true
    }

    //地图参数
    public geo = {
        map: 'china',
        roam: false,
        zoom: 1.23,
        label: {
            normal: {
                show: true,
                fontSize: '10',
                // 字体颜色
                color: 'rgba(0,0,0,0.7)',
            }
        },
        itemStyle: {
            normal: {
                // 边框颜色
                borderColor: 'rgba(0, 0, 0, 0.2)',
                // 地图默认背景
                areaColor: "#efefef",

            },
            emphasis: {
                // 点击背景颜色
                areaColor: '#F3B329',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }
    }
    // 提示
    public series = [
        {
            name: 'test',
            type: 'scatter',
            modelType: 'test',
            symbolSize: 10,//控制点的大小
            coordinateSystem: 'geo',
            encode: {
                value: 2
            },
            label: {
             
                show: false
            },
          
            emphasis: {
                label: {
                    show: false
                }
            }
        }
        

    ]
    
    //option
    public option: any = {};

    /**
    * mounted
    */
    public mounted() {
        this.afterMounted();
    }

   /**
    * afterMounted
    */
    public afterMounted(){
        Object.assign(this.option, { tooltip: this.tooltip }, { visualMap: this.visualMap }, { geo: this.geo }, { series: this.series })
        let element: any = document.getElementById(this.mapId);
        this.map = echarts.init(element);
    }

    // 绘制
    public  setOptions(){
        if(!this.map){
            return
        }
        console.log(this.option);
        this.map.setOption(this.option);
    }

    // 定位数据位置
    public async convertDat (tag:any) {
        let res:any = []
        let mapItemModel = this.mapItems[tag];
        let mapItemData :any= this.items[tag];
        for (let index = 0; index < mapItemData.length; index++) {
            const element = mapItemData[index];
            let latitude = element[mapItemModel.latitude];
            let longitude =  element[mapItemModel.longitude];
            if(longitude && latitude){
                res.push({
                    value: [longitude,latitude].concat(mapItemData.filter((temp:any)=>{return temp[mapItemModel.latitude] == latitude && temp[mapItemModel.longitude]==longitude }).length,mapItemModel.code)
                });
            }
        }
        return res;
    }
}
</script>

<style lang='less'>
@import './user-login-position-map.less';
</style>