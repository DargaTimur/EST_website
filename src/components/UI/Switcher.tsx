//"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.push(`/${nextLocale}`);
    });
  };

  return (
    <select 
      onChange={onSelectChange} 
      defaultValue={localActive} 
      disabled={isPending} 
      style={{ backgroundColor: "transparent", border:"none", outline: "none", fontSize: "150%", color: "#2775f2"}}
    >
      <option value="ko">Korean</option>
      <option value="en">English</option>
    </select>
  )
}
