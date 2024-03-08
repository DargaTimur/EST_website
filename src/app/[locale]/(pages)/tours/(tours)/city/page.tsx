import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const City = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Tours');
  return (
    <div style={{marginTop: "8%"}}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/mapcity.png'
              alt='Route'
            />
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/cit0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className='tours_image_container tours_page_main_header'>ULAANBAATAR CITY TOUR - 3 days 2 nights</p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 1. Ulaanbaatar</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar can be a little difficult to navigate, but with the help of an experienced guide, travelers can complete every activity on their list, including visiting world-class museums, seeing traditional theaters, sampling international cuisine, and perusing cashmere stores. You can experience life in Ulaanbaatar until 3 am. In fact, this ever-changing city may be the biggest surprise of your Mongolian adventure.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'> </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>Breakfast at 09:00 AM</li>
                  <li>10:00 AM - Tour begins at Sukhbaatar Square in the capital center</li>
                  <li>11:30 AM - Arrive at Bogd Khan Palace Museum, Mongolia</li>
                  <li>13:00 AM - Lunch time</li>
                  <li>15:00 PM - Gobi cashmer viewing</li>
                  <li>18:00 PM - Dinner and visit to Jaishan Hill</li>
                  <li>19:00 PM - Visit Zaisan Hill</li>
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
              src='/cit1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 2. Terelj National Park (80 km from UB)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Terelj is a unique mountain near the city of Ulaanbaatar. Each rocky mountain valley is traversed by the steep slopes of the mountains, creating a unique landscape. There are numerous legendary and historical rock caves, for example Camel Rock, Friend Rock, Monk Rock, Lion Rock and Turtle Rock.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>★Horse riding precautions★</p>
                <p className='tour_left_column_text_sec'> 1. Never stand behind a horse. <br/>2. When riding a horse, get on and off on the right side. <br/>3. When you want to run a little faster or run... it is called choo choo.</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:00 AM - Breakfast</li>
                  <li>09:00 am - Move to Terelj National Park</li>
                  <li>12:00 AM - Lunch time</li>
                  <li>13:00 PM - Climb Turtle Rock</li>
                  <li>14:00 PM - Visit Aryabal Monastry</li>
                  <li>16:00 PM - Horse riding (see Toksuri)</li>
                  <li>18:00 PM - Dinner (Mongolian traditional food khorkhog)</li>
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
        <div style={{ marginBottom: "5%"}}> {/*удалить отсуп снизу*/}
          <div style={{position: 'relative'}}>
            <img
              src='/cit2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 3. Chinggis Khaan Statue (20 km from Terelj)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>This is the world's largest equestrian statue of Chinghis Khan, located approximately 54km from the capital of Mongolia. You can take the elevator to the top of the statue and follow the path to enjoy impressive views from above the horse's head.</p>
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
                  <li>08:30 AM - Breakfast</li>
                  <li>10:00 AM - Visit Genghis Khan Statue</li>
                  <li>13:00 PM - Lunch time</li>
                  <li>14:00 PM - Mongolian Natural History Museum</li>
                  <li>16:00 PM - Guest returns to Hausu (Hotel)</li>
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
          <p>If you wish before signing the contract, you may change your travel itinerary slightly (Scheduled times may vary slightly depending on weather and off-road conditions.)</p>
        </div>
      </div>
    </div>
  )
}

export default City