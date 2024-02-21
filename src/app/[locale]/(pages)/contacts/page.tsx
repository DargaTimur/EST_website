import {useTranslations} from 'next-intl';
import InputForm from '@/components/UI/InputForm';

const Contacts = () => {
  const t = useTranslations('Contacts');
  return (
    <div>
      <div style={{width: "100%", height: "100vh", overflow: "hidden", textAlign: "center"}}>
        <div style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: "0", left: "0", zIndex: "-1", overflow: "hidden"}}>
          <img 
            src='/3.jpg'
          />
          <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white'}}>
            <h1 style={{fontSize: '400%', fontWeight: '630'}}>{t('title')}</h1>
          </div>
        </div>
      </div>
      <div style={{width: "1903px", height: "100%", textAlign: "center"}}>
        <div style={{width: "1903px", height: "100%"}}>
          <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", fontSize: "140%", textAlign: "center", backgroundColor: "#f5f5fa", paddingTop: "2%", paddingBottom: "2%"}}>
            <div style={{padding: "3%"}}>
              <img
                src='/phone.png'
                style={{paddingLeft: "45%", marginBottom: "5%"}}
              />
              <a href={`tel:${+976-99902202}`} style={{textDecoration: "none"}}>+976-99902202<br /></a>
              <a href={`tel:${+976-80303997}`} style={{textDecoration: "none"}}>+976-80303997</a>
            </div>
            <div style={{padding: "3%"}}>
              <img
                src='/email.png'
                style={{paddingLeft: "45%", marginBottom: "5%"}}
              />
              <a href={`mailto:${'eternalskytour@gmail.com'}`} style={{textDecoration: "none"}}>eternalskytour@gmail.com<br /></a>
              <a href={`mailto:${'eternalskytour@naver.com'}`} style={{textDecoration: "none"}}>eternalskytour@naver.com<br /></a>
            </div>
            <div style={{padding: "3%"}}>
              <img
                src='/location.png'
                style={{paddingLeft: "45%", marginBottom: "5%"}}
              />
              <a href={`https://www.google.com/maps?q=${encodeURIComponent('47.909307, 106.899953')}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>{t('fourth')}</a>
            </div>
            <div style={{padding: "3%"}}>
              <img
                src='/post.png'
                style={{paddingLeft: "45%", marginBottom: "5%"}}
              />
              <p>14253, Narnii Road, 24-32,<br />Ulaanbaatar, Mongolia</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginLeft: "10%", marginRight: "10%", marginBottom: "3%", marginTop: "3%"}}>
        <div style={{textAlign: "center"}}>
          <p style={{fontSize: "200%", fontWeight: "bolder"}}>{t('header')}</p>
        </div>
        <div style={{marginLeft: "15%", marginRight: "15%", marginBottom: "3%"}}>
          <p style={{fontSize: "140%"}}>{t('text')}</p>
        </div>
      </div>
      <div id="targetBlock" style={{ marginLeft: "15%", marginRight: "15%", marginTop: "4%", marginBottom: "4%"}}>
        <p style={{fontSize: "200%", fontWeight: "bolder", textAlign: "center"}}>{t('second')}</p>
        <p style={{fontSize: "120%", textAlign: "center", marginBottom: "3%"}}>{t('third')}</p>
        <div style={{justifyContent: "center", marginLeft: "20%", marginRight: "20%", marginBottom: "3%"}}>
          <InputForm
            formHeader={t('formHeader')}
            formTitle={t('name')}
            formPlaceholder1={t('first')}
            formPlaceholder2={t('last')}
            mail={t('email')}
            countryTitle={t('country')}
            tourTitle={t('tour')}
            numberTitle={t('number')}
            messageTitle={t('message')}
            agreeTitle={t('agree')}
            buttonTitle={t('button')}
          />
        </div>
      </div>
    </div>
  )
}

export default Contacts