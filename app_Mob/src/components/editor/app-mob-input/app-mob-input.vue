<template>
    <div class="editor-input">
        <ion-input class="app-mob-input" debounce="300" :type="type" :value="value" :placeholder="placeholder" @ionFocus="focus" @ionChange="change" @ionBlur="blur"></ion-input>
        <div class="app-mob-unit" v-if="unit">{{unit}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';

@Component({
    components: {
    }
})
export default class AppInput extends Vue {    

  public timerId:any = null;

  public focus(): void {
    console.log("点击");
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
      let count = 0;
    this.timerId = setInterval( () => {
      if (count < 3) {
        count++;
      }else {
        clearInterval(this.timerId);
        this.timerId = null;
        return
      }
      document.body.scrollTop = document.body.scrollTop
    },300);
    }
  }

  public blur(): void {
    
    if(this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.$emit('blur');
  }

    /**
     * 输入值
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public value?: string;
    
    /**
     * 类型
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public type?: string;

    /**
     * 占位提示文字
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public placeholder?:string;  
    
    /**
     * 单位
     *
     * @type {string}
     * @memberof AppInput
     */
    @Prop() public unit?: string;
    
    /**
     * change事件
     *
     * @memberof AppInput
     */
    public change(value: any) {
        if(this.type == "number"){
            this.$emit("change",parseInt(value.detail.value));
        }else{
            this.$emit("change", value.detail.value);
        }
    }
}
</script>
<style lang="less">
  @import './app-mob-input.less';
</style>