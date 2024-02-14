import { CITY } from '@/constants';
import { CityTour } from '@/constants';
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {useTranslations} from 'next-intl';

const City = () => {
  const t = useTranslations('Tours');
  return (
    <div style={{margin: "3%", marginTop: "5%"}}>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "3%"}}> {/*For description*/}
        <p style={{fontSize: "200%", fontWeight: "bold", marginBottom: "1%"}}>{t('City.title')} <a style={{fontSize: "60%", color: "#1226db"}}>{t('City.subtitle')} </a></p>
        <div style={{ display: "flex"}}>
          <div style={{marginRight: "3%", marginBottom: "3%", width: "50%"}}>
            <img
              src='/tmcity.jpg'
            />
          </div>
          <div style={{width: "50%"}}>
            <p style={{fontSize: "130%" }}>{t('City.text')}</p>
            <div style={{marginTop: "3%"}}>
              <Link href="/contacts" className='myButton '>
              {t('City.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "9%"}}> {/*For table*/}
        <table>
          <thead>
            <tr style={{fontWeight: "bolder", backgroundColor: "#c8d4e3"}}>
              <td style={{textAlign: "center"}}>{t('City.tdl1')}</td>
              <td style={{textAlign: "center"}}>{t('City.tdl2')}</td>
              <td style={{textAlign: "center"}}>{t('City.tdl3')}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>1</td>
              <td style={{textAlign: "center"}}>{t('City.td1-1')}</td>
              <td>{t('City.li1td1')}<br/>
                {t('City.li2td1')}<br/>
                {t('City.li3td1')}<br/>
                {t('City.li4td1')}<br/>
                {t('City.li5td1')}<br/>
                {t('City.li6td1')}<br/>
                {t('City.li7td1')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>2</td>
              <td style={{textAlign: "center"}}>{t('City.td2-1')} <br/>{t('City.td2-2')}</td>
              <td>{t('City.li1td2')}<br/>
                {t('City.li2td2')}<br/>
                {t('City.li3td2')}<br/>
                {t('City.li4td2')}<br/>
                {t('City.li5td2')}<br/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>3</td>
              <td style={{textAlign: "center"}}>{t('City.td3-1')}<br/>{t('City.td3-2')}</td>
              <td>{t('City.li1td3')}<br/>
                {t('City.li2td3')}<br/>
                {t('City.li3td3')}<br/>
                {t('City.li4td3')}<br/>
                {t('City.li5td3')}<br/>
                {t('City.li6td3')}<br/>
                {t('City.li7td3')}<br/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%"}}> {/*for container*/}
        <div style={{marginBottom: "10%"}}>
          {CityTour.map((element, index) => (
            <div key={element.id}>
              <div style={{display: "flex", marginBottom: "3%"}}>
                <img
                  src={element.src}
                  alt={element.title}
                  width="40%"
                />
                <div style={{marginLeft: "3%", marginBottom: "3%", fontSize: "130%"}}>
                  <strong style={{color: "#1137ed"}}>{t(`City-block.${index}.title`)}</strong>
                  <p>{t(`City-block.${index}.description`)}</p>
                </div>
              </div>
            </div>
          ))}   
        </div>
      </div>
    </div>
  )
}

export default City