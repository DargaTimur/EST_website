import {useTranslations} from 'next-intl';
import { mobileCompanies } from '@/constants'

const Phone = () => {
  const t = useTranslations('Information')
  return (
    <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "7.4%", marginBottom: "3%"}}>
      <img
        src='/pmain.jpg'
        style={{marginBottom: "3%"}}
      />
      <div style={{display: "flex", gap: "10%"}}>
        {mobileCompanies.map((element, index) => (
          <div key={element.id} style={{ justifyContent: "center", alignItems: "center" }}>
            <a href={element.href}>
              <img 
                key={element.id} 
                src={element.src} 
                alt={element.title} 
                width="600vw"
                style={{marginBottom: "2%",}}
              /> 
            </a>
          <p style={{fontSize: "140%", fontWeight: "bolder", textAlign: "center", marginBottom: '8%'}}>{t(`phone.title.${index}.title`)}</p>
        </div>
        ))}
      </div>
      <div>
        <p style={{marginTop: "3%", fontSize: "140%"}}>{t('phone.text')}</p>
      </div>
    </div>
  )
}

export default Phone