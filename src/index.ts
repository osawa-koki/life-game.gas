import Universe from "./universe"

function lifeGame () {
  const universe = new Universe()
  const width = universe.width
  const height = universe.height

  console.log('width', width)
  console.log('height', height)
}

declare let global: any
global.handler = lifeGame
