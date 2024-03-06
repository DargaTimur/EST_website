import {getTranslations} from 'next-intl/server';
import InputForm from '@/components/UI/InputForm';
import {unstable_setRequestLocale} from 'next-intl/server';

const Contacts = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Contacts');
  return (
    <div >
      <div style={{width: "100%"}}>
        <img 
          src='/2-2.jpg'
          alt='Contacts'
          width='100%'
          height='auto'
        />
        <div className='header_container_for_picture'>
          <h1 className='header_on_picture'>{t('title')}</h1>
        </div>
      </div>
      <div style={{width: "100%", height: "100%", textAlign: "center"}}> {/*Endehee*/}
        <div style={{width: "100%", height: "100%"}}>
          <div className='contact_plank'>
            <div style={{padding: "2%"}}>
              <img
                src='/phone.png'
                alt='phone'
                height='auto'
                className='contact_paddings'
              />
              <a href={`tel:${+976-99902202}`} style={{textDecoration: "none"}}>+976-99902202<br /></a>
              <a href={`tel:${+976-80303997}`} style={{textDecoration: "none"}}>+976-80303997</a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/email.png'
                alt='mail'
                height='auto'
                className='contact_paddings'
              />
              <a href={`mailto:${'eternalskytour@gmail.com'}`} style={{textDecoration: "none"}}>saibaitour@gmail.com<br /></a>
              <a href={`mailto:${'eternalskytour@naver.com'}`} style={{textDecoration: "none"}}>saibaitour@naver.com<br /></a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/location.png'
                alt='location'
                height='auto'
                className='contact_paddings'
              />
              <a href={`https://www.google.com/maps?q=${encodeURIComponent('47.909307, 106.899953')}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>{t('fourth')}</a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/post.png'
                alt='post'
                height='auto'
                className='contact_paddings'
              />
              <p>14253, Narnii Road, 24-32,<br />Ulaanbaatar, Mongolia</p>
            </div>
          </div>
        </div>
      </div> {/*Ene hurter*/}
      <div className='visibility_area'>
        <div>
          <h2 className='contact_subheader'>{t('header')}</h2>
        </div>
        <div >
          <p className='contact_text'>{t('text')}</p>
        </div>
      </div>
      <div id="targetBlock" className='visibility_area'>
        <h2 className='contact_subheader'>{t('second')}</h2>
        <p className='contact_text' style={{textAlign: "center"}}>{t('third')}</p>
        <div className='visibility_area'>
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