import {useTranslations} from 'next-intl';
import Link from 'next/link';
import '../../nextButton.css';

const EagleFestival = () => {
  const t = useTranslations('Events');
  return (
    <div>
      <div style={{width: "1903px", height: "950px", overflow: "hidden", textAlign: "center"}}>
        <div style={{width: "1903px", height: "100vh", objectFit: "cover", position: "absolute", top: "0", left: "0", zIndex: "-1", overflow: "hidden"}}>
          <img
                src='/20.jpg'
                style={{marginBottom: "3%"}}
          />
        </div>
      </div>
      <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "1%", marginBottom: "3%"}}>
        <div style={{marginBottom: "3%"}}> {/*For image and descr*/}
          <p style={{fontSize: "200%", fontWeight: "bold", textAlign: "center"}}>{t('eagle-festival.title')}</p>
        </div>
        <div>
          <p style={{fontSize: "140%", marginBottom: "3%"}}>{t('eagle-festival.text')}</p>
        </div>
        <div> {/*For table*/}
          <table>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '70%' }} />
            </colgroup>
            <thead>
              <tr>
                <td>{t('eagle-festival.td1')}</td>
                <td>{t('eagle-festival.tdtext1')}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('eagle-festival.td2')}</td>
                <td>{t('eagle-festival.tdtext2')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('eagle-festival.td3')}</td>
                <td>{t('eagle-festival.tdtext3')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('eagle-festival.td4')}</td>
                <td>{t('eagle-festival.tdtext4')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{marginBottom: "5%", marginTop: "3%", display: "flex", justifyContent: "space-between"}}> 
          <Link href={'./camel'}>
            <button className='nextButton' style={{width: "90px"}}>
              {t('previous')}
            </button>
          </Link>
          <Link href={'./ice'}>
            <button className='nextButton' style={{width: "90px"}}> 
              {t('next')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EagleFestival