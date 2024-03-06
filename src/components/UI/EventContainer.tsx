import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { EVENTS } from '@/constants';

const EventContainer = () => {
  const t = useTranslations('Events');
  return (
    <div >
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {EVENTS.map((element, index) => (
          <div key={index} style={{display: "flex", marginBottom: "3%", margin: '1%', padding: "1%"}}>
            <a href={element.href} style={{ display: "block", width: "50%", position: "relative" }}>
              <img
                src={element.src}
                alt='images'
                width='100%'
                height='auto'
              />
            </a>
            <div style={{ width: "50%" }}>
              <p className='event_block_header'>{t(`event-container.${index}.title`)}</p>
              <p className='event_block_desc'>
                {t(`event-container.${index}.description`)}
                <a href={element.href} style={{color: "#4d5df0"}}> {t('eventContainer')}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventContainer