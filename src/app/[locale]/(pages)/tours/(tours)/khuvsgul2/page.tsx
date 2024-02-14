import { KHUVSGUL2 } from '@/constants';
import { KhuvsgulTour } from '@/constants';
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {useTranslations} from 'next-intl';

const Khuvsgul2 = () => {
  const t = useTranslations('Tours');
  return (
    <div style={{margin: "3%", marginTop: "5%"}}>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "3%"}}> {/*For description*/}
        <p style={{fontSize: "200%", fontWeight: "bold", marginBottom: "1%"}}>{t('Khuvsgul2.title')} <a style={{fontSize: "60%", color: "#1226db"}}>{t('Khuvsgul2.subtitle')} </a></p>
        <div style={{ display: "flex"}}>
          <div style={{marginRight: "3%", marginBottom: "3%", width: "50%"}}>
            <img
              src='/tmkhuvsgul2.jpg'
            />
          </div>
          <div style={{width: "50%"}}>
            <p style={{fontSize: "130%" }}>{t('Khuvsgul2.text')}</p>
            <div style={{marginTop: "3%"}}>
              <Link href="/contacts" className='myButton '>
              {t('Khuvsgul2.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "9%"}}> {/*For table*/}
        <table>
          <thead>
            <tr style={{fontWeight: "bolder", backgroundColor: "#c8d4e3"}}>
              <td style={{textAlign: "center"}}>{t('Khuvsgul2.tdl1')}</td>
              <td style={{textAlign: "center"}}>{t('Khuvsgul2.tdl2')}</td>
              <td style={{textAlign: "center"}}>{t('Khuvsgul2.tdl3')}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>1</td>
              <td style={{textAlign: "center"}}>Bulgan Province<br/>(639km from Ulaanbaatar)</td>
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
              <td style={{textAlign: "center"}}>Bulgan Province-Khuvsgul Lake <br/> (360km from Bulgan Province)</td>
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
              <td style={{textAlign: "center"}}>Khuvsgul Lake</td>
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
              <td style={{textAlign: "center"}}>Khuvsgul Lake-Zuun Nuur</td>
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
              <td style={{textAlign: "center"}}>Zuun Nuur-Terkh White Lake</td>
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
              <td style={{textAlign: "center"}}>Terkh White Lake-Tsenkher Hot Spring</td>
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
              <td style={{textAlign: "center"}}>Tsenkher Hot Spring-Mini Gobi </td>
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
              <td style={{textAlign: "center"}}>Back to Ulaanbaatar</td>
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
          {KhuvsgulTour.map((element, index) => (
            <div key={element.id}>
              <div style={{display: "flex", marginBottom: "3%"}}>
                <img
                  src={element.src}
                  alt={element.title}
                  width="40%"
                />
                <div style={{marginLeft: "3%", marginBottom: "3%", fontSize: "130%"}}>
                  <strong style={{color: "#1137ed"}}>{t(`Khuvsgul2-block.${index}.title`)}</strong>
                  <p>{t(`Khuvsgul2-block.${index}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Khuvsgul2