<template>

  <div class="app-form-item2">
    <div class="app-form-item2-search"  v-if="itemType == 'MOBDROPDOWNLIST' || itemType == 'MOBRADIOLIST'">
      <div class="app-form-item2_header">
          <div class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated" :class="required?'app-form-item-label-required':'app-form-item-label-notRequired'" :style="{minWidth:labelWidth+'px'}" position="floating" v-if="isShowCaption && labelWidth > 0">{{isEmptyCaption ? '' : caption}}</div>
          <div class="selectValue" @click="setHight">
              <div class="select_text" v-if="slotValue && slotValue.activeItem && slotValue.activeItem.text">{{slotValue.activeItem.text}}</div>
              <div class="select_icon" v-if="slotValue && slotValue.options && slotValue.options.length > 6" ><span v-show="!slotValue || !slotValue.activeItem || !slotValue.activeItem.text">全部</span><ion-icon v-if="!allDataStatus" name="chevron-down-outline"></ion-icon><ion-icon v-if="allDataStatus" name="chevron-up-outline"></ion-icon></div>
          </div>
          </div>
      <div class="app-form-item2_content" ><slot ref="slot_content"></slot></div>
  </div>
      <ion-item v-else  :class="[classes,labelPos.toLowerCase()]" :disabled="disabled">
        <template v-if="uiStyle == 'STYLE2'">
            <ion-label class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated" :class="required?'app-form-item-label-required':'app-form-item-label-notRequired'" :style="{minWidth:labelWidth+'px'}" position="floating" v-if="isShowCaption && labelWidth > 0">{{isEmptyCaption ? '' : caption}}</ion-label>
            <slot></slot>
        </template>
        <template v-else>
            <template v-if="labelPos == 'LEFT'">
                <ion-label class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated" :class="required?'app-form-item-label-required':'app-form-item-label-notRequired'" :style="{minWidth:labelWidth+'px'}" v-if="isShowCaption && labelWidth > 0">{{isEmptyCaption ? '' : caption}}</ion-label>
                <div :style="contentStyle" style="display: flex;align-items: center;">
                    <slot></slot>
                </div>
                <div class="prompt_text">{{error}}</div>
            </template>
            <template v-if="labelPos == 'TOP'">
                <ion-label
                class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                :class="required?'app-form-item-label-required':'app-form-item-label-notRequired'"
                :style="{minWidth:labelWidth+'px'}"
                position="floating"
                v-if="isShowCaption && labelWidth > 0">
                    {{isEmptyCaption ? '' : caption}}
                </ion-label>
                <slot></slot>
                <div class="prompt_text">{{error}}</div>
            </template>
            <template v-if="labelPos == 'RIGHT' ">
                <slot></slot>
                <div class="prompt_text_right">{{error}}</div>
                <ion-label class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated" :class="required?'app-form-item-label-required':'app-form-item-label-notRequired'" :style="{minWidth:labelWidth+'px'}" v-if="isShowCaption && labelWidth > 0">{{isEmptyCaption ? '' : caption}}</ion-label>
            </template>
            <template v-if="labelPos == 'NONE'" >
                <slot></slot>
            </template>
      </template>
  </ion-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Util } from '@/ibiz-core/utils';
@Component({})
export default class AppFormItem extends Vue {
    /**
     * 内容样式
     *
     * @readonly
     * @memberof AppFormItem
     */
    get contentStyle() {
        return {
            width: this.isShowCaption && this.labelWidth > 0 ? `calc(100% - ${this.labelWidth}px)` : '100%',
        }
    }

    /**
     * item类型
     *
     * @readonly
     * @memberof AppFormItem
     */
    @Prop() public itemType?: string;

    /**
     * 所有数据显示状态
     *
     * @readonly
     * @memberof AppFormItem
     */
    public allDataStatus: boolean = false;

        /**
     * 名称
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public caption!: string;

    /**
     * 是否禁用
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public disabled?: boolean;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public error?: string;

    /**
     * 表单项值
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public itemValue?: any;

    /**
     * 插槽值
     *
     * @type {string}
     * @memberof AppFormItem
     */
    public slotValue: any = {};

    /**
     * 校验值规则
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Watch('itemValue')
    onItemValueChange() {
        // this.validateRules();
        let slot: any = this.getSlot();
        setTimeout(() => {
            if (slot && slot.componentInstance) {
                this.slotValue = slot.componentInstance;
            }
        }, 1);
    }

    /**
     * 获取插槽值
     *
     * @readonly
     * @memberof AppFormItem
     */
    public getSlot() {
        let slot: any = this.$slots.default
        if (slot) {
            return slot[0]
        }
        return null
    }

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AppFormItem
     */
    public errorText: string = '';

    /**
     * label样式
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public labelStyle?: string;

    /**
     * 标签位置
     *
     * @type {(string | 'BOTTOM' | 'LEFT' | 'NONE' | 'RIGHT' | 'TOP')}
     * @memberof AppFormItem
     */
    @Prop() public labelPos?: string | 'BOTTOM' | 'LEFT' | 'NONE' | 'RIGHT' | 'TOP';

    /**
     * 标签宽度
     *
     * @type {number}
     * @memberof AppFormItem
     */
    @Prop({}) public labelWidth!: number;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public isShowCaption?: boolean;

    /**
     * 标签是否空白
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public isEmptyCaption?: boolean;

    /**
     * 表单项名称
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public name!: string;

    /**
     * 内置样式
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public uiStyle?: string;

    /**
     * 表单项值规则
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public itemRules!: any;

    /**
     * 值规则数组
     *
     * @type {any[]}
     * @memberof AppFormItem
     */
    public rules: any[] = [];

    /**
     * 是否必填
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    public required: boolean = false;

    /**
     * 表单项值规则监控
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppFormItem
     */
    @Watch('itemRules', { deep: true })
    onItemRulesChange(newVal: any, oldVal: any) {
        if (!newVal) {
            return;
        }
        this.computeRequired(newVal);
    }

    /**
     * 设置高度
     *
     * @readonly
     * @memberof AppFormItem
     */
    public setHight() {
        let slot: any = this.$slots.default
        if (slot) {
            setTimeout(() => {
                if (slot[0].elm.style.height != 'auto') {
                    this.allDataStatus = true;
                    slot[0].elm.style.height = "auto";
                } else {
                    this.allDataStatus = false;
                    slot[0].elm.style.height = "105px";
                }

            }, 1);

        }
    }

    /**
     * 计算样式
     *
     * @readonly
     * @type {string []}
     * @memberof AppFormItem
     */
    get classes(): string[] {
        return [
            'app-form-item',
            Object.is(this.labelPos, 'TOP') ? 'app-form-item-label-top' : ''
        ];
    }

    /**
     * label样式
     *
     * @readonly
     * @type {string[]}
     * @memberof IBizMDControl
     */
    get labelclasses(): string[] {
        return [
            this.required ? 'app-form-item-label-required' : '',
            this.labelStyle ? this.labelStyle : ''
        ];
    }

    /**
     * vue 生命周期
     *
     * @memberof AppFormItem
     */
    public mounted() {
        if (this.itemRules) {
            this.computeRequired(this.itemRules);
        }
        setTimeout(() => {
            let slot: any = this.getSlot();
            setTimeout(() => {
                if (slot && slot.componentInstance) {
                    this.slotValue = slot.componentInstance;
                }
            }, 1);
        }, 1000);
    }

    /**
     * 计算是否必填
     *
     * @private
     * @param {*} rules
     * @memberof AppFormItem
     */
    private computeRequired(rules: any): void {
        try {
            const _rules: any[] = rules;
            this.rules = [..._rules];
            this.rules.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    this.required = rule.required;
                    return true;
                }
                return false;
            });
        } catch (error) {
        }
    }

    /**
     * 校验值规则
     *
     * @returns {boolean}
     * @memberof AppFormItem
     */
    public async validateRules(): Promise<boolean> {
        return await this.validate(name, this.itemValue);
    }

    /**
     * 校验值规则
     *
     * @returns {boolean}
     * @memberof AppFormItem
     */
    public validate(property: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            Util.validateItem(property, data, this.rules).then(() => {
                this.errorText = "";
                resolve(true);
            }).catch(({ errors, fields }) => {
                this.errorText = errors[0].message;
                resolve(false);
            });
        });
    }

}
</script>

<style lang='less'>
@import './app-form-item2.less';
</style>