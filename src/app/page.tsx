'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useLanguage } from '@/hooks/useLanguage';

export default function RootPage() {
  const router = useRouter();
  // const { language } = useLanguage();

  useEffect(() => {
    router.replace(`/home`);
  }, [router]);

  return null;
}
