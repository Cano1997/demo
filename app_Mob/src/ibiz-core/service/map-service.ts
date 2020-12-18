import VueAMap from "vue-amap";

/**
 * 地图服务
 *
 * @export
 * @class MapService
 */
export class MapService {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof MapService
     */
    private static readonly instance = new MapService();

    /**
     * 地图sdk
     *
     * @memberof MapService
     */
    public readonly map = (window as any).AMap;

    /**
     * 地图是否已经初始化
     *
     * @private
     * @type {boolean}
     * @memberof MapService
     */
    private $isInit: boolean = false;
    /**
     * 是否已经初始化
     *
     * @type {boolean}
     * @memberof MapService
     */
    public get isInit(): boolean {
        return this.$isInit;
    }

    /**
     * Creates an instance of MapService.
     * @memberof MapService
     */
    private constructor() {
        if (MapService.instance) {
            return MapService.instance;
        }
        this.init();
    }

    /**
     * 获取实例
     *
     * @static
     * @returns {MapService}
     * @memberof MapService
     */
    public static getInstance(): MapService {
        return MapService.instance;
    }

    public  getAMap(): any {
        let _window:any = window;
        return _window.AMap;
    }

    private init() {
        VueAMap.initAMapApiLoader({
            key: "6e350f60986cba316719fdc7bd55d8d3",
            plugin: [
              "AMap.Geocoder",
              "AMap.Geolocation" 
            ],
          })
          this.$isInit = true;
    }
    
    /**
     * 通过经纬度获取位置详情
     */
    public geocoder(lng:[]):Promise<any>{
        return new Promise((resolve, reject)=>{
            let _window:any = window;
            let AMap = _window.AMap;
            AMap.plugin('AMap.Geocoder', ()=> {
            let geocoder = new AMap.Geocoder({})
            geocoder.getAddress(lng, (status:any, result:any) =>{
              if (status === 'complete' && result.info === 'OK') {
                    resolve(result.regeocode)
                }else{
                    reject(result.regeocode)
                }
              })
            })
        });
    }


}
