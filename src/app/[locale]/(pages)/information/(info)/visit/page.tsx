import {useTranslations} from 'next-intl';
import SeasonsSlider from '@/components/UI/SeasonsSlider';

const Visit = () => {
  const t = useTranslations('Information');
  return (
    <div>
      <div style={{width: "100%", height: "100vh", objectFit: "cover", textAlign: "center"}}>
        <div style={{width: "100%", height: "100%", position: "absolute", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>
          <SeasonsSlider />
        </div>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <p style={{fontSize: '400%', fontWeight: 'bold', color: "#fff"}}>{t('visit')}</p>
        </div>
      </div>
    </div>
  )
}

export default Visit  