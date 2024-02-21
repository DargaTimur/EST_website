import Slider from "@/components/UI/Slider";
import Festivals from "@/components/UI/Festivals";
import Trips from "@/components/UI/Trips";
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <main>
      <div>
        <div style={{width: "100%", height: "100vh", objectFit: "cover", overflow: "hidden", textAlign: "center"}}>
          <div style={{width: "100%", height: "100%", position: "absolute", top: "0", left: "0", overflow: "hidden"}}>
            <Slider />
          </div>
          <div>
          </div>
          <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <p style={{fontSize: '140%', fontWeight: '500', color: "#fff"}}>{t('title')} <br />{t('subtitle')}</p>
            <Link href="/contacts/#targetBlock" style={{fontSize: "140%", color: "#000", fontWeight: "500"}}>
              {t('link')}
            </Link>
          </div>
        </div>
        <div style={{marginLeft: "15%", marginRight: "15%", color: "#000"}}>
          <p style={{textAlign: "center", fontSize: "200%", fontWeight: "650", marginTop: "3%", marginBottom: "3%"}}>{t('header')}</p>
          <div>
            <Festivals/>
          </div>
          <div>
            <Trips/>
          </div>
        </div>
      </div>
    </main>
  );
}
