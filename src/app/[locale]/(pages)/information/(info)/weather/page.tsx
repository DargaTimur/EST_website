import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

const Weather = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Information');
  return (
    <div>
      <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "10%", marginBottom: "4%"}}>
        <p style={{fontSize: "200%", fontWeight: "bolder", textAlign: "center", marginBottom: "3%"}}>{t('weather.title')} </p>
        <p style={{fontSize: "120%", marginBottom: "3%"}}>{t('weather.text1')}</p>
        <p style={{marginBottom: "3%", fontSize: "120%"}}>{t('weather.text2')}</p>
        <p style={{marginBottom: "3%", fontSize: "120%"}}>{t('weather.text3')}</p>
        <p style={{marginBottom: "3%", fontSize: "120%"}}>{t('weather.text4')}</p>
      </div>
    </div>
  )
}

export default Weather