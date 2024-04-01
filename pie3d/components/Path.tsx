
import { Component, Prop } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from 'ibiz-vue';
import Vue from 'vue';
import { PathType, PieSlice } from '../types'

import {
  createEndWallPath,
  createInnerPath,
  createOuterPath,
  createStartWallPath,
  createTopPath,
  getNewPosition
} from '../utils'

type pathVariables = {
    height: number
    ir: number
    fixed: number
    moveDistance: number
    moveElement: (startAngle: number) => void
    showTooltips: boolean
    stroke: string
    strokeWidth: number
    onClick: (index: number) => void
    rx: number
    ry: number
    tooltipShowName: boolean
    tooltipShowPercentage: boolean
    tooltipShowValue: boolean
}


@Component({})
@VueLifeCycleProcessing()
export class Path extends Vue {

  @Prop() public data!: PieSlice;
  @Prop() public pathVariables!: pathVariables;
  @Prop() public type!: PathType;

  public relativeHeight: number = 0;

  public darkColorType: string[] = ['start', 'end', 'outer'];

  public handleOnClick(event: any) {
    this.$emit('click', event);
    this.pathVariables.onClick(this.data.index)
  }

  public handleOnMouseEnter(event: any) {
    this.$emit('mouse-enter', event);
  }

  public handleOnMouseLeave(event: any) {
    this.$emit('mouse-leave', event);
  }

  public createPath() {
    const { endAngle, startAngle, percentageValue } = this.data;
    
    const { rx, ry, height, ir } = this.pathVariables;
    this.relativeHeight = height * percentageValue;
    switch (this.type) {
      case 'end':
        return createEndWallPath(endAngle, rx, ry, this.relativeHeight, ir)
      case 'inner':
        return createInnerPath(startAngle, endAngle, rx, ry, this.relativeHeight, ir)
      case 'outer':
        return createOuterPath(startAngle, endAngle, rx, ry, this.relativeHeight)
      case 'start':
        return createStartWallPath(startAngle, rx, ry, this.relativeHeight, ir)
      case 'top':
        return createTopPath(startAngle, endAngle, rx, ry, this.relativeHeight, ir)
      default:
        throw Error('未支持该类型')
    }
  }

  public params: any = {};

  created() {
    const { title, color, darkColor, label, value, percentageValue, moved, middleAngle, endAngle, startAngle } = this.data;
    const { tooltipShowValue, tooltipShowName, rx, ry, height, fixed, moveDistance, tooltipShowPercentage } = this.pathVariables;
    this.params.styles = { fill: color, cursor: 'pointer' }
    if (this.darkColorType.includes(this.type)) {
      Object.assign(this.params.styles, {
        fill: darkColor
      })
    }
    this.relativeHeight = height * percentageValue;
    this.params.label = label || '';
    this.params.title = title || '';
    this.params.tooltipName = tooltipShowName && title !== undefined ? `${title} ` : ''

    this.params.tooltipText = `${this.params.tooltipName}${tooltipShowValue ? `:\n${value}` : ''}` +
    `${tooltipShowPercentage ? `:\n${(percentageValue * 100).toFixed(fixed)}%` : ''}`

    this.params.transformation = moved
      ? `translate(${getNewPosition(middleAngle, rx, ry, moveDistance).join(',')})`
      : 'translate(0,0)'
  }

  render() {
    const { styles, transformation, tooltipText } = this.params;
    const { stroke, strokeWidth, showTooltips } = this.pathVariables;
    return (
      <path
        d={this.createPath()}
        stroke={stroke}
        strokeWidth={strokeWidth}
        style={styles}
        transform={transformation}
        onClick={this.handleOnClick}
        on-mouseenter={this.handleOnMouseEnter}
        on-mouseleave={this.handleOnMouseLeave}
      >
        {showTooltips && <title className="chart-tooltip">{tooltipText}</title>}
      </path>
    )
  }

}


