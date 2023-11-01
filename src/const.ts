const scriptProperties = PropertiesService.getScriptProperties()

const spreadSheetFileId = scriptProperties.getProperty('SPREADSHEET_FILE_ID')!
const spreadSheetName = scriptProperties.getProperty('SPREADSHEET_SHEET_NAME')!

export const universeWidth = Number(scriptProperties.getProperty('UNIVERSE_WIDTH')!)
export const universeHeight = Number(scriptProperties.getProperty('UNIVERSE_HEIGHT')!)

export const cellSize = Number(scriptProperties.getProperty('CELL_SIZE')!)
export const gridColor = scriptProperties.getProperty('GRID_COLOR')!
export const aliveColor = scriptProperties.getProperty('ALIVE_COLOR')!
export const deadColor = scriptProperties.getProperty('DEAD_COLOR')!

const file = DriveApp.getFileById(spreadSheetFileId)
export const sheet = SpreadsheetApp.open(file).getSheetByName(spreadSheetName)!
