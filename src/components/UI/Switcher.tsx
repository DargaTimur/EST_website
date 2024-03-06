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
      className='switcher_btn'
    >
      <option className='switcher_change_btn' value="ko">{t('language2')}</option>
      <option className='switcher_change_btn' value="en">{t('language1')}</option>
    </select>
  )
}
