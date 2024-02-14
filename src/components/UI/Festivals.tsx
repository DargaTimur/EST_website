import {useTranslations} from 'next-intl';
import Image from 'next/image'
import { FESTIVALS } from '@/constants'
import Link from "next/link";

const Festivals = () => {
  const t = useTranslations('Events');
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "3%"}}>
      {FESTIVALS.map((element, index) => (
        <div key={index} style={{ marginBottom: "5%"}}>
          <a href={element.href}>
            <Image
              src={element.src}
              alt=''
              width={400}
              height={300}
              style={{ border: "1px solid #000", padding: "1%" }}
            />
          </a>
          <div style={{textAlign: "center"}}>
            <Link href={element.href} style={{margin: "4%", fontSize: "140%", outline: "none", textDecoration: "none", color: "black", fontWeight: "bolder"}}>
              {t(`festivals.${index}.title`)}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Festivals