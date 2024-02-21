import { GOBI_KHANGAI } from '@/constants'
import { KhangaiTour } from '@/constants'
import Link from 'next/link';
import '../../../../../../components/UI/button.css'

const GobiKhangai = () => {
  return (
    <div style={{margin: "3%", marginTop: "10%"}}>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "3%"}}> {/*For description*/}
        <p style={{fontSize: "200%", fontWeight: "bold", marginBottom: "1%"}}>Gobi-Khangai tour <a style={{fontSize: "60%", color: "#1226db"}}>15 days 14 nights </a></p>
        <div style={{ display: "flex"}}>
          <div style={{marginRight: "3%", marginBottom: "3%", width: "50%"}}>
            <img
              src='/tmkhangai.jpg'
            />
          </div>
          <div style={{width: "50%"}}>
            <p style={{fontSize: "130%" }}>{GOBI_KHANGAI}</p>
            <div style={{marginTop: "3%"}}>
              <Link href="/contacts" className='myButton '>
                Go to Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "9%"}}> {/*For table*/}
        <table>
          <thead>
            <tr style={{fontWeight: "bolder", backgroundColor: "#c8d4e3"}}>
              <td style={{textAlign: "center"}}>Day</td>
              <td style={{textAlign: "center"}}>Destinations</td>
              <td style={{textAlign: "center"}}>Schedule</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>1</td>
              <td style={{textAlign: "center"}}>Gazryn Chuluu <br/>(262 km from Ulaanbaatar)</td>
              <td>08:00 am-Breakfast at the Guset House<br></br>
                09:00 am-Drive to White Stupa<br></br>
                12:00 am-Lunch time<br></br>
                05:00 pm- arrival in white Stupa<br></br>
                07:00 pm- Dinner</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>2</td>
              <td style={{textAlign: "center"}}>White Stupa<br/> (210 km Baga Gazar)</td>
              <td>08:00 am- Breakfast<br></br>
                09:00 am- Drive to Yolyn Am<br></br>
                10:00 am- arrival in Yolyn Am<br></br>
                12:00 am- Lunch time<br></br>
                06:00 pm- Dinner<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>3</td>
              <td style={{textAlign: "center"}}>Yolyn Am <br/>(270 km From White Stupa)</td>
              <td>09:00 am- Breakfast<br></br>
                10:00 am- Drive to Kharkhorin<br></br>
                12:00 am- Lunch time<br></br>
                03:00 pm- Visit the ErdeneZuu Monastry<br></br>
                04:00 pm- KharKhorin Museum<br></br>
                06:00 pm- Dinner<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>4</td>
              <td style={{textAlign: "center"}}>Khongoryn Els <br />(180 km from Yolyn am)</td>
              <td>09:00 am-Breakfast<br></br>
                10:00 am-Drive to Terelj National Park.<br></br>
                12:00 am- Lunch time<br></br>
                02:00 pm - Arrival in Terelj National Park<br></br>
                03:00 pm- Ride a horse <br></br>
                04:00 pm-Visiting to Araybal Monastry<br></br>
                06:00 pm- dinnerTime<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>5</td>
              <td style={{textAlign: "center"}}>Baynzag <br />(120km from Khongoryn Els )</td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>6</td>
              <td style={{textAlign: "center"}}>Ongi Monastry </td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>7</td>
              <td style={{textAlign: "center"}}>Kharkhorin Ancient capital City (280km form Ongi)</td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>8</td>
              <td style={{textAlign: "center"}}>senkher Hot Spring </td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>9</td>
              <td style={{textAlign: "center"}}>Zuun Nuur (140km from Terkh white Lake)</td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>10-12</td>
              <td style={{textAlign: "center"}}>Khuvsgul Lake(270km from Zuun Nuur)</td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>13</td>
              <td style={{textAlign: "center"}}>Uran Togoo (360 km from Khuvsgul Lake) </td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>14</td>
              <td style={{textAlign: "center"}}>Amarbaysagalant Monastery (280km from Uran Togoo)</td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>15</td>
              <td style={{textAlign: "center"}}>Back to Ulaaanbaatar </td>
              <td>10:00 am- Breakfast<br></br>
                11:00 am- Drive to Ulaanbaatar<br></br>
                12:00 am- Lunch Time<br></br>
                02:00 pm- Arrrival at the Guest House<br></br>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%"}}> {/*for container*/}
        <div style={{marginBottom: "10%"}}>
          {KhangaiTour.map((element) => (
            <div key={element.id}>
              <div style={{display: "flex", marginBottom: "3%"}}>
                <img
                  src={element.src}
                  alt={element.title}
                  width="40%"
                />
                <div style={{marginLeft: "3%", marginBottom: "3%", fontSize: "130%"}}>
                  <strong style={{color: "#1137ed"}}>{element.title}</strong>
                  <p>{element.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GobiKhangai