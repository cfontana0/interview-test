import '../style/global.css'

import { box, page, title } from '../style/style.css'

import Router from 'next/router'
import { SearchBar } from '../components/SearchBar'
import { Stashpoint } from '../components/Stashpoint'
import { getCoordsFromLocation } from '../utils/google'
import { getStashpoints } from '../utils/api'
import moment from 'moment-mini'
import { useState } from 'react'

const Home = () => {
  const [results, setResults] = useState([])
  const [bags, setBags] = useState(1)
  const [dropOff, setDropOff] = useState(moment().startOf('hour').add(1, 'hours'))
  const [pickUp, setPickUp] = useState(moment().startOf('hour').add(2, 'hours'))

  const updateResults = async (searchVal) => {
    const resGeo = await getCoordsFromLocation(searchVal)

    const coords = resGeo.results[0].geometry.location
    const resStash = await getStashpoints({
      ...coords,
      bags,
      dropOff: dropOff.format('YYYY-MM-DDTHH:mm'),
      pickUp: pickUp.format('YYYY-MM-DDTHH:mm')
    })

    setResults(resStash)
  }

  const onBook = (stashpointId) => {
    const { name, address, rating } = results.filter(r => r.id === stashpointId)[0]

    Router.push({
      pathname: '/checkout',
      query: {
        stashpointId,
        name,
        address,
        rating,
        dropOff: dropOff.format('YYYY-MM-DDTHH:mm'),
        pickUp: pickUp.format('YYYY-MM-DDTHH:mm'),
        bags
      }
    })
  }

  return (
    <div className={page}>
      <h3 className={title}>Stasher!</h3>

      <header className={box}>
        <SearchBar
          bags={bags}
          onSelectBags={setBags}
          dropOff={dropOff}
          onChangeDropOff={setDropOff}
          pickUp={pickUp}
          onChangePickUp={setPickUp}
          onSearch={updateResults}
        />
      </header>

      <div>
        <ul>
          {results.map(r => <Stashpoint key={r.id} data={r} onBook={() => onBook(r.id) } />)}
        </ul>
      </div>
    </div>
  )
}

export default Home
