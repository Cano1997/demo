<template>
   <van-stepper class="app-mobile-stepper" v-model="curValue"/>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Stepper } from 'vant';
Vue.use(Stepper);
@Component({
    components: {
      
    }
})
export default class AppStepper extends Vue {
    /**
     * 确定的时间
     *
     * @type {number}
     * @memberof AppStepper
     */
    @Prop() public value?:number;

    get curValue(){
        return this.value;
    }

    set curValue(value:any){
        this.$emit('change',value.toString());
    }

    public mounted(){
        this.changeLabelStyle();
    }

    /**
     * 修改label默认样式
     * @memberof AppStepper
     */
    public changeLabelStyle() {
      document.querySelectorAll(".app-mobile-stepper").forEach((element: any) => {
        let prev = this.getNearEle(element, 1);
        if(prev && prev.style){
          prev.style.transform = 'none';
        }
      })
    }

    /**
     * 查找相邻前一个元素
     * 
     *  @memberof AppStepper
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
  .app-mobile-stepper{
    width: 100%;
    text-align: right;
   }
</style>