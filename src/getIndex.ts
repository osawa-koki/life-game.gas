interface Props {
  width: number
  row: number
  col: number
}

export default function getIndex (props: Props): number {
  const { width, row, col } = props
  return row * width + col
}
