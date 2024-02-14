import {useTranslations} from 'next-intl';
import OptionsContainer from '@/components/UI/OptionsContainer'

const Information = () => {
  const t = useTranslations('Information');
  return (
    <div style={{marginTop: "3%", marginLeft: "15%", marginRight: "15%"}}>
      <div style={{}}>
        <p style={{textAlign: "center", marginBottom: "3%", fontSize: "200%", fontWeight: "bold"}}>{t('title')}</p>
        <div >
          <img
            src='/mongolia.jpg'
            style={{ margin: "0 auto", display: "block"}}
          />
        </div>
        <div>
          <p style={{marginBottom: "3%", fontSize: "160%", textAlign: "center", fontWeight: "bolder"}}>{t('subtitle')}</p>
        </div>
        <div style={{margin: "5%", paddingLeft: "2%", paddingRight: "2%"}}>
          <p style={{marginBottom: "3%", fontSize: "140%"}}>{t('text')}</p>
          {/*нарисуй таблицу*/}
        </div>
        <p style={{textAlign: "center", fontSize: "200%", justifyContent: 'center', fontWeight: "bold"}}>{t('subtitle2')}</p>
        <div style={{marginLeft: "3.5%"}}>
          <OptionsContainer/>
        </div>
      </div>
    </div>
  )
}

export default Information
