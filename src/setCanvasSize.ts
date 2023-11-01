interface Props {
  sheet: GoogleAppsScript.Spreadsheet.Sheet
  width: number
  height: number
  cellSize: number
}

export function setCanvasSize (props: Props): void {
  const { sheet, width, height, cellSize } = props

  if (sheet == null) throw new Error('sheet is null.')

  sheet.clear()
  SpreadsheetApp.flush()

  sheet.insertRowsAfter(1, height)
  sheet.insertColumnsAfter(1, width)

  for (let i = 0; i < width; i++) sheet.setColumnWidth(i + 1, cellSize)
  for (let i = 0; i < height; i++) sheet.setRowHeight(i + 1, cellSize)
}
