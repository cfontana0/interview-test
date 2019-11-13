import { stashpoint } from './Stashpoint.css'

export const Stashpoint = ({
  data: { name, location_name: locationName, address, rating },
  onBook
}) => {
  return (
    <div className={stashpoint}>
      <h5>
        <a href="#">{locationName} - {name}</a>
      </h5>

      <p>{address}</p>

      <button name="book" onClick={onBook}>Book</button>
    </div>
  )
}
