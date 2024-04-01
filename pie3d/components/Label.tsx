
import { Component, Prop } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from 'ibiz-vue';
import Vue from 'vue';
import { PieSlice } from '../types'
import { createLabelPath, getTextWidth } from '../utils'


@Component({})
@VueLifeCycleProcessing()
export class Label extends Vue {

  @Prop() public data!: PieSlice;
  @Prop() public pathVariables!: {
    height: number
    fixed: number
    rx: number
    ry: number
  };
  @Prop() public textSize!: number;
  @Prop() public showLabelPercentage!: boolean;

  public params: any = {};
  public text: string = '';

  created() {
    const { fixed, rx, ry, height } = this.pathVariables;
    const relativeHeight = height * this.data.percentageValue;
    const value = (this.data.percentageValue * 100).toFixed(fixed)
    this.text = `${this.data.label ?? ''}${this.showLabelPercentage ? `(${value}%)` : ''}`
    this.params =
    createLabelPath(this.data.middleAngle, rx, ry, relativeHeight, getTextWidth(this.data.title || '', this.textSize), this.textSize)
    if (this.data.label && this.data.label instanceof Function) {
      this.text = this.data.label(this.params.x,this.params.y);
    }
  }

  render() {
    const { path, x, y } = this.params;
    const style = {
      stroke: this.data.color
    }
    return (
      <g>
        <path
          d={path}
          stroke={this.data.color}
          strokeWidth="1"
          fill='none'
        />
        <text x={x} y={y} fontSize={this.textSize} style={style} >
          {this.text}
        </text>
      </g>
    )
  }

}


