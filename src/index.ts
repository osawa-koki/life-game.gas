import { aliveColor, cellSize, deadColor, waitTime } from './const'
import createSheet from './createSheet'
import drawCells from './drawCells'
import { setCanvasSize } from './setCanvasSize'
import Universe from './universe'

function lifeGame (): void {
  const universe = new Universe()
  const width = universe.width
  const height = universe.height

  const sheet = createSheet()

  setCanvasSize({
    sheet,
    width,
    height,
    cellSize
  })

  while (true) {
    universe.tick()
    drawCells({
      sheet,
      universe,
      aliveColor,
      deadColor
    })
    SpreadsheetApp.flush()
    Utilities.sleep(waitTime)
  }
}

declare let global: any
global.handler = lifeGame
