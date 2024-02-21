import { booking } from '@/constants'
import "./input.css"

const TourSelect = () => {
  return (
    <select className='Input'>
      <option>-Select-</option>
      {booking.map(element => (
        <option key={element.value} value={element.value}>
          {element.label}
        </option>
      ))}
    </select>
  )
}

export default TourSelect

/*
{booking.map(element => (
  <option key={element.value} value={element.value}>
    {element.label}
  </option>
))}
*/