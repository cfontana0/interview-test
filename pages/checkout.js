import moment from 'moment-mini'
import { useState, useEffect } from 'react'
import cookie from 'js-cookie'
import Link from 'next/link'
import { getQuote, makeBooking } from '../utils/api'

import '../style/global.css'
import { title, page, box } from '../style/style.css'


const Checkout = ({ query }) => {
  const [quote, setQuote] = useState([])
  const [bookingCompleted, setBookingCompleted] = useState(false)
  const token = cookie.get('st_token')

  const { stashpointId, name, bags, address, dropOff, pickUp, rating } = query

  const updateQuote = async () => {
    const resQuote = await getQuote({ stashpointId, bags, dropOff: moment(dropOff), pickUp: moment(pickUp) })
    setQuote(resQuote)
  }

  const onBook = async () => {
    await makeBooking({ bags, dropOff: moment(dropOff), pickUp: moment(pickUp), stashpointId }, token)
    setBookingCompleted(true)
  }

  useEffect(() => { updateQuote() }, [])

  return (
    <div className={page}>
      <h3 className={title}>Checkout</h3>
      <header className={box}>
        <h2>{name}</h2>
        <h3>{address}</h3>
        <p>RATING: <b>{rating}/5</b></p>
        <br/>
        <p>NUMBER OF BAGS: <b>{bags}</b></p>
        <p>DROP-OFF: <b>{moment(dropOff).format('MMM Do YYYY - HH:mm a')}</b></p>
        <p>PICK-UP: <b>{moment(pickUp).format('MMM Do YYYY - HH:mm a')}</b></p>
        <br/>
        { quote && quote.firstDayPrice &&
          <div>
            <p>TOTAL DAY: <b>{ 1 + quote.extraDays }</b></p>
            <p>
              <b>{quote.ccySymbol}{ quote.firstDayPrice / 100 }</b> on first <b>24h</b>
              <b> - {quote.ccySymbol}{ quote.extraDays ? (quote.extraDayPrice / quote.extraDays / 100) : 0 }</b> on extra <b>24h</b>
            </p>
            <p>TOTAL: <b>{quote.ccySymbol}{ quote.totalPrice / 100 }</b></p>
          </div>
        }
        <br/>
        { !token && <p>To continue with your booking you must <Link href="/login"><a>Log in now</a></Link></p> }
        { !bookingCompleted && token && <button onClick={() => onBook()}>Book now</button> }
        { bookingCompleted && <p>Congratulations, you just completed your booking</p>}
        { bookingCompleted && <p><Link href="/schedule"><a>View all my scheduled drop-off</a></Link></p>}
      </header>
    </div>
  )
}

Checkout.getInitialProps = ({ query }) => {
  return { query }
}

export default Checkout
