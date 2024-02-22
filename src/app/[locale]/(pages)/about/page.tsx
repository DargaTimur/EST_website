import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';

const About = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('About');
  return (
    <div>
      <div>
        <img
          src='/1-1.jpg'
          alt='Name'
          width="100%"
          height="100%"
          style={{backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
        />
        <div style={{ position: "absolute", fontSize: "3vw", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#000", textAlign: "center" }}>
          <label style={{fontWeight: "500", color: "#fff"}}>{t('title')}</label>
        </div>
      </div>
      <div>
        <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "4%", marginBottom: "5%", alignItems: "center", justifyContent: "center"}}>
          <label style={{fontSize: "105%"}}>{t('text')}</label>
        </div>
      </div>
    </div>
  )
}

export default About

