import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

const Insurance = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Information')
  return (
    <div style={{margin: "1%"}}>  
      <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "10%", marginBottom: "4%"}}>
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