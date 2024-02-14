import React from 'react'
import { countries } from '@/constants'
import "./input.css"

const Select = () => {
  return (
    <select className='Input'>
      <option>-Select-</option>
      {countries.map(country => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}


    </select>
  )
}

export default Select

