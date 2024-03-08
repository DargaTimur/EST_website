import React from 'react'

const Accomodation = () => {
  return (
    <div style={{position: 'relative', marginBottom: "3%"}}>
      <h2 className='tour_items_header trocchi-regular'>ACCOMMODATION</h2>
      <img
        src='/tmcity.jpg'
        alt="City"
        width='100%'
        height='auto'
        style={{position: "relative"}}
      />
      <a className='hotels_container' href='/information/hotels'>HOTELS</a>
    </div>
  )
}

export default Accomodation