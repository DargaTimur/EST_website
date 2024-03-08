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
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/mapkhuvsgul.png'
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
                <p className='tour_left_column_text'>Elsentasarkhai is a part of the Mongol Els sand dunes, which stretch from the Tuv, Uvurkhangai, and Bulgan provinces all the way to the west to become part of the Khugnu Khan mountain range. The sand dunes are 80 km long in total.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>★Caution★</p>
                <p className='tour_left_column_text_sec'>The road from Chagang Lake to Khovsgol Lake is mostly unpaved off-road. Bringing a personal neck pillow will help you move more comfortably</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>07:00 am  breakfast</li>
                  <li>08:30 am drive to elsentasarhai</li>
                  <li>12:00 am lunch time </li>
                  <li>12:00 am lunch time </li>
                  <li>18:00 Dinner</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>3g/4g
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
                <p className='tour_left_column_text'>This spring lies south of Tsetserleg town in Arkhangai province and pressure comes out from far deep part of the ground and its water is not mixed with soil waters because it is hot. Also, the spring is kept in high pressure under the ground and the flow rate is high as 10 liters per second.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:00 am breakfast</li>
                  <li>09:00 am drive to hot spring</li>
                  <li>12:00 am lunch time </li>
                  <li>18:00 pm dinner</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>3g/4g
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
                <p className='tour_left_column_header'>Day 3. Terkh White Lake</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Terkh White lake is located 675 km from Ulaanbaatar city in Arkhangai province. Fresh water and volcanogenic Terkh White lake is 16 km long and it runs from the west to the east, and 6km wide from north to south. This lake was created as a result of a 4050 cm thick basaltic blockage of Terkhiin River, following the eruption of Khorgiin togoo and some other volcanoes. </p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:00 am breakfast</li>
                  <li>09:00 am drive to terh white lake</li>
                  <li>13:00 pm lunch time </li>
                  <li>18:00 pm dinner</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>3g/4g
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
                <p className='tour_left_column_text'>geust house d amarch honood yavna.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:00 am breakfast</li>
                  <li>09:00 am drive to Khuvsgul lake</li>
                  <li>13:00 pm lunch time</li>
                  <li>18:00 pm dinner </li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>3g/4g
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
                <p className='tour_left_column_text'>Khuvsgul is a land of thick forests, rushing rivers, sparkling lakes and rugged mountains. It’s Mongolia’s most beautiful province and seemingly every river bend or lake cove offers new and wonderful surprises.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>07:30 am breakfast</li>
                  <li>08:00 am drive to Khuvsgul lake</li>
                  <li>12:00 am lunch time in the Murun city</li>
                  <li>15:00 pm usan zaviar huseliin had yavna</li>
                  <li>17:00 pm hourse unana</li>
                  <li>18:00 pm dinner</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>3g/4g
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
                <p className='tour_left_column_header'>Day 6. Bulgan aimag </p>
              </div>
              <div>
                <p className='tour_left_column_text'>With a population of 13,000 at an elevation  of 1208 m, a small aimag capital, the city of Bulgan has long been known to foreigners as an overnight stop midway between Ulaanbaatar and the ever-popular Khovsgol Nuur. If you have been traveling in central or southern Mongolia, Bulgan city may impress you with its conifers, log cabins and absence of gers.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:00 am breakfastUlaanbaatar is the capital of Mongolia. It’s in the Tuul River valley, bordering the Bogd Khaan Uul National Park.</li>
                  <li>09:00 drive to Bulgan</li>
                  <li>12:00 lunch time</li>
                  <li>18:00 dinner ( mongol undesnii hool Khirhog )</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>3g/4g
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
                <p className='tour_left_column_header'>Day 7. Ulaanbaatar  </p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar is the capital of Mongolia. It’s in the Tuul River valley, bordering the Bogd Khaan Uul National Park.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'></p>
                <div style={{marginTop: "2%"}}>
                  <Link href="/contacts/#targetBlock" className='myButton '>
                    {t('City.button')}
                  </Link>
                </div>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>06:30 am breakfast</li>
                  <li>07:30 am drive to UlaanBaatar</li>
                  <li>12:00 am lunch time</li>
                  <li>116:00 pm gobi cashmere</li>
                  <li>18:00 pm dinner</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "1%", marginRight: "3%"}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" className='tour_right_column_icons'/>3 meals
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" className='tour_right_column_icons'/>3g/4g
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