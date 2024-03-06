import {useTranslations} from 'next-intl';
import { OPTIONS } from '@/constants';

const OptionsContainer = () => {
  const t = useTranslations('Information')
  return (
    <div style={{marginBottom: "5%"}}>
      <div >
        {OPTIONS.map((element, index) => (
          <div key={index}>
            <div style={{display: "Flex", marginBottom: "3%"}}>
              <img
                src={element.src}
                alt='options'
                width='40%'
                height='auto%'
              />
              <div style={{marginLeft: "1.5%", textAlign: 'justify'}}>
                <p className='options_title'>{t(`transport.${index}.title`)}</p>
                <p className='options_text'>{t(`transport.${index}.description`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OptionsContainer