import classnames from 'classnames'
import { filterButton } from './SearchBar.css'
import { label as labelStyle } from '../style/style.css'
import { selector } from './BagSelector.css'

export const BagSelector = ({ className, label, value, options, onSelect }) => {
  return (
    <div className={classnames(filterButton, className)}>
      <label className={labelStyle}>Bags</label>

      <br />

      <select className={selector} name={label}>
        {options && options.map((i) => <option key={i} value={i} onClick={() => onSelect(i + 1)}>{i + 1}</option>)}
      </select>
    </div>
  )
}
