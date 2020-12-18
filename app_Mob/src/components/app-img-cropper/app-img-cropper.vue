<template>
  <div class="app-img-cropper" v-show="isCrop">
    <div class="operList">
      <van-button class="oper" @click="unImg">取消</van-button>
      <van-button class="oper" @click="rotateLeft">↺</van-button>
      <van-button class="oper" @click="changeScale(-1)">-</van-button>
      <van-button class="oper" @click="changeScale(1)">+</van-button>
      <van-button class="oper" @click="rotateRight">↻</van-button>
      <van-button class="oper" @click="sureImg">确认</van-button>
    </div>
     
    <VueCropper
    ref="cropper"
    :img="url"
    :autoCrop="true"
    />
    
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { VueCropper }  from 'vue-cropper' 
@Component({
    components: {
      VueCropper
    },
})
export default class AppImgCropper extends Vue {
  public isCrop:Boolean = false;
  public sureImg():void {
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.getCropData)) {
       cropper.getCropData((data:any) => {
         this.$emit('getCropData',data);
         this.isCrop = true;
        })
      }
  }
  public unImg():void {
    this.isCrop = false;
  }
@Prop() public url!:string;

  public changeScale(num:number):void { 
    num = num || 1; 
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.changeScale)) {
        cropper.changeScale(num);
      }
    }

  public rotateLeft():void { 
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.rotateLeft)) {
        cropper.rotateLeft();
      }
    }
  public rotateRight():void { 
    let cropper:any = this.$refs.cropper;
     if (cropper && this.$util.isFunction(cropper.rotateRight)) {
        cropper.rotateRight();
      }
    }

    public created(){
    }
}
</script>

<style lang="less">
@import "./app-img-cropper.less";
</style>