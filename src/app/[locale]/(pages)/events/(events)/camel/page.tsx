import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import '../../nextButton.css';
import {unstable_setRequestLocale} from 'next-intl/server';

const CamelFestival = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Events');
  return (
    <div className='container'>
      <div className='image_container'>
        <div className='image_container_image'>
          <img
                src='/22.jpg'
                style={{marginBottom: "3%"}}
          /> 
        </div>
      </div>
      <div className='main_container' style={{marginLeft: "15%", marginRight: "15%", marginTop: "1%"}}>
        <div style={{marginBottom: "3%"}}> {/*For image and descr*/}
          <p className='header_container'>{t('camel-festival.title')}</p>
        </div>
        <div>
          <p className='text_container' style={{textAlign: 'justify'}}>{t('camel-festival.text')}</p>
        </div>
        <div className='text_container'> {/*For table*/}
          <table>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '70%' }} />
            </colgroup>
            <thead>
              <tr>
                <td>{t('camel-festival.td1')}</td>
                <td>{t('camel-festival.tdtext1')}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('camel-festival.td2')}</td>
                <td>{t('camel-festival.tdtext2')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('camel-festival.td3')}</td>
                <td>{t('camel-festival.tdtext3')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('camel-festival.td4')}</td>
                <td>{t('camel-festival.tdtext4')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('camel-festival.td5')}</td>
                <td>{t('camel-festival.tdtext5')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='events_button_btn'> 
        <Link href={'./tsagaansar'}>
          <button className='events_button'>
            {t('previous')}
          </button>
        </Link>
        <Link href={'./eagle'}>
          <button className='events_button'> 
            {t('next')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CamelFestival