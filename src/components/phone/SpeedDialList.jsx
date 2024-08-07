import { useContext } from 'react'
import PhoneContext from './PhoneContext'

import SpeedDialItem from './SpeedDialItem'

export default function SpeedDialList() {
  const { speedDial } = useContext(PhoneContext)
  const newSpeedDial = new Array().concat(speedDial)

  // Descending Sort Order
  newSpeedDial.sort((a, b) => a.sdCode - b.sdCode)

  return (
    <ul className="list">
      {newSpeedDial.map((item) => (
        <SpeedDialItem item={item} key={item.sdCode} />
      ))}
    </ul>
  )
}
