import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import '../../nextButton.css';
import {unstable_setRequestLocale} from 'next-intl/server';

const EagleFestival = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Events');
  return (
    <div className='visibility_area'>
      <div className='image_container'>
        <div className='image_container_image'>
          <img
            src='/20.jpg'
            style={{marginBottom: "3%"}}
          />
        </div>
      </div>
      <div className='main_container'>
        <div className='events_margins'> 
          <p className='header_container'>{t('eagle-festival.title')}</p>
        </div>
        <div>
          <p className='text_container' style={{textAlign: 'justify'}}>{t('eagle-festival.text')}</p>
        </div>
        <div className='text_container'>
          <table>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '70%' }} />
            </colgroup>
            <thead>
              <tr>
                <td>{t('eagle-festival.td1')}</td>
                <td>{t('eagle-festival.tdtext1')}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('eagle-festival.td2')}</td>
                <td>{t('eagle-festival.tdtext2')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('eagle-festival.td3')}</td>
                <td>{t('eagle-festival.tdtext3')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('eagle-festival.td4')}</td>
                <td>{t('eagle-festival.tdtext4')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='events_button_btn'> 
        <Link href={'./camel'}>
          <button className='events_button'>
            {t('previous')}
          </button>
        </Link>
        <Link href={'./ice'}>
          <button className='events_button'> 
            {t('next')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default EagleFestival