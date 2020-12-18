<template>
    <van-rate class="app-mobile-rate" v-model="curValue"/>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Rate } from 'vant';

Vue.use(Rate);
@Component({
    components: {
    }
})
export default class AppRate extends Vue {       
    /**
     * 评分值
     *
     * @type {string}
     * @memberof AppRate
     */
    @Prop() public value?: string;
    
    /**
     * 获取输入的Value值
     *
     * @type {string}
     * @memberof AppRate
     */
    get curValue(){
        return Number(this.value);
    }

    /**
     * 根据curValue变化抛出事件change
     *
     * @type {string}
     * @memberof AppRate
     */
    set curValue(val:any){
        this.$emit('change',val.toString());
    }

    public mounted(){
        this.changeLabelStyle();
    }

    /**
     * 修改label默认样式
     * @memberof AppRate
     */
    public changeLabelStyle() {
      document.querySelectorAll(".app-mobile-rate").forEach((element: any) => {
        let prev = this.getNearEle(element, 1);
        if(prev){
          prev.style.transform = 'none';
        }
      })
    }

    /**
     * 查找相邻前一个元素
     * 
     *  @memberof AppRate
     */
    public getNearEle(ele: any, type: any) {
      type = type == 1 ? "previousSibling" : "nextSibling";
      var nearEle = ele[type];
      while (nearEle) {
        if (nearEle.nodeType === 1) {
          return nearEle;
        }
        nearEle = nearEle[type];
        if (!nearEle) {
          break;
        }
      }
      return null;
    }        

}
</script>
<style lang="less">
  .app-mobile-rate{
    width: 100%;
    display: flex;
    justify-content: flex-end;
   }
</style>