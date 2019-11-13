import '../style/global.css'

import { floatRight, page, title } from '../style/style.css'
import { useEffect, useState } from 'react'

import { BookingItem } from '../components/BookingItem'
import Link from 'next/link'
import { bookingItem } from '../components/BookingItem.css'
import cookie from 'js-cookie'
import { getBooking } from '../utils/api'

const Schedule = ({ query }) => {
  const [bookings, setBookings] = useState([])
  const token = cookie.get('st_token')

  const getBookings = async () => {
    const resBookings = await getBooking(token)
    setBookings(resBookings)
  }

  useEffect(() => { getBookings() }, [])

  return (
    <div className={page}>
      <h3 className={title}>My Schedule</h3>
      <div>
        <p className={floatRight}><Link href="/"><a>Add new booking</a></Link></p>
        <ul>
          <div className={bookingItem}>
            <div><b>Place</b></div>
            <div><b>Address</b></div>
            <div><b>No of bags</b></div>
            <div><b>Drop off</b></div>
            <div><b>Pick up</b></div>
            <div><b>Payment</b></div>
            <div><b>Discount</b></div>
            <div><b>Total</b></div>
            <div><b>Status</b></div>
          </div>
          {bookings.map(b => <BookingItem key={b.id} data={b} />)}
        </ul>
      </div>

    </div>
  )
}

export default Schedule
