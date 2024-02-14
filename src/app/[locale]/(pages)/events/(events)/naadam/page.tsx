import {useTranslations} from 'next-intl';

const Naadam = () => {
  const t = useTranslations('Events')
  return (
    <div>
      <div style={{width: "1903px", height: "950px", overflow: "hidden", textAlign: "center"}}>
        <div style={{width: "1903px", height: "100vh", objectFit: "cover", position: "absolute", top: "0", left: "0", zIndex: "-1", overflow: "hidden"}}>
          <img
                src='/21.jpg'
                style={{marginBottom: "3%", marginTop: "-1%"}}
          />
        </div>
      </div>
      <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "1%", marginBottom: "3%"}}>
        <div style={{marginBottom: "3%"}}> {/*For image and descr*/}
          <p style={{fontSize: "200%", fontWeight: "bold", textAlign: "center"}}>{t('naadam-festival.title')}</p>
        </div>
        <div>
          <p style={{fontSize: "140%", marginBottom: "3%"}}>{t('naadam-festival.text')}</p>
        </div>
        <div> {/*For table*/}
          <table>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '70%' }} />
            </colgroup>
            <thead>
              <tr>
                <td>{t('naadam-festival.td1')}</td>
                <td>{t('naadam-festival.tdtext1')}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('naadam-festival.td2')}</td>
                <td>{t('naadam-festival.tdtext2')}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>{t('naadam-festival.td3')}</td>
                <td>{t('naadam-festival.tdtext3')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Naadam