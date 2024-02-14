import { KHUVSGUL1 } from '@/constants';
import { KhuvsgulAimag } from '@/constants';
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {useTranslations} from 'next-intl';

const Khuvsgul1 = () => {
  const t = useTranslations('Tours');
  return (
    <div style={{margin: "3%", marginTop: "5%"}}>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "3%"}}> {/*For description*/}
        <p style={{fontSize: "200%", fontWeight: "bold", marginBottom: "1%"}}>{t('Khuvsgul1.title')} <a style={{fontSize: "60%", color: "#1226db"}}>{t('Khuvsgul1.subtitle')} </a></p>
        <div style={{ display: "flex"}}>
          <div style={{marginRight: "3%", marginBottom: "3%", width: "50%"}}>
            <img
              src='/tmkhuvsgul1.jpg'
            />
          </div>
          <div style={{width: "50%"}}>
            <p style={{fontSize: "130%" }}>{t('Khuvsgul1.text')}</p>
            <div style={{marginTop: "3%"}}>
              <Link href="/contacts" className='myButton '>
                {t('Khuvsgul1.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "9%"}}> {/*For table*/}
        <table>
          <thead>
            <tr style={{fontWeight: "bolder", backgroundColor: "#c8d4e3"}}>
              <td style={{textAlign: "center"}}>{t('Khuvsgul1.tdl1')}</td>
              <td style={{textAlign: "center"}}>{t('Khuvsgul1.tdl2')}</td>
              <td style={{textAlign: "center"}}>{t('Khuvsgul1.tdl3')}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>1</td>
              <td style={{textAlign: "center"}}>{t('Khuvsgul1.td1-1')}</td>
              <td>{t('Khuvsgul1.li1td1')}<br/>
                {t('Khuvsgul1.li2td1')}<br/>
                {t('Khuvsgul1.li3td1')}<br/>
                {t('Khuvsgul1.li4td1')}<br/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>2</td>
              <td style={{textAlign: "center"}}>{t('Khuvsgul1.td2-1')}</td>
              <td>{t('Khuvsgul1.li1td2')}<br/>
                {t('Khuvsgul1.li2td2')}<br/>
                {t('Khuvsgul1.li3td2')}<br/>
                {t('Khuvsgul1.li4td2')}<br/>
                {t('Khuvsgul1.li5td2')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>3</td>
              <td style={{textAlign: "center"}}>{t('Khuvsgul1.td3-1')}</td>
              <td>{t('Khuvsgul1.li1td3')}<br/>
                {t('Khuvsgul1.li2td3')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%"}}> {/*for container*/}
        <div style={{marginBottom: "10%"}}>
          {KhuvsgulAimag.map((element, index) => (
            <div key={element.id}>
              <div style={{display: "flex", marginBottom: "3%"}}>
                <img
                  src={element.src}
                  alt={element.title}
                  width="40%"
                />
                <div style={{marginLeft: "3%", marginBottom: "3%", fontSize: "130%"}}>
                  <strong style={{color: "#1137ed"}}>{t(`Khuvsgul1-block.${index}.title`)}</strong>
                  <p>{t(`Khuvsgul1-block.${index}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
  
export default Khuvsgul1