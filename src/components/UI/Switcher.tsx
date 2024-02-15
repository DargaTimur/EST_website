//"use client";

import { useLocale } from 'next-intl';
import React, { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    location.href = `/${nextLocale}`;
  };

  return (
    <select
      onChange={onSelectChange}
      defaultValue={localActive}
      style={{ backgroundColor: "transparent", border:"none", outline: "none", fontSize: "150%", color: "#2775f2"}}
    >
      <option value="ko">Korean</option>
      <option value="en">English</option>
    </select>
  )
}
