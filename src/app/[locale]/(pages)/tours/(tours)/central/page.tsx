import { CENTRAL } from '@/constants';
import { CentralTour } from '@/constants';
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {useTranslations} from 'next-intl';

const Central = () => {
  const t = useTranslations('Tours');
  return (
    <div style={{margin: "3%", marginTop: "5%"}}>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "3%"}}> {/*For description*/}
        <p style={{fontSize: "200%", fontWeight: "bold", marginBottom: "1%"}}>{t('Central.title')} <a style={{fontSize: "60%", color: "#1226db"}}>{t('Central.subtitle')}</a></p>
        <div style={{ display: "flex"}}>
          <div style={{marginRight: "3%", marginBottom: "3%", width: "50%"}}>
            <img
              src='/tmcentral.jpg'
            />
          </div>
          <div style={{width: "50%"}}>
            <p style={{fontSize: "120%" }}>{t('Central.text')}</p>
            <div style={{marginTop: "3%"}}>
              <Link href="/contacts" className='myButton '>
              {t('Central.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "9%"}}> {/*For table*/}
        <table>
          <thead>
            <tr style={{fontWeight: "bolder"}}>
              <td style={{textAlign: "center"}}>{t('Central.tdl1')}</td>
              <td style={{textAlign: "center"}}>{t('Central.tdl2')}</td>
              <td style={{textAlign: "center"}}>{t('Central.tdl3')}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>1</td>
              <td style={{textAlign: "center"}}>{t('Central.td1-1')} <br/>{t('Central.td1-2')}</td>
              <td>{t('Central.li1td1')}<br/>
                {t('Central.li2td1')}<br/>
                {t('Central.li3td1')}<br/>
                {t('Central.li4td1')}<br/>
                {t('Central.li5td1')}<br/>
                {t('Central.li6td1')}<br/>
                {t('Central.li7td1')}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>2</td>
              <td style={{textAlign: "center"}}>{t('Central.td2-1')}<br/>{t('Central.td2-2')}</td>
              <td>{t('Central.li1td2')}<br/>
                {t('Central.li2td2')}<br/>
                {t('Central.li3td2')}<br/>
                {t('Central.li4td2')}<br/>
                {t('Central.li5td2')}<br/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>3</td>
              <td style={{textAlign: "center"}}>{t('Central.td3-1')}<br/>{t('Central.td3-2')}</td>
              <td>{t('Central.li1td3')}<br/>
                {t('Central.li2td3')}<br/>
                {t('Central.li3td3')}<br/>
                {t('Central.li4td3')}<br/>
                {t('Central.li5td3')}<br/>
                {t('Central.li6td3')}<br/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>4</td>
              <td style={{textAlign: "center"}}>{t('Central.td4-1')}</td>
              <td>{t('Central.li1td4')}<br/>
                {t('Central.li2td4')}<br/>
                {t('Central.li3td4')}<br/>
                {t('Central.li4td4')}<br/>
                {t('Central.li5td4')}<br/>
                {t('Central.li6td4')}<br/>
                {t('Central.li7td4')}<br/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>5</td>
              <td style={{textAlign: "center"}}>{t('Central.td5-1')}</td>
              <td>{t('Central.li1td5')}<br/>
                {t('Central.li2td5')}<br/>
                {t('Central.li3td5')}<br/>
                {t('Central.li4td5')}<br/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%"}}> {/*for container*/}
        <div style={{marginBottom: "10%"}}>
          {CentralTour.map((element, index) => (
            <div key={element.id}>
              <div style={{display: "flex", marginBottom: "5%"}}>
                <img
                  src={element.src}
                  alt={element.title}
                  width="40%"
                />
                <div style={{marginLeft: "3%", marginBottom: "3%", fontSize: "130%"}}>
                  <strong style={{color: "#1137ed"}}>{t(`Central-block.${index}.title`)}</strong>
                  <p>{t(`Central-block.${index}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Central