import {useTranslations} from 'next-intl';
import { TOURS_IMAGES } from '@/constants';
import {unstable_setRequestLocale} from 'next-intl/server';

const Tours = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Tours');
  return (
    <div >
      <div style={{width: "1903px", height: "875px", overflow: "hidden", textAlign: "center", marginBottom: "5%"}}> 
        <img
          style={{width: "100vw", height: "100vh", objectFit: "cover", position: "absolute", top: "0", left: "0", zIndex: "-1", overflow: "hidden"}}
          src='/toursmain.jpg'
          alt='Name'
          width="100%"
          height="300px"
        />
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white'}}>
          <h1 style={{fontSize: '400%', fontWeight: '500'}}>{t('title')}</h1>
        </div>
      </div>
      <div>
        <p style={{textAlign: "center", marginBottom: "3%", fontSize: "200%", fontWeight: "500"}}>
          {t('subtitle')}
        </p>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%"}}>
        <div style={{display: "flex", flexWrap: "wrap", gap: "8%", marginBottom: '2%'}}>
          {TOURS_IMAGES.map((element, index) => (
            <div key={element.id}>
              <a href={element.href}>
                <img 
                  key={element.id} 
                  src={element.src}
                  width="600vw"
                  style={{marginBottom: "2%",}}
                /> 
              </a>
              <p style={{fontSize: "140%", fontWeight: "500", textAlign: "center", marginBottom: '8%'}}>{t(`tourList.${index}.title`)}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%"}}>
        <p style={{marginBottom: "3%", fontSize: "130%"}}>{t('text')}</p>
        <div>
        </div>
        <div>
          <p style={{textAlign: "center", fontSize: "180%", fontWeight: "500", marginBottom: "3%"}}>{t('subtitle1')}</p>
          <p style={{textAlign: "center", marginBottom: "3%", fontSize: "140%", fontWeight: "500"}}>{t('includes')}</p>
          <ul style={{marginLeft: "2%", marginBottom: "3%", fontSize: "140%", columns: "3", gap: "20%", listStyleType: "disc"}}>
            <li>{t('li1')}</li>
            <li>{t('li2')}</li>
            <li>{t('li3')}</li>
            <li>{t('li4')}</li>
            <li>{t('li5')}</li>
            <li>{t('li6')}</li>
            <li>{t('li7')}</li>
            <li>{t('li8')}</li>
            <li>{t('li9')}</li>
          </ul>
          <p style={{textAlign: "center", marginBottom: "3%", fontWeight: "500", fontSize: "160%"}}>{t('subtitle2')}</p>
          <ul style={{margin: "2%", fontSize: "140%", listStyleType: "disc", columns: "1"}}>
            <li>{t('li10')}</li>
            <li>{t('li11')}</li>
            <li>{t('li12')}</li>
            <li>{t('li13')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tours