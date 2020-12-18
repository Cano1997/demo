<template>
    <div class="user-header" @click="header_click">
        <div class="content" >
            <div class="user-header_content_left">
                <img v-if="userImg" @click.stop="header_img_click" :src="userImg" alt="">
                <van-icon @click.stop="header_img_click" v-else name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
            </div>
            <div class="user-header_content_right">
                <div class="username"><strong><span>{{username}}</span></strong></div>
                <div class="userid">账号：{{userLoginName}}</div>
            </div>
        </div>
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <van-popup v-model="showPopup"  get-container="#app" position="right" :style="{ height: '100%',width: '100%' }" duration="0.2" :close-on-popstate="true">
            <component 
            :is="is" 
            @close="close"
            viewDefaultUsage="actionView"
            _context="" 
            _viewparams="">
            </component>
        </van-popup>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";
import i18n from '@/locale'
import { CodeListService } from "@/ibiz-core";
import UserRealNameCodelist from "@app-core/code-list/user-real-name"
@Component({
    components: {},
})
export default class UserHeader extends Vue {

    public showPopup = false;

    public is = 'sys-employeehead-portrait-mob-edit-view'

    public userLoginName = '';

    public userImg = '';

    public username = '';

    public UserRealName: any;

    /**
     * 图片地址
     *
     * @param {*} nodes
     * @memberof UserHeader
     */
    public imageUrl = 'ibizutil/download';

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof UserHeader
     */
    public codeListService: UserRealNameCodelist = new UserRealNameCodelist();

    /**
     * 获取用户头像
     */
    public getUserImg(value: string) {
        let icon = JSON.parse(this.getCodeListText('UserRealName', value).icon);
        if (icon && icon[0] && icon[0].id) {
            return `${this.imageUrl}/${icon[0].id}`;
        }
        return '';
    }

    /**
     * 获取代码表文本
     */
    public getCodeListText(tag: string, id: string): any {
        let _this: any = this;
        if (!_this[tag]) {
            return id;
        }
        let index = _this[tag].findIndex((item: any) => { return item.value == id })
        return index > -1 ? _this[tag][index] : id;
    }

    /**
     * 生命周期
     *
     * @memberof UserHeader
     */
    public created() {
        this.parseData();
    }

    public parseData() {
        const { context } = this.$store.getters.getAppData();
        if (context) {
            this.userLoginName = context.srfloginname;
        }
        this.codeListService.getItems('UserRealName').then((res) => {
            this.UserRealName = res;
            if (context && context.srfloginname) {
                this.userImg = this.getUserImg(context.srfloginname);
                this.username = this.getCodeListText('UserRealName', context.srfloginname).label;
            }
        });
    }

    /**
     * 头点击
     *
     * @memberof UserHeader
     */
    private header_click() {
        this.$router.push(`/viewshell/null/sysemployees/null/loginmobeditview`);
    }

    /**
     * 头像点击
     *
     * @memberof UserHeader
     */
    private header_img_click() {
        this.showPopup = true;
    }

    public close() {
        this.showPopup = false;
        this.parseData();
    }
}
</script>
<style lang="less" scoped>
@import './user-header.less';
</style>
