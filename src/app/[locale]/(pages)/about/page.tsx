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
        <p className='about_titles'>SAIBAI TOUR</p>
        <div style={{justifyContent: "center", textAlign: "justify"}}>
          <p className='about_text'>{t('text')}</p>
          <div>
            <h2 style={{marginBottom: "2%"}} className='about_titles'>OUR VEHICLES</h2>
            <div className='about_true_positioning'>
              <div className='about_chess_text_container'>
                <h2 className='about_chess_header'>UAZ</h2>
                <p className='about_text'>Primarily, our tours feature the use of UAZ 452, robust Russian minivans with 4WD capability, ensuring reliable and powerful transportation in remote countryside areas. Ideal for groups of up to 7 passengers, these Russian vans boast a spacious cabin and a sizable trunk, providing the convenience of carrying ample luggage. Our experienced drivers are well-acquainted with these vehicles, ensuring prompt assistance in case of breakdowns. Travel confidently with the reliability and versatility of UAZ minivans on your journey.</p>
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
                  src='/hyundai.jpg'
                  className='about_image_styles'
                  alt="Заполняющее изображение"
                />
              </div>
              <div className='about_chess_text_container'>
                <h2 className='about_chess_header'>HYUNDAI</h2>
                <p className='about_text'>Hyundai H-1, a 9-passenger microbus, is an excellent choice for travelers seeking both comfort and efficiency on their journey. Manufactured by Hyundai, these microbuses offer a smooth ride on uneven and unpaved roads in rural areas. While providing ample space for 9 passengers and their luggage, it's important to note that, similar to jeeps, repairs might be challenging in remote locations. Consider the Hyundai H-1 for a comfortable group travel experience.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{marginBottom: "2%"}} className='about_titles'>OUR GOALS</h2>
          </div>
          <div className='about_true_positioning'>
            <div className='about_chess_text_container'>
              <h2 className='about_chess_header'>OUR MISSION</h2>
              <ul className='about_mission_text' style={{listStyleType: "disc"}}>
                <li>Cooperates with local & global partners (as connecting local communities to global market & international businesses to micro-entrepreneurs)</li>
                <li>Deals with groups & FITs (in order maximize benefits to our clients and minimize impacts to environment we keep maximum number of parties up to 14pax in our adventure treks)</li>
                <li>Offers tailor made programs & set itineraries ( there is always flexibilities in our tours even those operate according to set itineraries )</li>
                <li>Sells exclusives & budgets (we value all our tours with luxury content and authentic experience at best and reasonable prices)</li>
                <li>Generates happy and satisfied clients (we do our best efforts to make our clients enjoyed with the services as getting over their expectations. In serving our clients before, during and after a trip we strive to build a complete satisfaction)</li>
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
              <h2 className='about_chess_header'>SKILLED TEAM</h2>
              <p className='about_mission_text'>As a service orientated company, we have 16 permanent staff employ full time at the office and over 300 personnel throughout the country who employ during the main travel season. All our staff are well trained, in-depth experienced and possess good knowledge for local areas and host & guest's expectations. Our managers who are responsible for different language speaking markets as English, Korean, German, Chinese, Russian and Japanese, communicate efficiently with our partners, speedily creating and helping to plan custom-made itineraries of unique travel products due to their clients' wishes, and offering at most reasonable and attractive net prices. Guides and local tour leaders are the most important element of safe and enjoyable adventures. Our guides/tour leaders speak English, Korean, German, French, Italian, Spanish, Russian, Japanese and Chinese languages.</p>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='about_chess_text_container'>
              <h2 className='about_chess_header'>OFFICE STAFF</h2>
              <p className='about_mission_text'>Saibai Tour is a specialist tour operator offering the best holidays in Mongolia. There are 4 permanent staff employes full time at the office. Saibai Tour has own network of an extensive supply chain operating across the country, made up of many different stakeholders such as nomadic communities, multilingual guides, tourist camps,  transportation providers, restaurants, hoteliers, entertainment and leisure enterprises. Our attention to detail and personal approach will make your trip unforgettable.  We are always on call to assist you with any requests or questions that you may have. All our staff are well trained, in-depth experienced and possess good knowledge for local areas and host & guest's expectations.</p>
            </div>
            <div className='about_chess_image_container'>
              <img
                src='/bt4.jpg'
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

