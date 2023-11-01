interface Props {
  sheet: GoogleAppsScript.Spreadsheet.Sheet
  width: number
  height: number
  cellSize: number
}

export function setCanvasSize (props: Props): void {
  const { sheet, width, height, cellSize } = props

  if (sheet == null) throw new Error('sheet is null.')

  // 行数の取得。
  const lastRow = sheet.getLastRow()
  // 不足している行数を計算。
  const diffRow = height - lastRow
  // 不足している行数がある場合は行を追加。
  if (diffRow > 0) sheet.insertRows(lastRow + 1, diffRow)

  // 列数の取得。
  const lastColumn = sheet.getLastColumn()
  // 不足している列数を計算。
  const diffColumn = width - lastColumn
  // 不足している列数がある場合は列を追加。
  if (diffColumn > 0) sheet.insertColumns(lastColumn + 1, diffColumn)

  // サイズを設定。
  for (let i = 0; i < width; i++) sheet.setColumnWidth(i + 1, cellSize)
  for (let i = 0; i < height; i++) sheet.setRowHeight(i + 1, cellSize)
}
