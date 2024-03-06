import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Khuvsgul1 = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Tours');
  return (
    <div style={{marginTop: "8%"}}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "2%", backgroundColor: "#ffde4d"}}>
            <img
              src='/1.jpg'
              alt='Route'
            />
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/kt0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className='tours_image_container tours_page_main_header'>KHUVSGUL LAKE TOUR - 7 days 6 nights</p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 1. Elsen Tasarkhai</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar, with our guides' help, unveils its treasures: museums, cashmere shops, and more. Navigate this vibrant city, enjoying world-class museums, traditional theaters, and diverse cuisines. Explore the lively cityscape, making your Mongolian adventure truly unforgettable.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>Please be advised</p>
                <p className='tour_left_column_text_sec'> Traffic congestion is frequent in Ulaanbaatar, and delays are possible. Smooth city roads contribute to a comfortable journey. </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.li1td1')}</li>
                  <li>{t('City.li2td1')}</li>
                  <li>{t('City.li3td1')}</li>
                  <li>{t('City.li4td1')}</li>
                  <li>{t('City.li5td1')}</li>
                  <li>{t('City.li6td1')}</li>
                  <li>{t('City.li7td1')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>Wifi
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" className='tour_right_column_icons'/>Charging
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" className='tour_right_column_icons'/>Shower
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" className='tour_right_column_icons'/>Light
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/kt1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 2. Tsenher Hot Spring</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar, with our guides' help, unveils its treasures: museums, cashmere shops, and more. Navigate this vibrant city, enjoying world-class museums, traditional theaters, and diverse cuisines. Explore the lively cityscape, making your Mongolian adventure truly unforgettable.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>Please be advised</p>
                <p className='tour_left_column_text_sec'> Traffic congestion is frequent in Ulaanbaatar, and delays are possible. Smooth city roads contribute to a comfortable journey. </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.li1td1')}</li>
                  <li>{t('City.li2td1')}</li>
                  <li>{t('City.li3td1')}</li>
                  <li>{t('City.li4td1')}</li>
                  <li>{t('City.li5td1')}</li>
                  <li>{t('City.li6td1')}</li>
                  <li>{t('City.li7td1')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>Wifi
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" className='tour_right_column_icons'/>Charging
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" className='tour_right_column_icons'/>Shower
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" className='tour_right_column_icons'/>Light
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/kt2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 3. Tsenher Lake</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar, with our guides' help, unveils its treasures: museums, cashmere shops, and more. Navigate this vibrant city, enjoying world-class museums, traditional theaters, and diverse cuisines. Explore the lively cityscape, making your Mongolian adventure truly unforgettable.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>Please be advised</p>
                <p className='tour_left_column_text_sec'> Traffic congestion is frequent in Ulaanbaatar, and delays are possible. Smooth city roads contribute to a comfortable journey. </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.li1td1')}</li>
                  <li>{t('City.li2td1')}</li>
                  <li>{t('City.li3td1')}</li>
                  <li>{t('City.li4td1')}</li>
                  <li>{t('City.li5td1')}</li>
                  <li>{t('City.li6td1')}</li>
                  <li>{t('City.li7td1')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>Wifi
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" className='tour_right_column_icons'/>Charging
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" className='tour_right_column_icons'/>Shower
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" className='tour_right_column_icons'/>Light
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/kt3.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 4. Ider Sum</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar, with our guides' help, unveils its treasures: museums, cashmere shops, and more. Navigate this vibrant city, enjoying world-class museums, traditional theaters, and diverse cuisines. Explore the lively cityscape, making your Mongolian adventure truly unforgettable.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>Please be advised</p>
                <p className='tour_left_column_text_sec'> Traffic congestion is frequent in Ulaanbaatar, and delays are possible. Smooth city roads contribute to a comfortable journey. </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.li1td1')}</li>
                  <li>{t('City.li2td1')}</li>
                  <li>{t('City.li3td1')}</li>
                  <li>{t('City.li4td1')}</li>
                  <li>{t('City.li5td1')}</li>
                  <li>{t('City.li6td1')}</li>
                  <li>{t('City.li7td1')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>Wifi
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" className='tour_right_column_icons'/>Charging
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" className='tour_right_column_icons'/>Shower
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" className='tour_right_column_icons'/>Light
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/kt4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 5. Khuvsgul Lake</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar, with our guides' help, unveils its treasures: museums, cashmere shops, and more. Navigate this vibrant city, enjoying world-class museums, traditional theaters, and diverse cuisines. Explore the lively cityscape, making your Mongolian adventure truly unforgettable.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>Please be advised</p>
                <p className='tour_left_column_text_sec'> Traffic congestion is frequent in Ulaanbaatar, and delays are possible. Smooth city roads contribute to a comfortable journey. </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.li1td1')}</li>
                  <li>{t('City.li2td1')}</li>
                  <li>{t('City.li3td1')}</li>
                  <li>{t('City.li4td1')}</li>
                  <li>{t('City.li5td1')}</li>
                  <li>{t('City.li6td1')}</li>
                  <li>{t('City.li7td1')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>Wifi
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" className='tour_right_column_icons'/>Charging
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" className='tour_right_column_icons'/>Shower
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" className='tour_right_column_icons'/>Light
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/kt5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 6. Bulgan Aimag</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar, with our guides' help, unveils its treasures: museums, cashmere shops, and more. Navigate this vibrant city, enjoying world-class museums, traditional theaters, and diverse cuisines. Explore the lively cityscape, making your Mongolian adventure truly unforgettable.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>Please be advised</p>
                <p className='tour_left_column_text_sec'> Traffic congestion is frequent in Ulaanbaatar, and delays are possible. Smooth city roads contribute to a comfortable journey. </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.li1td1')}</li>
                  <li>{t('City.li2td1')}</li>
                  <li>{t('City.li3td1')}</li>
                  <li>{t('City.li4td1')}</li>
                  <li>{t('City.li5td1')}</li>
                  <li>{t('City.li6td1')}</li>
                  <li>{t('City.li7td1')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>Wifi
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" className='tour_right_column_icons'/>Charging
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" className='tour_right_column_icons'/>Shower
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" className='tour_right_column_icons'/>Light
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/kt6.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 7. Back to Ulaanbaatar</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar, with our guides' help, unveils its treasures: museums, cashmere shops, and more. Navigate this vibrant city, enjoying world-class museums, traditional theaters, and diverse cuisines. Explore the lively cityscape, making your Mongolian adventure truly unforgettable.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>Please be advised</p>
                <p className='tour_left_column_text_sec'> Traffic congestion is frequent in Ulaanbaatar, and delays are possible. Smooth city roads contribute to a comfortable journey. </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.li1td1')}</li>
                  <li>{t('City.li2td1')}</li>
                  <li>{t('City.li3td1')}</li>
                  <li>{t('City.li4td1')}</li>
                  <li>{t('City.li5td1')}</li>
                  <li>{t('City.li6td1')}</li>
                  <li>{t('City.li7td1')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>Wifi
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" className='tour_right_column_icons'/>Charging
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" className='tour_right_column_icons'/>Shower
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" className='tour_right_column_icons'/>Light
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Khuvsgul1