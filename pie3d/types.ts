export type Config = {
  angle?: number
  height?: number
  ir?: number
  fixed?: number
  moveDistance?: number
  onClick?: (index: number) => void
  showTooltips?: boolean
  size?: number
  showLabels?: boolean
  showLabelPercentage?: boolean
  stroke?: string
  strokeWidth?: number
  textSize?: number
  tooltipShowName?: boolean
  tooltipShowPercentage?: boolean
  tooltipShowValue?: boolean
}

export type PieConfig = {
  angle: number
  height: number
  ir: number
  fixed: number
  moveDistance: number
  onClick: (index: number) => void
  showTooltips: boolean
  size: number
  showLabels: boolean
  showLabelPercentage: boolean
  stroke: string
  strokeWidth: number
  textSize: number
  tooltipShowName: boolean
  tooltipShowPercentage: boolean
  tooltipShowValue: boolean
}

export type Data = number[] | UserData[]

export type UserData = {
  color?: string
  label?: string
  title?:string
  value: number
  opacity?: number
}

export type PieSlice = {
  title?:string
  color: string
  darkColor: string
  endAngle: number
  index: number
  label?: string|Function
  moved: boolean
  percentageValue: number
  startAngle: number
  value: number
  middleAngle: number
}

export type PieSlices = PieSlice[]

export type PathType = 'end' | 'inner' | 'outer' | 'start' | 'top'
