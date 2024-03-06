import FooterInput from "./UI/FooterInput"
import {useTranslations} from 'next-intl';
import { links } from "@/constants";
import Link from "next/link"

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer style={{ backgroundColor: "#3d3d3b" }}>
      <div style={{display: 'flex', justifyContent: "space-between"}} className="visibility_area">
        <div style={{ flex: 1, paddingTop: '2%', paddingBottom: '2%'}}>
          {/* Содержимое первой части футера */}
          <div style={{color: "#fff"}} >
            <h2 className="footer_containers_title">{t('title1')}</h2>
            <div className="footer_containers_text">
              <p>
                Ulaanbaatar, Mongolia,<br />
                Sukhbaatar District, 5th Khoroo,<br />
                Narnii Road, 24-32, {t('address')}
              </p>
              <div>
                <strong >{t('phone')} </strong>
                +976-99902202<br />
                <strong style={{opacity: "0"}}>{t('phone')} </strong>
                +976-80303997<br />
              </div>
              <p style={{marginTop: "3%"}}>
                <strong>{t('telegram')} </strong>
                @ankhaa8899<br />
                <strong style={{opacity: "0"}}>{t('telegram')} </strong>
                @narangarav<br />
              </p>
              <p>
                <strong>{t('mail')} </strong>
                saibaitour@gmail.com<br />
                <strong style={{opacity: "0"}}>{t('mail')} </strong>
                saibaitour@naver.com<br />
              </p>
            </div>
          </div>
        </div>
        {/* Содержимое второй части футера */}
        <div style={{ flex: 1, paddingTop: '2%', paddingBottom: '2%', paddingLeft: '6%'}}>
          <div style={{color: "#fff"}}>
            <h2 className="footer_containers_title">{t('title2')}</h2>
            <div>
              {links.map((link, index) => (
                <li key={link.key} style={{ display: 'block', marginBottom: "2%" }}>
                  <Link href={link.href} key={link.key} style={{textDecoration: "none", color: "#fff"}} className="footer_containers_text">
                    {t(`links.${index}.title`)}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
        {/* Содержимое третьей части футера */}
        <div style={{ flex: 1, paddingTop: '2%'}}>
          <div style={{color: "#fff"}}>
            <h2 className="footer_containers_title">{t('title3')}</h2>
          </div>
          <div style={{gap: "2%", display: "flex", width: "100%"}}>
            <div>
              {/*<FooterInput/>*/}
              <FooterInput 
                title={t('ntitle')} 
                mail={t('ntitle1')} 
                messages={t('ntitle2')} 
                button={t('button')} 
                pl1={t('placeholder1')} 
                pl2={t('placeholder2')}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

