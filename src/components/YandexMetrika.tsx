'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    ym: Function;
  }
}

const YandexMetrika = () => {
  useEffect(() => {
    // Инициализация метрики после загрузки страницы
    const initYM = () => {
      setTimeout(() => {
        if (typeof window.ym === 'undefined') {
          return;
        }
        window.ym(94757018, 'init', {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          ecommerce: "dataLayer"
        });
      }, 2000);
    };

    initYM();
  }, []);

  return (
    <>
      <Script 
        strategy="afterInteractive"
        src="https://mc.yandex.ru/metrika/tag.js"
      />
      <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/94757018" 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt="" 
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrika; 