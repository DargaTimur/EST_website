import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import {getTranslations} from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';

const City = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('City');
  return (
    <div className='tours_and_events_margin_top'>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/mapcity.png'
              alt='Route'
            />
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/cit0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className='tours_image_container tours_page_main_header'>{t('picture_text')}</p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day1')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day1text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'> </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')}</p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule1-1')}</li>
                  <li>{t('schedule1-2')}</li>
                  <li>{t('schedule1-3')}</li>
                  <li>{t('schedule1-4')}</li>
                  <li>{t('schedule1-5')}</li>
                  <li>{t('schedule1-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/cit1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day2')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day2text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'>{t('attention')}</p>
                <p className='tour_left_column_text_sec'> {t('attention_desc1')} <br/>{t('attention_desc2')}  <br/>{t('attention_desc3')} </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')} </p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule2-1')}</li>
                  <li>{t('schedule2-2')}</li>
                  <li>{t('schedule2-3')}</li>
                  <li>{t('schedule2-4')}</li>
                  <li>{t('schedule2-5')}</li>
                  <li>{t('schedule2-6')}</li>
                  <li>{t('schedule2-7')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "5%"}}> {/*удалить отсуп снизу*/}
          <div style={{position: 'relative'}}>
            <img
              src='/cit2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className='tour_left_column_header'>{t('day3')}</p>
              </div>
              <div>
                <p className='tour_left_column_text'>{t('day3text')}</p>
              </div>
              <div>
                <p className='tour_left_column_subheader'></p>
                <p className='tour_left_column_text_sec'></p>
                <div style={{marginTop: "2%"}}>
                  <Link href="/contacts/#targetBlock" className='myButton '>
                    {t('button')}
                  </Link>
                </div>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className='tour_left_column_header'>{t('program')} </p>
              </div>
              <div className='tour_right_column_text'>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('schedule3-1')}</li>
                  <li>{t('schedule3-2')}</li>
                  <li>{t('schedule3-3')}</li>
                  <li>{t('schedule3-4')}</li>
                  <li>{t('schedule3-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className='tour_right_column_icons_text'>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon1')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>3g/4g
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon4')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon5')}
                </p>
                <p className='tour_right_column_icons_text'>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className='tour_right_column_icons'/>{t('icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City