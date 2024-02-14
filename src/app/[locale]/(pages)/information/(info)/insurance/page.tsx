import {useTranslations} from 'next-intl';

const Insurance = () => {
  const t = useTranslations('Information')
  return (
    <div style={{margin: "1%"}}>
      <img
        src='/3.jpg'
      />
      <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "4%", marginBottom: "4%"}}>
        <p style={{fontSize: "200%", fontWeight: "bolder", textAlign: "center"}}>{t('insurance.title')}</p>
        <div style={{fontSize: "120%", marginBottom: "3%"}}>
          <p>{t('insurance.text1')}</p>
          <p>{t('insurance.text2')}</p>
        </div>
          <p style={{fontSize: "120%"}}>{t('insurance.text3')}</p>
      </div>

    </div>
  )
}

export default Insurance