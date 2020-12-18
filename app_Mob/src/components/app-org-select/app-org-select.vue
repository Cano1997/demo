<template>
  <div class="app-org-select">
       <van-cell-group>
        <van-field v-model="title" @focus="showSelect" @blur="hiddenSelect" :is-link="true" :arrow-direction="iconDirection" :label="label" placeholder="请选择" />
      </van-cell-group>
      <van-dropdown-menu :close-on-click-outside="false" :close-on-click-overlay="false" :direction="menuDirection">
      <van-dropdown-item v-model="title" :options="options" ref="selectItem"/>
      </van-dropdown-menu>
  </div>
</template>
<script lang = 'ts'>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { CodeListService } from "@/ibiz-core";
import { observable } from 'rxjs';
@Component({})
export default class AppOrgSelect extends Vue {

  public menuDirection:string = "down";

  public setElementPosition():void {
    debugger
    if (this.$el.getBoundingClientRect().top > (document.body.offsetHeight * 0.6)) {
      this.menuDirection = "up";
    }else {
      this.menuDirection = "down";
    }
  }

  /**
   * 标题，可通过父组件传值
   * 
   * @memberof AppOrgSelect
   */
  public label:string = "单位";

  /**
   * 输入框箭头方向
   * 
   * @memberof AppOrgSelect
   */
  public iconDirection:string = "down";

  /**
   * 输入值
   * 
   * @memberof AppOrgSelect
   */
  public title:any = "";

  /**
   * 下拉框初始数据，可通过父组件传值,格式为对象数组，必须包含text和value属性
   *  
   * @memberof AppOrgSelect
   */
  public data:any[] = [
        // { text: '全部商品', value: '全部商品' },
        // { text: '新款商品', value: '新款商品' },
        // { text: '活动商品', value: '活动商品' },
        // { text: '全部商品', value: '全部商品' },
        // { text: '新款商品', value: '新款商品' },
        // { text: '活动商品', value: '活动商品' },
        // { text: '全部商品', value: '全部商品' },
        // { text: '新款商品', value: '新款商品' },
        // { text: '活动商品', value: '活动商品' },
        // { text: '全部商品', value: '全部商品' },
        // { text: '新款商品', value: '新款商品' },
        // { text: '活动商品', value: '活动商品' },
        // { text: '全部商品', value: '全部商品' },
        // { text: '新款商品', value: '新款商品' },
        // { text: '活动商品', value: '活动商品' }
        ];

  /**
   * 下拉框实际渲染数据，格式与data一样
   * 
   * @memberof AppOrgSelect
   */
  public options:any[] = [
  ];
  
  /**
   * 弹出下拉框
   * 
   * @memberof AppOrgSelect
   */
  public showSelect():void {
    
    this.setElementPosition();
    let selectRef:any = this.$refs.selectItem;
     if (selectRef && this.$util.isFunction(selectRef.toggle)) {
      selectRef.toggle(true);
    }
    this.iconDirection = "up";
  }

  /**
   * 收回下拉框
   * 
   * @memberof AppOrgSelect
   */
  public hiddenSelect():void {
    let selectRef:any = this.$refs.selectItem;
     if (selectRef && this.$util.isFunction(selectRef.toggle)) {
      selectRef.toggle(false);
    }
    this.iconDirection = "down";
  }

  /**
   * 上下文
   * 
   * @memberof AppOrgSelect
   */
  @Prop() public context!:any;

  /**
   * 填充对象
   * 
   * @memberof AppOrgSelect
   */
  @Prop() public fillMap:any;

  /**
   * 过滤项
   * 
   * @memberof AppOrgSelect
   */
  @Prop() public filter?:any;

  /**
   * 代码表标识
   * 
   * @memberof AppOrgSelect
   */
  @Prop() public tag?:string;

  /**
   * 代码表类型
   * 
   * @memberof AppOrgSelect
   */
  @Prop() public codelistType?:string;

  /**
   * 是否多选
   * 
   * @memberof AppOrgSelect
   */
  @Prop({default:false}) public multiple?:boolean;

  /**
   * 是否禁用
   *
   * @type {*}
   * @memberof AppDepartmentSelect
   */
  @Prop({default:false}) public disabled?: boolean;

  /**
   * 查询单位路径
   * 
   * @memberof AppOrgSelect
   */
  @Prop() public url!:string;

  /**
   * 监听表单数据变化
   * 
   * @memberof AppOrgSelect
   */
  @Watch('data',{immediate:true,deep:true})
  onDataChange(newVal: any, oldVal: any) {
    if(newVal){
      this.computedSelectedData();
      if(this.filter){
        let tempFilterValue:any = this.initBasicData();
        // filter值变化才去请求数据
        if(tempFilterValue && (this.copyFilterValue !== tempFilterValue)){
          this.loadTreeData(this.url.replace('${orgid}',tempFilterValue));
          this.copyFilterValue = tempFilterValue;
        }
      }
    }
  }

  /**
   * 监听输入框内容并与下拉框匹配
   * 
   * @memberof AppOrgSelect
   */
  @Watch("title")
  onTitleChange(newVal: any,oldVal: any) {
    if(newVal && newVal.length){
      this.data.forEach((item) => {
        if(item.text.indexOf(this.title) > -1){
          this.options = [];
          this.options.push(item);
        }
      })
    }else{
      this.options = [...this.data]
    }
  }

  /**
   * 选择值
   * 
   * @memberof AppOrgSelect
   */
  public selectTreeValue:any = "";

  /**
   * 树节点数据
   * 
   * @memberof AppOrgSelect
   */
  public NodesData:any = [];

  /**
   * 备份过滤值
   * 
   * @memberof AppOrgSelect
   */
  public copyFilterValue:any;

  /**
   * vue生命周期
   * 
   * @memberof AppOrgSelect
   */
  public created(){
    if(!this.filter){
      this.loadTreeData(this.url);
    }
    this.options = [...this.data];
  }

  /**
   * 加载树数据
   * 
   * @memberof AppOrgSelect
   */
  public initBasicData(){
    // 计算出过滤值
    if(this.filter){
      if(this.data && this.data[this.filter]){
        return this.data[this.filter];
      }else if(this.context && this.context[this.filter]){
        return this.context[this.filter];
      }else{
        return null;
      }
    }
  }

  /**
   * 计算选中值
   * 
   * @memberof AppOrgSelect
   */
  public computedSelectedData(){
    // 单选
    if(!this.multiple){
      if(this.fillMap && Object.keys(this.fillMap).length >0){
        let templateValue:any = {};
        Object.keys(this.fillMap).forEach((item:any) =>{
          if(this.data && this.data[this.fillMap[item]]){
            Object.assign(templateValue,{[item]:this.data[this.fillMap[item]]});
          }
        })
        if(!templateValue.label && templateValue.id && this.tag && this.codelistType && Object.is(this.codelistType,"DYNAMIC")){
          this.fillLabel(templateValue,templateValue.id,(templateValue:any) =>{
            this.selectTreeValue = JSON.stringify([templateValue]);
          });
        }else{
          this.selectTreeValue = JSON.stringify([templateValue]);
        }
      }
    }else{
    // 多选
      if(this.fillMap && Object.keys(this.fillMap).length >0){
        let tempArray:Array<any> = [];
        Object.keys(this.fillMap).forEach((item:any) =>{
          if(this.data && this.data[this.fillMap[item]]){
            let tempDataArray:Array<any> = (this.data[this.fillMap[item]]).split(",");
            tempDataArray.forEach((tempData:any,index:number) =>{
              if(tempArray.length < tempDataArray.length){
                let singleData:any ={[item]:tempData};
                tempArray.push(singleData);
              }else{
                Object.assign(tempArray[index],{[item]:tempData});
              }
            })
          }
        })
        let tempflag:boolean = false;
        if(tempArray.length >0 && tempArray.length >0){
          tempArray.forEach((item:any) =>{
            if(!item.label) tempflag = true;
          })
        }
        if(tempflag && this.tag && this.codelistType && Object.is(this.codelistType,"DYNAMIC")){
          let tempStatus:number = 0;
          tempArray.forEach((item:any) =>{
            if(!item.label){
              tempStatus += 1;
              this.fillLabel(item,item.id,(result:any) =>{
                item = result;
                tempStatus -= 1;
                if(tempStatus === 0){
                  this.selectTreeValue = JSON.stringify(tempArray);
                }
              })
            }
          })
        }else{
          this.selectTreeValue = JSON.stringify(tempArray);
        }
      }
    }
  }

  /**
   * 加载树数据
   * 
   * @memberof AppOrgSelect
   */
  public loadTreeData(requestUrl:string){
    if(this.filter){
      const result:any = this.$store.getters.getOrgData(this.filter);
      if(result){
        this.NodesData = result;
        return;
      }
    }
    this.$http.get(requestUrl).then((res:any) =>{
      if(!res.status && res.status !== 200){
        console.error((this.$t('components.appOrgSelect.loadFail') as string));
        return;
      }
      this.NodesData = res.data;
      if(this.filter){
        this.$store.commit('addOrgData', { srfkey: this.filter, orgData: res.data });
      }
    })
  }

  /**
   * 树选择触发事件
   * 
   * @memberof AppOrgSelect
   */
  public treeSelectChange($event:any){
    // 多选
    if(this.multiple){
      if(!Object.is($event,'[]')){
        const tempValue:any = JSON.parse($event);
        if(this.fillMap && Object.keys(this.fillMap).length >0){
          Object.keys(this.fillMap).forEach((item:any) =>{
            let tempResult:any ="";
            tempValue.forEach((value:any,index:number) =>{
              tempResult += index>0?`,${value[item]}`:`${value[item]}`;
            })
            setTimeout(() => {
              this.emitValue(this.fillMap[item],tempResult);
            }, 0);
          })
        }
      }else{
        if(this.fillMap && Object.keys(this.fillMap).length >0){
          Object.keys(this.fillMap).forEach((item:any) =>{
            this.emitValue(this.fillMap[item],null);
          })
        }
      }
    }else{
      // 单选
      if(!Object.is($event,'[]')){
        const tempValue:any = JSON.parse($event)[0];
        if(this.fillMap && Object.keys(this.fillMap).length >0){
          Object.keys(this.fillMap).forEach((item:any) =>{
            setTimeout(() => {
              this.emitValue(this.fillMap[item],tempValue[item]);
            }, 0);
          })
        }
      }else{
        if(this.fillMap && Object.keys(this.fillMap).length >0){
          Object.keys(this.fillMap).forEach((item:any) =>{
            this.emitValue(this.fillMap[item],null);
          })
        }
      }
    }
  }

  /**
   * 抛值
   * 
   * @memberof AppOrgSelect
   */
  public emitValue(name:string,value:any){
    this.$emit('select-change',{name:name,value:value});
  }

  /**
   * 填充label
   * 
   * @memberof AppOrgSelect
   */
  public fillLabel(tempObject:any,valueItem:any,callback:any){
    if(!tempObject.label && tempObject.id && this.tag && this.codelistType && Object.is(this.codelistType,"DYNAMIC")){
      let codeListService:CodeListService = new CodeListService();
      codeListService.getItems(this.tag).then((items:any) =>{
        if(items && items.length >0){
          let result:any = items.find((item:any) =>{
            return item.id === valueItem;
          })
          Object.assign(tempObject,{label:result.label});
        }
        callback(tempObject);
      }).catch((error:any) =>{
        console.log(error);
      })
    }
  }

}
</script>

<style lang="less">
@import "./app-org-select.less";
</style>