import {useTranslations} from 'next-intl';
import EventContainer from '@/components/UI/EventContainer';

const Events = () => {
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
        <p style={{textAlign: "center", marginBottom: "3%", fontSize: "200%", fontWeight: "bold"}}>{t('title')}</p>
      </div>
      <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "5%"}}>
        <EventContainer/>
      </div>
    </div>
  )
}

export default Events