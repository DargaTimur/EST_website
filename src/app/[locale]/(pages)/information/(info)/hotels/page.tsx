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
    </div>
  )
}

export default Hotels