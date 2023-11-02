/* eslint-disable @typescript-eslint/no-non-null-assertion */

const scriptProperties = PropertiesService.getScriptProperties()

export const universeWidth = Number(scriptProperties.getProperty('UNIVERSE_WIDTH')!)
export const universeHeight = Number(scriptProperties.getProperty('UNIVERSE_HEIGHT')!)

export const cellSize = Number(scriptProperties.getProperty('CELL_SIZE')!)
export const aliveColor = scriptProperties.getProperty('ALIVE_COLOR')!
export const deadColor = scriptProperties.getProperty('DEAD_COLOR')!

export const waitTime = Number(scriptProperties.getProperty('WAIT_TIME')!)

/* eslint-enable @typescript-eslint/no-non-null-assertion */
