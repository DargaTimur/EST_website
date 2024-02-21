import { TOURS_IMAGES } from '@/constants'
import {useTranslations} from 'next-intl';
import Link from "next/link";

const Trips = () => {
  const t = useTranslations('Tours');
  return (
    <div >
      <p style={{fontSize: "200%", fontWeight: "650", display: "flex", justifyContent: "center", marginBottom: "3%"}}>
        {t('title')}
      </p>
      <div style={{display: "flex", flexWrap: "wrap", gap: "3%", marginBottom: '8%'}}>
        {TOURS_IMAGES.map((element, index) => (
          <div key={element.id}>
            <a href={element.href}>
              <img 
                key={element.id} 
                src={element.src} 
                width={400} 
                height={300}
                style={{marginBottom: "3%",}}
              /> 
            </a>
            <div style={{textAlign: "center", marginBottom: "15%"}}>
              <Link href={element.href} style={{margin: "4%", fontSize: "130%", outline: "none", textDecoration: "none", color: "black", fontWeight: "500"}}>
                {t(`tourList.${index}.title`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trips