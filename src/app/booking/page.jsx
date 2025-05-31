'use client';
import dynamic from 'next/dynamic';

const BookingPageContent = dynamic(() => import('@/components/BookingPageContent'), {
  ssr: false,
});

export default function BookingPage() {
  return <BookingPageContent />;
}