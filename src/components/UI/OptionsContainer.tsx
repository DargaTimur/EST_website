import {useTranslations} from 'next-intl';
import Image from 'next/image'
import { OPTIONS } from '@/constants'

const OptionsContainer = () => {
  const t = useTranslations('Information')
  return (
    <div style={{marginBottom: "5%"}}>
      <div style={{margin: '1%', padding: "1%"}}>
        {OPTIONS.map((element, index) => (
          <div key={index} style={{ margin: '1%', padding: "1%"}}>
            <div style={{display: "Flex", marginBottom: "3%"}}>
              <Image
                src={element.src}
                alt=''
                width={450}
                height={280}
              />
              <div style={{marginLeft: "1.5%"}}>
                <p style={{marginBottom: "2%", marginLeft: "2%", fontSize: "180%", fontWeight: "bold"}}>{t(`transport.${index}.title`)}</p>
                <p style={{marginBottom: "1%", marginLeft: "3%", marginRight: "3%", fontSize: "140%"}}>{t(`transport.${index}.description`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OptionsContainer