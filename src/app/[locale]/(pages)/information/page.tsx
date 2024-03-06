import {getTranslations} from 'next-intl/server';
import OptionsContainer from '@/components/UI/OptionsContainer'
import {unstable_setRequestLocale} from 'next-intl/server';

const Information = async ({params: {locale}}: {params: {locale: string}}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Information');
  return (
    <div className='visibility_area' > 
      <div className='information_margin'>
        <p className='information_main_header'>{t('title')}</p>
        <div >
          <img
            src='/mongolia.jpg'
            style={{ margin: "0 auto", display: "block"}}
          />
        </div>
        <div>
          <p className='information_second_header'>{t('subtitle')}</p>
          <p className='information_desc'>{t('text')}</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src={'/terelj.jpg'}
            alt='picture'
            width='100%'
            style={{marginBottom: "2.7%"}}
          />
          <div>
            <div className='information_space'>
              <img
                src={'/cousine1.jpg'}
                alt='food'
                width='50%'
              />
              <img
                src={'/cousine2.jpg'}
                alt='meal'
                width='50%'
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>Mongolian cousine</p>
              <p className='information_desc'>Indulge in the exquisite flavors of Mongolian cuisine, a symphony of flavors rooted in the bounties of the land. From savory meat delicacies and creamy dairy wonders to the infusion of aromatic herbs and luscious berries, our cuisine paints a vivid portrait of tradition and nature's abundance. Explore the tapestry of Mongolian gastronomy, where each bite is a harmonious blend of local ingredients, echoing the rich cultural heritage. Immerse yourself in the diverse palette of our culinary offerings, a journey that unveils the essence of Mongolia's culinary treasures.</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src={'/culture.jpg'}
                alt='song'
                width='100%'
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>Mongolian culture</p>
              <p className='information_desc'>Embark on an enchanting journey to Mongolia, a hidden gem among travel destinations. This extraordinary land beckons with its untouched beauty and unparalleled safety. Picture vast expanses of open landscapes, where azure skies stretch over pristine forests, deserts, and crystalline rivers. Experience the genuine hospitality of nomadic communities, where permanent dwellings are scarce, and the land resembles one vast National Park. Mongolia, a haven for outdoor enthusiasts, reveals a rich history dating back to the legendary Mongol Empire of Genghis Khan. Brace yourself for an adventure filled with majestic horses, nomadic traditions, and the endless embrace of the blue sky. Uncover the allure of Mongolia - a land waiting to captivate your heart.</p>
            </div>
          </div>
          <div>
            <div className='information_space'>
              <img
                src={'/kashmere.jpg'}
                alt=''
                width='100%'
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className='information_second_header' style={{marginBottom: "2%"}}>Mongolian kashmere</p>
              <p className='information_desc'>Explore the epitome of luxury with Mongolia's finest cashmere, renowned for its exquisite quality and unmatched softness. Immerse yourself in the world of premium leather goods, where Mongolian craftsmanship takes center stage. From buttery-soft leather accessories to durable and stylish products, Mongolia showcases the artistry of its skilled artisans. Indulge in the allure of cashmere and leather, a testament to Mongolia's commitment to producing the highest quality and most refined goods, offering you an unparalleled blend of comfort and sophistication. Discover the touch of elegance that only the best Mongolian cashmere and leather goods can provide.</p>
            </div>
          </div>
        </div>
        <div>
          <p className='information_option'>{t('subtitle2')}</p>
          <OptionsContainer/>
        </div>
      </div>
    </div>
  )
}

export default Information
