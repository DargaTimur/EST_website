import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';

const About = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('About');
  return (
    <div>
      <div>
        <img
          src='/bt0.jpg'
          alt='Name'
          width='100%'
        />
        <div className='header_container_for_picture'>
          <h1 className='header_on_picture'>{t('title')}</h1>
        </div>
      </div>
      <div className='visibility_area'>
        <p className='about_titles'>{t('subtitle')}</p>
        <div style={{justifyContent: "center", textAlign: "justify"}}>
          <p className='about_text'>{t('text')}</p>
          <div>
            <h2 style={{marginBottom: "2%"}} className='about_titles'>{t('vehicle')}</h2>
            <div className='about_true_positioning'>
              <div className='about_chess_text_container'>
                <h2 className='about_chess_header'>UAZ</h2>
                <p className='about_text'>{t('veh_desc1')}</p>
              </div>
              <div className='about_chess_image_container'>
                <img
                  src='/uaz.jpg'
                  className='about_image_styles'
                  alt="Заполняющее изображение"
                />
              </div>
            </div>
            <div className='about_true_positioning'>
              <div className='about_chess_image_container'>
                <img
                  src='/hyndai.jpg'
                  className='about_image_styles'
                  alt="Заполняющее изображение"
                />
              </div>
              <div className='about_chess_text_container'>
                <h2 className='about_chess_header'>{t('veh_header2')}</h2>
                <p className='about_text'>{t('veh_desc2')}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{marginBottom: "2%"}} className='about_titles'>{t('goals_header')}</h2>
          </div>
          <div className='about_true_positioning'>
            <div className='about_chess_text_container'>
              <h2 className='about_chess_header'>{t('mission')}</h2>
              <ul className='about_mission_text' style={{listStyleType: "disc"}}>
                <li>{t(`mission_desc.${0}.title`)}</li>
                <li>{t(`mission_desc.${1}.title`)}</li>
                <li>{t(`mission_desc.${2}.title`)}</li>
                <li>{t(`mission_desc.${3}.title`)}</li>
                <li>{t(`mission_desc.${4}.title`)}</li>
              </ul>
            </div>
            <div className='about_chess_image_container'>
              <img
                src='/bt1.jpg'
                className='about_image_styles'
                alt="Заполняющее изображение"
              />
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='about_chess_image_container'>
              <img
                src='/bt3.jpg'
                className='about_image_styles'
                alt="Заполняющее изображение"
              />
            </div>
            <div className='about_chess_text_container'>
              <h2 className='about_chess_header'>{t('team')}</h2>
              <p className='about_mission_text'>{t('team_desc')}</p>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='about_chess_text_container'>
              <h2 className='about_chess_header'>{t('staff')}</h2>
              <p className='about_mission_text'>{t('staff_desc')}</p>
            </div>
            <div className='about_chess_image_container'>
              <img
                src='/staff.jpg'
                className='about_image_styles'
                alt="Заполняющее изображение"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

