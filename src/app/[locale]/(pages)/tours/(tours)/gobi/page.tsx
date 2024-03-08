import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Gobi = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Tours');
  return (
    <div style={{marginTop: "8%"}}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/mapgobi.png'
              alt='Route'
            />
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/gt0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className='tours_image_container tours_page_main_header'>GOBI TOUR - 7 days 6 nights</p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 1. Tsagan Suvarga (420km)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Tsagaan suvarga /White Stupa/ rises 90 degrees vertically and is composed of clay deposits of various colors. The destination is 65 km southwest of Ulziit sum, Dundgovi province. Tsagaan suvarga is a large cliff with a height of 200 meters and a length of 400 meters.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>★Caution★</p>
                <p className='tour_left_column_text_sec'>Most of the roads in the Mongolian Gobi are unpaved, off-road roads. Bringing a personal neck pillow will help you move more comfortably.</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>07:00 AM - Breakfast</li>
                  <li>07:30 AM - Depart for Chagansuvarga</li>
                  <li>12:00 AM - Lunch</li>
                  <li>15:00 PM - Native to Tsagansuvarga</li>
                  <li>19:00 PM - Meal throughout</li>
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
              src='/gt1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 2. Yolin Am (180km)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>It is a great place to spot eagles, wild argali sheep and golden eagles. Initially established to protect local birdlife, it eventually became a popular place to visit the deep ice floes that form in winter and remain well into summer.</p>
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
                  <li>08:00 AM - Breakfast</li>
                  <li>09:00 AM - Depart from Yolin Am</li>
                  <li>12:00 PM - Lunch</li>
                  <li>18:00 PM - Meal throughout the camp</li>
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
              src='/gt2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 3. Hongor Sand Dunes (180km)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>This is one of the largest and most beautiful sand dunes in Mongolia. This 200m high sand dune is 7-8km wide and about 180km long. Climbing the dunes is interesting not only for the view from the top, but also for the sounds the dunes make while climbing.</p>
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
                  <li>09:00 AM Breakfast</li>
                  <li>10:00 AM Depart Hongor Sand Dunes</li>
                  <li>01:00 PM Lunch </li>
                  <li>03:00 PM Camel ride</li>
                  <li>05:00 PM Climb Hongor Sand Dune</li>
                  <li>07:00 PM Meal across the board</li>
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
              src='/gt3.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 4. Bayanzag (160km)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>It has a unique texture, measuring 5km wide and approximately 8km long. Roy Chapmen Endrius, an American paleontologist, first discovered fossil dinosaur bones and eggs in the area in 1922 while on an expedition with his crew to find traces of ancient people.</p>
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
                  <li>08:30 AM Breakfast</li>
                  <li>09:00 AM Depart Bayanzag</li>
                  <li>12:00 AM Lunch</li>
                  <li>02:00 PM Arrival at Bayanzag</li>
                  <li>07:00 PM Meal across the board</li>
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
              src='/gt4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 5. Baga Gazryn Chuluu (480km)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>In addition to many springs, there are many ancient tombs and monuments around the mountain passes and valleys. There is much to see, including the poplar rock valley called Sudutyn am, the Jargalant cave, and rocks with ancient pictographs.</p>
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
                  <li>08:00 AM Breakfast at </li>
                  <li>08:30 AM Depart from Baga Gazryn Chuluu </li>
                  <li>12:00 AM Lunch</li>
                  <li>17:00 After arriving, enjoy the beautiful nature, take photos, and go hiking.</li>
                  <li>19:00pm Meal across the board at </li>
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
              src='/gt5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 6. Terelj National Park</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Terelj is a unique mountain near the city of Ulaanbaatar. Each rocky mountain valley is traversed by the steep slopes of the mountains, creating a unique landscape. There are numerous legendary and historical rock caves, for example Camel Rock, Friend Rock, Monk Rock, Lion Rock and Turtle Rock.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>★Horse riding precautions★</p>
                <p className='tour_left_column_text_sec'>1. Never stand behind a horse. <br/>2. When riding a horse, get on and off on the right side. <br/>3. When you want to run a little faster or run... it is called choo choo.</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>07:00 AM Breakfast at </li>
                  <li>07:30 am Depart from Terelj National Park at </li>
                  <li>12:00 AM Lunch at </li>
                  <li>15:00 PM Horseback riding in Terelj (seeing eagles)</li>
                  <li>16:00 PM Visit Aryabal monastery at </li>
                  <li>18:00 PM Dinner at  (Mongolian traditional food Horhog)</li>
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
              src='/gt6.jpg'
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
                <p className='tour_left_column_text'>Ulaanbaatar is the capital of Mongolia. It is located in the Tuul River Valley, bordering Bogd Khaan Uul National Park.</p>
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
                  <li>Breakfast at 08:00 AM</li>
                  <li>10:00 AM Chinghis Khan Statue</li>
                  <li>Lunch at 12:00 AM</li>
                  <li>14:00 pm Gobi cashmer viewing</li>
                  <li>Dinner at 18:00 PM</li>
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

export default Gobi