import { GOBI } from '@/constants';
import { GobiTour } from '@/constants';
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {useTranslations} from 'next-intl';

const Gobi = () => {
  const t = useTranslations('Tours');
  return (
    <div style={{margin: "3%", marginTop: "5%"}}>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "3%"}}> {/*For description*/}
        <p style={{fontSize: "200%", fontWeight: "bold", marginBottom: "1%"}}>{t('Gobi.title')} <a style={{fontSize: "60%", color: "#1226db"}}>{t('Gobi.subtitle')} </a></p>
        <div style={{ display: "flex"}}>
          <div style={{marginRight: "3%", marginBottom: "3%", width: "50%"}}>
            <img
              src='/tmgobi.jpg'
            />
          </div>
          <div style={{width: "50%"}}>
            <p style={{fontSize: "130%" }}>{t('Gobi.text')}</p>
            <div style={{marginTop: "3%"}}>
              <Link href="/contacts" className='myButton '>
              {t('Gobi.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "9%"}}> {/*For table*/}
        <table>
          <thead>
            <tr style={{fontWeight: "bolder", backgroundColor: "#c8d4e3"}}>
              <td style={{textAlign: "center"}}>{t('Gobi.tdl1')}</td>
              <td style={{textAlign: "center"}}>{t('Gobi.tdl2')}</td>
              <td style={{textAlign: "center"}}>{t('Gobi.tdl3')}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>1</td>
              <td style={{textAlign: "center"}}>{t('Gobi.td1-1')} <br/>{t('Gobi.td1-2')}</td>
              <td>{t('Gobi.li1td1')}<br/>
                {t('Gobi.li2td1')}<br/>
                {t('Gobi.li3td1')}<br/>
                {t('Gobi.li4td1')}<br/>
                {t('Gobi.li5td1')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>2</td>
              <td style={{textAlign: "center"}}>{t('Gobi.td2-1')}</td>
              <td>{t('Gobi.li1td2')}<br/>
                {t('Gobi.li2td2')}<br/>
                {t('Gobi.li3td2')}<br/>
                {t('Gobi.li4td2')}<br/>
                {t('Gobi.li5td2')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>3</td>
              <td style={{textAlign: "center"}}>{t('Gobi.td3-1')}</td>
              <td>{t('Gobi.li1td3')}<br/>
                {t('Gobi.li2td3')}<br/>
                {t('Gobi.li3td3')}<br/>
                {t('Gobi.li4td3')}<br/>
                {t('Gobi.li5td3')}<br/>
                {t('Gobi.li6td3')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>4</td>
              <td style={{textAlign: "center"}}>{t('Gobi.td4-1')}</td>
              <td>{t('Gobi.li1td4')}<br/>
                {t('Gobi.li2td4')}<br/>
                {t('Gobi.li3td4')}<br/>
                {t('Gobi.li4td4')}<br/>
                {t('Gobi.li5td4')}<br/>
                {t('Gobi.li6td4')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>5</td>
              <td style={{textAlign: "center"}}>{t('Gobi.td5-1')}</td>
              <td>{t('Gobi.li1td5')}<br/>
                {t('Gobi.li2td5')}<br/>
                {t('Gobi.li3td5')}<br/>
                {t('Gobi.li4td5')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>6</td>
              <td style={{textAlign: "center"}}>{t('Gobi.td6-1')}</td>
              <td>{t('Gobi.li1td6')}<br/>
                {t('Gobi.li2td6')}<br/>
                {t('Gobi.li3td6')}<br/>
                {t('Gobi.li4td6')}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={{textAlign: "center"}}>7</td>
              <td style={{textAlign: "center"}}>{t('Gobi.td7-1')}</td>
              <td>{t('Gobi.li1td7')}<br/>
                {t('Gobi.li2td7')}<br/>
                {t('Gobi.li3td7')}<br/>
                {t('Gobi.li4td7')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%"}}> {/*for container*/}
        <div style={{marginBottom: "10%"}}>
          {GobiTour.map((element, index) => (
            <div key={element.id}>
              <div style={{display: "flex", marginBottom: "5%"}}>
                <img
                  src={element.src}
                  alt={element.title}
                  width="40%"
                />
                <div style={{marginLeft: "3%", marginBottom: "3%", fontSize: "130%"}}>
                  <strong style={{color: "#1137ed"}}>{t(`Gobi-block.${index}.title`)}</strong>
                  <p>{t(`Gobi-block.${index}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gobi