<template>
    <div class="app-mob-menu-ionic-view">
        <ion-card-content class="app-mob-menu-ionic-view__content">
            <ion-grid>
                <ion-row>
                    <template v-for="item in items">
                        <ion-col v-if="!item.hidden" :size="size" :key="item.id">
                            <ion-tab-button @click="selectItem(item.name)" :class="item.textcls?item.textcls:''">
                                <template v-if="item.icon != ''">
                                    <img :src="item.icon" />
                                </template>
                                <template v-else-if="item.iconcls != ''">
                                    <ion-icon v-if="item.iconcls.indexOf('iconfont') === -1" :name="item.iconcls">
                                    </ion-icon>
                                    <svg v-else class="icon" aria-hidden="true">
                                        <use :xlink:href="'#'+item.iconcls.substring(9)"></use>
                                    </svg>
                                </template>
                                <template v-else>
                                    <ion-icon name="home-outline"></ion-icon>
                                </template>
                                <!-- badge_style是为了用户在设置了图片图标时计数器会出现样式错乱， -->
                                <ion-icon v-show="false" name="badge_style" />
                                <ion-label >{{$t(`app.menus.${menuName}.${item.name}`)}}</ion-label>
                                <template v-if="counterServide">
                                    <ion-badge color="danger" v-if="counterServide.counterData[item.counterid]">{{counterServide.counterData[item.counterid]}}</ion-badge>
                                </template>
                            </ion-tab-button>
                        </ion-col>
                    </template>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component({
    components: {}
})
export default class AppMobMenuIonicView extends Vue {
    /**
     * 菜单名称
     *
     * @type {string}
     * @memberof AppMobMenuIonicView
     */
    @Prop() public menuName!: string;

    /**
     * 菜单数据项
     *
     * @type {Array<any>}
     * @memberof AppMobMenuIonicView
     */
    @Prop() public items!: Array<any>;

    /**
     * 计数器名称
     *
     * @type {string}
     * @memberof AppMobMenuIonicView
     */
    @Prop() public counterName!: string;

    /**
     * 菜单选中事件
     *
     * @param {*} val
     * @returns
     * @memberof AppMobMenuIonicView
     */
    @Emit()
    select(val: any) {
        return val;
    }

    /**
     * 选中菜单项
     *
     * @param {string} name
     * @memberof AppMobMenuIonicView
     */
    public selectItem(name: string): void {
        this.select(name);
    }

    /**
     * vue 生命周期
     *
     * @memberof AppMobMenuIonicView
     */
    public created() {
        this.loadCounterData();
    }

    /**
     * vue 生命周期
     *
     * @memberof AppMobMenuIonicView
     */
    public destroyed() {
        if(this.counterServide){
            this.counterServide.destroyCounter();
        }
    }

    /**
     * 计数器
     *
     * @memberof AppMobMenuDefaultView
     */
    public counterServide:any = null;

    /**
     * 加载计数器数据
     *
     * @returns {Promise<any>}
     * @memberof AppMobMenuIonicView
     */
    public async loadCounterData(): Promise<any> {
        const counterServiceConstructor = window.counterServiceConstructor;
        this.counterServide = await counterServiceConstructor.getService(this.counterName);
    }

    /**
     * 动态栅格
     *
     * @memberof AppMobMenuIonicView
     */
    get size() {
        return document.body.scrollWidth > 365?3:4;
    }

}
</script>

<style lang="less">
@import "./app-mob-menu-ionic-view.less";
</style>