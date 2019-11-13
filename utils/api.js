const API_URL = 'https://api-staging.stasher.com/v2'


const generateFetchOptions = (data, token) => {
  const headers = { 'content-type': 'application/json' }

  if (token) {
    headers.Authorization = `Token ${token}`
  }

  return {
    headers,
    method: 'POST',
    body: JSON.stringify(data)
  }
}


export const getStashpoint = async (id) => {
  const res = await fetch(`${API_URL}/stashpoints/${id}`)

  return res.json()
}


export const getStashpoints = async ({ lat, lng, bags, dropOff, pickUp }) => {
  const params = new URLSearchParams({
    active: true,
    radius: 20,
    sort: 'distance',
    lat,
    lng,
    capacity: bags,
    dropoff: dropOff,
    pickup: pickUp
  })

  const res = await fetch(`${API_URL}/stashpoints?${params.toString()}`)

  return res.json()
}

export const getQuote = async ({ stashpointId, bags, dropOff, pickUp, coupon }) => {
  const qQuery = {
    stashpoint_id: stashpointId,
    bag_count: bags,
    dropoff: dropOff.format('YYYY-MM-DDTHH:mm'),
    pickup: pickUp.format('YYYY-MM-DDTHH:mm'),
    coupon_code: coupon
  }

  const res = await fetch(`${API_URL}/quotes`, generateFetchOptions(qQuery))

  const quote = await res.json()

  const {
    coupon_code: appliedCoupon,
    post_discount_price: price,
    ccy_symbol: ccySymbol,
    total_price_amount: totalPrice,
    ccy_minor_in_major: ccyMinorInMajor,
    pre_discount_price: preDiscountPrice,
    first_day_price: firstDayPrice,
    extra_day_price: extraDayPrice,
    ccy_code: ccyCode,
    discount_amount: discount,
    extra_days: extraDays
  } = quote

  return {
    appliedCoupon,
    price,
    ccySymbol,
    totalPrice,
    ccyMinorInMajor,
    preDiscountPrice,
    firstDayPrice,
    extraDayPrice,
    ccyCode,
    discount,
    extraDays
  }
}

export const createUser = async ({
  first,
  last,
  phone,
  email,
  password
}) => {
  const data = {
    first_name: first,
    last_name: last,
    phone_number: phone,
    email,
    password
  }

  const res = await fetch(`${API_URL}/users`, generateFetchOptions(data))

  return res.json()
}


export const loginUser = async ({ email, password }, opts) => {
  const res = await fetch(`${API_URL}/tokens`, generateFetchOptions({ role: 'customer', username: email, password }))

  return res.json()
}


export const makeBooking = async ({ bags, dropOff, pickUp, stashpointId }, token) => {
  // accepted date format is 'YYYY-MM-DDTHH:mm'

  const data = {
    bag_count: bags,
    dropoff: dropOff,
    pickup: pickUp,
    stashpoint_id: stashpointId,
    coupon_code: 'giftcard'
  }

  const res = await fetch(`${API_URL}/bookings`, generateFetchOptions(data, token))

  return res.json()
}

export const getBooking = async (token) => {
  const res = await fetch(`${API_URL}/bookings`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })

  return res.json()
}


export const finalizePay = async (data, token) => {
  const res = await fetch(`${API_URL}/payments/finalize`, generateFetchOptions(data, token))

  return res.json()
}
