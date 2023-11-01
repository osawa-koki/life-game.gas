import { cellSize, sheet } from "./const"
import { setCanvasSize } from "./setCanvasSize"
import Universe from "./universe"

function lifeGame () {
  const universe = new Universe()
  const width = universe.width
  const height = universe.height

  setCanvasSize({
    sheet,
    width,
    height,
    cellSize
  })
}

declare let global: any
global.handler = lifeGame
