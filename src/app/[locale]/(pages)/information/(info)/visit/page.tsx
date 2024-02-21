import {useTranslations} from 'next-intl';
import SeasonsSlider from '@/components/UI/SeasonsSlider';

const Visit = () => {
  const t = useTranslations('Information');
  return (
    <div>
      <div style={{width: "100%", height: "100vh", objectFit: "cover", textAlign: "center"}}>
        <div style={{width: "100%", height: "100%", position: "absolute", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>
          <SeasonsSlider  
            winter={t('seasons.title1')}
            winterDescription1={t('seasons.description1')}
            winterDescription2={t('seasons.description1-1')}
            spring={t('seasons.title2')}
            springDescription1={t('seasons.description2')}
            springDescription2={t('seasons.description2-1')}
            summer={t('seasons.title3')}
            summerDescription1={t('seasons.description3')}
            summerDescription2={t('seasons.description3-1')}
            autumn={t('seasons.title4')}
            autumnDescription1={t('seasons.description4')}
            autumnDescription2={t('seasons.description4-1')}
          />
        </div>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <p style={{fontSize: '400%', fontWeight: 'bold', color: "#fff"}}>{t('visit')}</p>
        </div>
      </div>
    </div>
  )
}

export default Visit  