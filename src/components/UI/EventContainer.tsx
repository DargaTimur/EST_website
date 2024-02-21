import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { EVENTS } from '@/constants';

const EventContainer = () => {
  const t = useTranslations('Events');
  return (
    <div>
      <div style={{margin: '1%', padding: "1%"}}>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {EVENTS.map((element, index) => (
            <div key={index} style={{display: "flex", marginBottom: "3%", margin: '1%', padding: "1%"}}>
              <a href={element.href} style={{ display: "block", width: "50%", position: "relative" }}>
                <div style={{ position: "relative", paddingBottom: "60%" }}>
                  <Image
                    src={element.src}
                    alt=''
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </a>
              <div style={{ width: "50%" }}>
                <p style={{margin: "3%", marginTop: "0", fontSize: "180%", fontWeight: "500"}}>{t(`event-container.${index}.title`)}</p>
                <p style={{margin: "3%", fontSize: "140%"}}>
                  {t(`event-container.${index}.description`)}
                  <a href={element.href} style={{color: "#4d5df0"}}> {t('eventContainer')}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventContainer