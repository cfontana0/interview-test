import { bookingItem } from './BookingItem.css'
import moment from 'moment-mini'

export const BookingItem = ({
  data: {
    bag_count: bagCount,
    pickup,
    dropoff,
    ccy_symbol: ccySymbol,
    pre_discount_price: preDiscountPrice,
    total_price_amount: totalPriceAmount,
    discount_amount: discountAmount,
    payment_status: paymentStatus,
    stashpoint: {
      address,
      name
    }
  },
  onBook
}) => {
  return (
    <div className={bookingItem}>
      <div>{name}</div>
      <div>{address}</div>
      <div>{bagCount}</div>
      <div>{moment(pickup).format('MMM Do YYYY - HH:mm a')}</div>
      <div>{moment(dropoff).format('MMM Do YYYY - HH:mm a')}</div>
      <div>{ccySymbol}{preDiscountPrice / 100}</div>
      <div>{ccySymbol}{discountAmount / 100}</div>
      <div>{ccySymbol}{totalPriceAmount / 100}</div>
      <div>{paymentStatus}</div>
    </div>
  )
}
