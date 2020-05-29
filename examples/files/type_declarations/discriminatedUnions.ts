type Shape =
  | {
      type: 'rectangle'
      x: number
      y: number
      width: number
      height: number
    }
  | {
      type: 'circle'
      x: number
      y: number
      radius: number
    }

let myShape: Shape = {
  type: 'circle',
  x: 10,
  y: 10,
  radius: 20,
}

function description(shape: Shape): string {
  const origin = `(${shape.x}, ${shape.y})`

  switch (shape.type) {
    case 'circle':
      return `circle of radius ${shape.radius} at ${origin}`
    case 'rectangle':
      return `rectangle of size ${shape.width}x${shape.height} at ${origin}`
  }
}

console.log(description(myShape))

export {}
