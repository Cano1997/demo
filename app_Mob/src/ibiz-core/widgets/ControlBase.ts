import { Subject, Subscription } from 'rxjs';
import GlobalUiService from '@/global-ui-service/global-ui-service';
import { Vue, Prop } from 'vue-property-decorator';
/**
 * 部件基类
 *
 * @export
 * @class ControlBase
 * @extends {Vue}
 */
export class ControlBase extends Vue {

     /**
     * 名称
     *
     * @type {string}
     * @memberof ControlBase
     */
    @Prop() protected name?: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ControlBase
     */
    @Prop() protected viewName!: string;


    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ControlBase
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof ControlBase
     */
    @Prop({ default: {} }) protected context?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ControlBase
     */
    @Prop({ default: {} }) protected viewparams?: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof ControlBase
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 全局 ui 服务
     *
     * @type {GlobalUiService}
     * @memberof ControlBase
     */
    protected globaluiservice: GlobalUiService = new GlobalUiService();


    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof ControlBase
     */
    protected closeView(args: any[]): void {
        let _this: any = this;
        _this.$emit('closeview', args);
    }
    
    /**
     * 服务
     *
     * @param {any[]} args
     * @memberof ControlBase
     */
    protected service:any;



}