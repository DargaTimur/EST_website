import FooterInput from "./UI/FooterInput"
import {useTranslations} from 'next-intl';
import { links } from "@/constants";
import Link from "next/link"

const Footer = () => {
  const t = useTranslations('Footer');



  return (
    <footer style={{ display: 'flex', backgroundColor: "#ebeef5", color: "#000" }}>
      <div style={{ flex: 1, padding: '2%'}}>
        {/* Содержимое первой части футера */}
        <div style={{marginLeft: "38%"}}>
          <p style={{fontSize: "160%", fontWeight: "bolder", marginBottom: "3%"}}>
            {t('title1')}
          </p>
          <div style={{fontSize: "120%"}}>
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
              eternalskytour@gmail.com<br />
              <strong style={{opacity: "0"}}>{t('mail')} </strong>
              eternalskytour@naver.com<br />
            </p>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '2%' }}>
        {/* Содержимое второй части футера */}
        <div style={{marginLeft: "30%"}}>
          <p style={{fontSize: "160%", fontWeight: "bolder", marginBottom: "3%"}}>
          {t('title2')}
          </p>
          <div>
            {links.map((link, index) => (
              <li key={link.key} style={{ display: 'block', marginBottom: "2%" }}>
                <Link href={link.href} key={link.key} style={{fontSize: "120%", textDecoration: "none", color: "#000"}} >
                  {t(`links.${index}.title`)}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div style={{ flex: 1, paddingTop: '2%', marginRight: '6%' }}>
        {/* Содержимое третьей части футера */}
        <div style={{marginLeft: "20%"}}>
          <p style={{fontSize: "160%", fontWeight: "bolder", marginBottom: "1%"}}> 
          {t('title3')}
          </p>
        </div>
        <div style={{gap: "2%", display: "flex", width: "80%", marginLeft: "2%"}}>
          <div>
            <FooterInput/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

