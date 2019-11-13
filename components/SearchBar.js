import { hr, item } from '../style/style.css'

import { BagSelector } from './BagSelector'
import { DateSelector } from './DateSelector'
import { filtersWrapper } from './SearchBar.css'
import { useState } from 'react'

const bagOptions = Array.apply(null, Array(20)).map((x, i) => i)



export const SearchBar = ({ bags, onSelectBags, dropOff, onChangeDropOff, pickUp, onChangePickUp, onSearch }) => {
  const [searchVal, setSearchVal] = useState('london')

  return (
    <>
      <input
        className={item}
        type="search"
        onChange={({ target: { value } }) => setSearchVal(value)} value={searchVal}
      />
      <button className={item} onClick={() => onSearch(searchVal)}>Search</button>

      <hr className={hr} />

      <div className={filtersWrapper}>
        <BagSelector className={item} value={bags} options={bagOptions} onSelect={onSelectBags}/>

        <DateSelector className={item} label="Drop off" value={dropOff} onChange={onChangeDropOff} />
        <DateSelector className={item} label="Pick up" value={pickUp} onChange={onChangePickUp} />
      </div>
    </>
  )
}
