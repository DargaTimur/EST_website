import {useTranslations} from 'next-intl';
import EventContainer from '@/components/UI/EventContainer';
import {unstable_setRequestLocale} from 'next-intl/server';

const Events = ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Events');
  return (
    <div>
      <div>
        <div style={{marginBottom: "3%"}}> 
          <img
            src='/3-3.jpg'
            alt='Name'
            width="100%"
          />
        </div>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white'}}>
          <p style={{textAlign: "center", marginBottom: "3%", fontSize: "400%", fontWeight: "500"}}>{t('title')}</p>
        </div>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "5%"}}>
        <EventContainer/>
      </div>
    </div>
  )
}

export default Events