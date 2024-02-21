import { useLocale } from 'next-intl';
import React, { ChangeEvent } from 'react';
import {useTranslations} from 'next-intl';

export default function LocalSwitcher() {
  const t = useTranslations('Index');
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    location.href = `/${nextLocale}`;
  };

  return (
    <select 
      onChange={onSelectChange} 
      defaultValue={localActive} 
      style={{ backgroundColor: "transparent", border:"none", outline: "none", fontSize: "106%", fontWeight: "500", transition: "color 0.4s ease"}}
    >
      <option style={{fontSize: "106%", fontWeight: "500"}} value="ko">{t('language2')}</option>
      <option style={{fontSize: "106%", fontWeight: "500"}} value="en">{t('language1')}</option>
    </select>
  )
}
