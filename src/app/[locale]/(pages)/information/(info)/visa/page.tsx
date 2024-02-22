import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

const Visa = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Information');
  return (
    <div style={{marginTop: "10%"}}>
      <div style={{marginLeft: "20%", marginRight: "20%"}}>
        <div>
          <p style={{fontSize: "200%", fontWeight: "bold", textAlign: "center", marginBottom: "4%"}}>{t('visa.title')}</p>
          <p style={{fontSize: "120%"}}>{t('visa.text')}</p>
          <ul style={{listStyleType: "disc", marginBottom: "3%"}}>
            <li>{t('visa.ul1')}</li>
            <li>{t('visa.ul2')}</li>
            <li>{t('visa.ul3')}</li>
            <li>{t('visa.ul4')}</li>
            <li>{t('visa.ul5')}</li>
            <li>{t('visa.ul6')}</li>
            <li>{t('visa.ul7')}</li>
            <li>{t('visa.ul8')}</li>
            <li>{t('visa.ul9')}</li>
          </ul>
          <p style={{fontSize: "120%", fontWeight: "bold", marginBottom: "3%"}}>{t('visa.subtitle')}</p>
          <ul style={{fontWeight: "bolder", listStyleType: "disc", marginBottom: "5%"}}>
            <li>{t('visa.ul10')}</li>
            <li>{t('visa.ul11')}</li>
            <li>{t('visa.ul12')}</li>
            <li>{t('visa.ul13')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Visa