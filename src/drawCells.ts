import getIndex from './getIndex'
import type Universe from './universe'

interface Props {
  sheet: GoogleAppsScript.Spreadsheet.Sheet
  universe: Universe
  aliveColor: string
  deadColor: string
}

export default function drawCells (props: Props): void {
  const { sheet, universe, aliveColor, deadColor } = props

  const width = universe.width
  const height = universe.height

  const cells = universe.cells

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = getIndex({
        width,
        row,
        col
      })

      const color = cells[idx]
        ? aliveColor
        : deadColor

      sheet.getRange(row + 1, col + 1).setBackground(color)
    }
  }
}
