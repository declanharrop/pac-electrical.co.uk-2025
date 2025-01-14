'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AllCaseStudiesPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/case-studies/all');
  }, [router]);
  return null;
}
