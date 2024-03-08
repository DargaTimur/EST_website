import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const Central = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Tours');
  return (
    <div style={{marginTop: "8%"}}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/mapcenter.png'
              alt='Route'
            />
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/cet0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className='tours_image_container tours_page_main_header'>CENTRAL AIMAGS TOUR - 5 days 4 nights</p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 1. Elsen Tasarkhai (280km from UB)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Elsen Tasarkhai is located in Burd soum, Uvurkhangai Aimag (province), 280 km west of Ulaanbaatar. The nature of this area is truly amazing and great for relaxation. The area is surrounded by sand dunes, which are covered with rare bushes and there are also small forests near the river.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>★Caution★</p>
                <p className='tour_left_column_text_sec'> When riding a camel, it is best to refrain from wearing brightly colored clothes or clothes that make a lot of noise in the wind, and do not wear shoes with rough soles. When approaching a camel, you should calmly approach the left or front side of the horse. do.</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:30 AM - Breakfast</li>
                  <li>09:30 am - Move to Elsen Tasarkhai</li>
                  <li>12:00 am - lunch time</li>
                  <li>14:00-15:00 PM - Arrival at Elsen Tasarhai</li>
                  <li>4:00 PM - Free time to enjoy beautiful nature.</li>
                  <li>18:00 PM - Dinner</li>
                  <li>After 21:00, a small fireworks festival</li>
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
              src='/cet1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 2. - Tsenkher Hot Spring (160 km from Elsen Tasarkhai)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>It is located south of the village of Tsenkher in Arkhangai province. The water flows from deep in the ground, and because it is hot, it does not mix with dirt and groundwater. Additionally, the springs are maintained under high pressure underground and the flow rate can reach 10 liters per second.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>★Caution★</p>
                <p className='tour_left_column_text_sec'>Bring the clothes you need for the hot springs. (Swimsuit, Beachwear)</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:30 AM - Breakfast</li>
                  <li>09:30 AM - Depart for Tsenkher hot springs</li>
                  <li>12:00 AM - Lunch</li>
                  <li>14:00~15:00 PM - Use hot springs/spa after arrival</li>
                  <li>18:00 PM - Dinner</li>
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
              src='/cet2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 3. Kharkhorin Ugii nuur (190 km from Tsenkher)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>In 1206, Genghis Khan founded the Mongol Empire and built its first capital, Kharkhorin. The city of Kharkhorin existed for 140 years, was the central capital of Mongolia for 32 years, and was home to various religious temples. This city was the largest trading city in the world at the time.</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'>ARHANGAI Province is located in the western region of Mongolia, and Ogi Lake is an important freshwater lake for Mongolian fishing. The lake is 8km long, 6km wide, and 7m deep, and is a popular attraction for domestic and foreign tourists.</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>PROGRAM</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>08:00 AM - Breakfast</li>
                  <li>09:00 am - Depart for Kharkhorin</li>
                  <li>12:00 AM - Lunch time</li>
                  <li>13:00 PM - Visit ErdeneZuu Monastry</li>
                  <li>14:00 PM - Ugii nuur Depart from Ogi Lake</li>
                  <li>18:00 PM - Dinner</li>
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
              src='/cet4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 4. - Terelj National Park (420km from Ugii nuur)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Terelj is a unique mountain near the city of Ulaanbaatar. Each rocky mountain valley is traversed by the steep slopes of the mountains, creating a unique landscape. For example, there are many legendary and historical rock caves such as Camel Rock, Friends Rock, Monk Rock, Lion Rock, and Turtle Rock.</p>
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
                  <li>07:00 AM - Breakfast</li>
                  <li>07:30 am - Move to Terelj National Park.</li>
                  <li>12:00 AM - Lunch</li>
                  <li>15:00 PM - Arrival at Terelj National Park (horseback riding)</li>
                  <li>17:00 PM - Visit to Araival Monastery</li>
                  <li>18:00 PM - Dinner (Mongolian traditional food hurhug)</li>
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
              src='/cet4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 4. - Terelj National Park (420km from Ugii nuur)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Terelj is a unique mountain near the city of Ulaanbaatar. Each rocky mountain valley is traversed by the steep slopes of the mountains, creating a unique landscape. For example, there are many legendary and historical rock caves such as Camel Rock, Friends Rock, Monk Rock, Lion Rock, and Turtle Rock.</p>
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
                  <li>07:00 AM - Breakfast</li>
                  <li>07:30 am - Move to Terelj National Park.</li>
                  <li>12:00 AM - Lunch</li>
                  <li>15:00 PM - Arrival at Terelj National Park (horseback riding)</li>
                  <li>17:00 PM - Visit to Araival Monastery</li>
                  <li>18:00 PM - Dinner (Mongolian traditional food hurhug)</li>
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
              src='/cet5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>Day 6. Back to Ulaanbaatar (70km)</p>
              </div>
              <div>
                <p className='tour_left_column_text'>Ulaanbaatar is the capital of Mongolia. It is located in the Tuul river valley bordering Bogd Khaan Uul National Park.</p>
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
                  <li>10:00 AM - Breakfast</li>
                  <li>11:00 AM - Move to Ulaanbaatar</li>
                  <li>12:00 AM - Lunch Time</li>
                  <li>14:00 PM - Arrive at the accommodation</li>
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

export default Central