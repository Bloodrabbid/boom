import { Raleway } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { AdminButton } from '@/shared/components/AdminButton';
import Header from '@/shared/components/Header';
import AnimatedDrumButton from '@/components/AnimatedDrumButton';
import YandexMetrika from '@/components/YandexMetrika';

const raleway = Raleway({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'БУМ - Студия музыки',
  description: 'Музыкальная школа в Хабаровске',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${raleway.variable}`}>
      <body className={`${raleway.className} font-sans`}>
        <Header />
        <main>{children}</main>
        {/*<AdminButton />*/}
        <AnimatedDrumButton />
        <YandexMetrika />
      </body>
    </html>
  );
}
