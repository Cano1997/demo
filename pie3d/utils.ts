import { Util } from 'ibiz-core'
import { defaultColors, pi } from './const'
import { PieSlices, UserData } from './types'

export const createEndWallPath = (endAngle: number, rx: number, ry: number, height: number, ir: number): string => {
  const ex = rx * Math.cos(endAngle)
  const ey = ry * Math.sin(endAngle)
  console.log('createEndWallPath');
  

  return `M ${ir * ex} ${ir * ey} L ${ir * ex} ${ir * ey - height} L ${ex} ${ey - height} L ${ex} ${ey} z`
}

export const createInnerPath =
  (startAngle: number, endAngle: number, rx: number, ry: number, height: number, ir: number): string => {
    const innerStartAngle = (startAngle < pi ? pi : startAngle)
    const innerEndAngle = (endAngle < pi ? pi : endAngle)
    const sx = ir * rx * Math.cos(innerStartAngle)
    const sy = ir * ry * Math.sin(innerStartAngle)
    const ex = ir * rx * Math.cos(innerEndAngle)
    const ey = ir * ry * Math.sin(innerEndAngle)

    return `M ${sx} ${sy} A ${ir * rx} ${ir * ry} 0 0 1 ${ex} ${ey} L ${ex} ${ey - height} A ${ir * rx} ${ir * ry} ` +
    `0 0 0 ${sx} ${sy - height} z`
  }

const isMiddleAngleRight = (angle: number): boolean => {
  if (angle < pi / 2) {
    return true
  }
  if (angle >= pi / 2 && angle <= 3 * pi / 2) {
    return false
  }

  return true
}

export const getTextWidth = (text: string, size: number): number => {
  if (!text) {
    return 0;
  }
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (context !== null) {
    const font = window.getComputedStyle(document.body).font.split('px')[1]
    context.font = `${size}px${font}`

    return context.measureText(text).width
  }

  return 0
}

export const createLabelPath = (
  middleAngle: number, rx: number, ry: number, height: number, textLength: number, size: number):
{ path: string, x: number, y: number } => {
  const sx = rx * Math.cos(middleAngle)
  const sy = ry * Math.sin(middleAngle)
  const isLabelRight = isMiddleAngleRight(middleAngle)

  let distance = 20

  if (middleAngle >= pi) {
    distance = 20
  }

  return {
    path: `M ${sx} ${sy - height / 2} L ${sx + (isLabelRight ? distance : -distance)}` +
    ` ${sy + (middleAngle < pi ? distance - height / 2 : -distance)} l ${isLabelRight ? distance : -distance} 0`,
    x: sx + (isLabelRight ? distance : -distance) + (isLabelRight ? distance : -distance) +
      (isLabelRight ? 1 : -textLength - 1),
    y: sy + (middleAngle < pi ? distance - height / 2 : -distance) + size / 3.3
  }
}

export const createOuterPath =
(startAngle: number, endAngle: number, rx: number, ry: number, height: number): string => {
  const outerStartAngle = (startAngle > pi ? pi : startAngle)
  const outerEndAngle = (endAngle > pi ? pi : endAngle)
  const sx = rx * Math.cos(outerStartAngle)
  const sy = ry * Math.sin(outerStartAngle)
  const ex = rx * Math.cos(outerEndAngle)
  const ey = ry * Math.sin(outerEndAngle)

  return `M ${sx} ${sy - height} A ${rx} ${ry} 0 0 1 ${ex} ${ey - height} L ${ex} ${ey} A ${rx} ${ry} 0 0 0 ${sx} ${sy} z`
}

export const createStartWallPath =
(startAngle: number, rx: number, ry: number, height: number, ir: number): string => {
  const sx = rx * Math.cos(startAngle)
  const sy = ry * Math.sin(startAngle)

  return `M ${ir * sx} ${ir * sy} L ${ir * sx} ${ir * sy - height} L ${sx} ${sy - height} L ${sx} ${sy} z`
}

export const createTopPath = (startAngle: number, endAngle: number, rx: number, ry: number, height: number, ir: number): string => {
  if (endAngle - startAngle === 0) {
    return 'M 0 0'
  }

  const sx = rx * Math.cos(startAngle)
  let sy = ry * Math.sin(startAngle)
  const ex = rx * Math.cos(endAngle)
  let ey = ry * Math.sin(endAngle)

  return `M ${sx} ${sy - height} A ${rx} ${ry} 0 ${endAngle - startAngle > pi ? 1 : 0} 1 ${ex} ` +
    `${ey - height} L ${ir * ex} ${ir * ey - height} A ${ir * rx} ${ir * ry} 0 ${endAngle - startAngle > pi ? 1 : 0}` +
    `0 ${ir * sx} ${ir * sy - height} z`
}

export const getMiddleAngle = (startAngle: number, endAngle: number): number =>
  startAngle + (endAngle - startAngle) / 2

export const getNewPosition = (middleAngle: number, rx: number, ry: number, moveDistance: number):
[number, number] => {
  return [
    moveDistance * rx * Math.cos(middleAngle > Math.PI ? middleAngle : -middleAngle),
    moveDistance * ry * Math.sin(middleAngle)
  ]
}

export const checkIsDataArrayOfNumbers = (data: unknown[]): boolean => {
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== 'number') {
      return false
    }
  }

  return true
}

export const checkIsUserData = (data: any): boolean => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].value === undefined) {
      return false
    }
  }

  return true
}

export const mapRowData = (data: number[]): UserData[] => data.map((item) => ({ value: item }))

export const mapData = (data: UserData[]): PieSlices => {
  const sum = data.reduce((accumulator: number, item: number | UserData) =>
    typeof item === 'number' ? accumulator + item : accumulator + item.value, 0)
  
  return data.reduce((accumulator: PieSlices, item: UserData, index: number) => {
    const angle = item.value / sum * 2 * pi
    const previousValue = accumulator[index - 1]
    const startAngle = previousValue !== undefined ? previousValue.endAngle : 0
    const endAngle = previousValue !== undefined ? previousValue.endAngle + angle : angle
    const middleAngle = getMiddleAngle(startAngle, endAngle)
    const color = item.color || defaultColors[index % defaultColors.length];
    const tempColor = getRgbColor(color, item.opacity);
    
    return [
      ...accumulator,
      {
        color: tempColor,
        darkColor: getRgbDarkColor(tempColor),
        endAngle,
        index,
        label: item.label,
        title: item.title,
        middleAngle,
        uuid: `pie-item-${Util.createUUID()}`,
        moved: false,
        percentageValue: item.value / sum,
        startAngle,
        value: item.value
      }
    ]
  }, []).sort((a,b) => a.value - b.value);
}

export const createElementPieces = (data: PieSlices): [PieSlices, PieSlices, PieSlices, PieSlices, PieSlices] => {
  const p1Elements = []
  const p2Elements = []
  const p3Elements = []
  const p4Elements = []
  const exceptionElements = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].endAngle < pi / 2) {
      p1Elements.push(data[i])
    } else if (data[i].endAngle >= pi / 2 && data[i].endAngle <= pi) {
      p2Elements.push(data[i])
    } else if (data[i].endAngle > pi && data[i].endAngle <= 3 / 2 * pi) {
      p3Elements.push(data[i])
    } else if (data[i].startAngle > 3 / 2 * pi) {
      p4Elements.push(data[i])
    } else if (data[i].endAngle > 3 / 2 * pi && data[i].startAngle <= 3 * pi / 2) {
      exceptionElements.push(data[i])
    }
  }

  return [p1Elements, p2Elements, p3Elements, p4Elements, exceptionElements]
}

export const getRgbColor = (color: string, opacity: number = 1): string => {
  if (color.includes('rgba(')) {
    return color;
  } else if (color.includes('rgb(')) {
    return color.replace('rgb', 'rgba').replace(')', `,${opacity})`)
  }
  const hex = color.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const getRgbDarkColor = (color: string, factor: number = 0.9): string => {
  return color.replace(/rgba\((.+?),(.+?),(.+?),(.+?)\)/, (x, r, g, b, opacity) => {
    return `rgba(${Math.round(r * factor)}, ${Math.round(g * factor)}, ${Math.round(b * factor)}, ${opacity - 0.1})`
  })
}
