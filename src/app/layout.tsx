import { Raleway } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { AdminButton } from '@/shared/components/AdminButton';
import Header from '@/shared/components/Header';
import AnimatedDrumButton from '@/shared/components/AnimatedDrumButton';
import YandexMetrika from '@/shared/components/YandexMetrika';

const raleway = Raleway({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
    <html lang="ru">
      <body className={`${raleway.className}`}>
        <Header />
        <main>{children}</main>
        {/*<AdminButton />*/}
        <AnimatedDrumButton />
        <YandexMetrika />
      </body>
    </html>
  );
}
