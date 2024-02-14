import {useTranslations} from 'next-intl';

const Visa = () => {
  const t = useTranslations('Information');
  return (
    <div style={{marginTop: "3%"}}>
      <div style={{marginLeft: "20%", marginRight: "20%"}}>
        <div style={{}}>
          <p style={{fontSize: "200%", fontWeight: "bold", textAlign: "center"}}>{t('visa.title')}</p>
          <p style={{fontSize: "120%"}}>{t('visa.text')}</p>
          <ul style={{listStyleType: "disc"}}>
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
          <p style={{fontSize: "120%", fontWeight: "bold"}}>{t('visa.subtitle')}</p>
          <ul style={{fontWeight: "bolder", listStyleType: "disc"}}>
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