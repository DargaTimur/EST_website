import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import '../../../../globals.css';

const Hotels = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information')
  return (
    <div className='visibility_area'>
      <div className='visa_margin_top' style={{display: "flex", justifyContent: "space-between", marginBottom: "5%"}}>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://www.shangri-la.com/en/ulaanbaatar/shangrila/' target="_blank">
            <img
              src='/shangri.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://www.shangri-la.com/en/ulaanbaatar/shangrila/' target="_blank">Shangri-La Hotel</a>
        </div>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://hotelbluesky.mn/' target="_blank">
            <img
              src='/blue-sky.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://hotelbluesky.mn/' target="_blank" > Blue Sky Hotel</a>
        </div>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://www.ramadaub.mn/' target="_blank">
            <img
              src='/ramada.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://www.ramadaub.mn/' target="_blank">Ramada Hotel</a>
        </div>
      </div>
      <div className='visa_margin_top' style={{display: "flex", justifyContent: "space-between", marginBottom: "5%"}}>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://www.edelweiss.mn/#section-0' target="_blank">
            <img
              src='/edel.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://www.edelweiss.mn/#section-0' target="_blank">Edelweiss</a>
        </div>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://www.kempinski.com/en' target="_blank">
            <img
              src='/kemp.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://www.kempinski.com/en' target="_blank" >Kempinsky Hotel</a>
        </div>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://mika.mn/' target="_blank">
            <img
              src='/mika.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://mika.mn/' target="_blank">Mika Hotel</a>
        </div>
      </div>
      <div className='visa_margin_top' style={{display: "flex", justifyContent: "space-between", marginBottom: "5%"}}>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://ubcontinentalhotel.com/' target="_blank">
            <img
              src='/cont.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://ubcontinentalhotel.com/' target="_blank">Continental Hotel</a>
        </div>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://www.booking.com/hotel/mn/khongor-guest-house-amp-tours.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887706&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank">
            <img
              src='/khon.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://www.booking.com/hotel/mn/khongor-guest-house-amp-tours.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887706&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank" > Khongor Guesthouse</a>
        </div>
        <div className='hotel_image' style={{width: "31%"}}>
          <a href='https://www.booking.com/hotel/mn/zaya-ulaanbaatar-mongolia.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=6&hpos=6&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887686&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank">
            <img
              src='/zaya.jpg'
              alt='hotel'
            />
          </a>
          <a className='hotels_container_text' style={{position: 'absolute', bottom: "47%", left: "22%", alignItems: 'center', textAlign: "center", padding: "2%", color: "#ffde4d", background: "rgba(0, 0, 0, 0.7)"}} href='https://www.booking.com/hotel/mn/zaya-ulaanbaatar-mongolia.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=6&hpos=6&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887686&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank">Zaya Hostel</a>
        </div>
      </div>
    </div>
  )
}

export default Hotels