'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import Script from 'next/script';
import Image from 'next/image';
import DrumLogo from '@/shared/components/DrumLogo';
import Link from 'next/link';

// Типизация для Яндекс.Карт
declare global {
  interface Window {
    ymaps: any;
  }
}

const ContactsSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, phone });
    setName('');
    setPhone('');
  };

  // Функция инициализации карты
  const initMap = () => {
    if (!window.ymaps) return;

    const init = () => {
      try {
        const newMap = new window.ymaps.Map('map', {
          center: [48.472781, 135.061990],
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl'],
        });

        const placemark = new window.ymaps.Placemark(
            [48.472781, 135.061990],
            {
              hintContent: 'БУМ школа-студия музыки',
              balloonContent: 'БУМ школа-студия музыки<br>ул. Истоимина, 39а',
            },
            {
              preset: 'islands#redDotIcon',
            }
        );

        newMap.geoObjects.add(placemark);
        setMap(newMap);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    window.ymaps.ready(init);
  };

  // Эффект для инициализации и очистки карты
  useEffect(() => {
    if (mapLoaded && !map) {
      initMap();
    }
    return () => {
      if (map) {
        map.destroy();
        setMap(null);
      }
    };
  }, [mapLoaded, map]);

  return (
      <>
        {/* Подключение API Яндекс.Карт */}
        <Script
            src="https://api-maps.yandex.ru/2.1/?apikey=27943b66-293b-4461-909b-a70386e523a8&lang=ru_RU"
            onLoad={() => setMapLoaded(true)}
            strategy="lazyOnload"
        />

        <section className="bg-black pt-16 pb-8 relative overflow-hidden" id="contacts">
          {/* Декоративные ноты */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <Image
                src="/icons/note1.svg"
                alt="Musical note"
                width={53}
                height={53}
                className="absolute top-[15%] left-[5%] rotate-[-15deg]"
            />
            <Image
                src="/icons/note2.svg"
                alt="Musical note"
                width={40}
                height={40}
                className="absolute top-[25%] right-[8%] rotate-[25deg]"
            />
            <Image
                src="/icons/note3.svg"
                alt="Musical note"
                width={45}
                height={45}
                className="absolute bottom-[20%] left-[10%] rotate-[10deg]"
            />
            <Image
                src="/icons/note2.svg"
                alt="Musical note"
                width={35}
                height={35}
                className="absolute bottom-[30%] right-[15%] rotate-[-20deg]"
            />
            <Image
                src="/icons/note1.svg"
                alt="Musical note"
                width={48}
                height={48}
                className="absolute top-[40%] left-[20%] rotate-[30deg]"
            />
            <Image
                src="/icons/note3.svg"
                alt="Musical note"
                width={38}
                height={38}
                className="absolute top-[45%] right-[25%] rotate-[-35deg]"
            />
            <Image
                src="/icons/note2.svg"
                alt="Musical note"
                width={42}
                height={42}
                className="absolute bottom-[40%] left-[30%] rotate-[15deg]"
            />
            <Image
                src="/icons/note1.svg"
                alt="Musical note"
                width={36}
                height={36}
                className="absolute top-[60%] right-[35%] rotate-[-25deg]"
            />
            <Image
                src="/icons/note3.svg"
                alt="Musical note"
                width={50}
                height={50}
                className="absolute bottom-[15%] right-[40%] rotate-[20deg]"
            />
            <Image
                src="/icons/note2.svg"
                alt="Musical note"
                width={44}
                height={44}
                className="absolute top-[35%] left-[45%] rotate-[-10deg]"
            />
          </div>

          {/* Основной контейнер */}
          <div className="container mx-auto px-4 md:px-8 lg:px-[150px]">
            {/* Блок с картой и формой */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
              {/* Карта */}
              <div
                  id="map"
                  className="mt-[40px] w-full lg:w-[694px] h-[300px] md:h-[400px] lg:h-[485px] rounded-[32px] overflow-hidden"
              />

              {/* Форма и контакты */}
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                {/* Логотип и название */}
                <div className="mb-8 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <DrumLogo className="mt-12 -mb-[12px] w-[60px] h-[60px] md:w-[85px] md:h-[85px] lg:w-[115px] lg:h-[115px]" />
                    <h1 className="-mb-[68px] md:-mb-[68px] lg:-mb-[68px] text-[60px] md:text-[85px] lg:text-[115px] font-normal text-white uppercase font-[DOCKERONE]">БУМ</h1>
                  </div>
                  <div className="text-[24px] md:text-[32px] lg:text-[40px] font-normal text-white uppercase font-[DOCKERONE] leading-[0.9]">
                    ШКОЛА-СТУДИЯ<br />МУЗЫКИ
                  </div>
                </div>

                {/* Форма */}
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                  <Input
                      type="text"
                      placeholder="Имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full md:w-[448px] h-[56px] md:h-[76px] bg-white rounded-[14px] text-[#666666] placeholder:text-[#666666] px-4 md:px-6 text-lg md:text-[24px] font-raleway font-normal"
                  />
                  <Input
                      type="tel"
                      placeholder="Номер телефона"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full md:w-[448px] h-[56px] md:h-[76px] bg-white rounded-[14px] text-[#666666] placeholder:text-[#666666] px-4 md:px-6 text-lg md:text-[24px] font-raleway font-normal"
                  />
                  <Button
                      type="submit"
                      className="w-full md:w-[448px] h-[56px] md:h-[76px] bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-[14px] text-lg md:text-[24px] font-raleway font-normal px-8"
                  >
                    Записаться на пробный урок
                  </Button>
                </form>

                {/* Социальные сети */}
                <div className="flex gap-4 mt-8">
                  <a href="https://t.me/BOOMDRUMS" className="hover:opacity-80">
                    <Image
                        src="/icons/telegram.svg"
                        alt="Telegram"
                        width={24}
                        height={24}
                        className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
                        style={{filter: 'invert(0)'}}
                    />
                  </a>
                  <a href="https://wa.me/79992738008?text=Привет%21%20Хочу%20играть%20на%20барабанах%21"
                     className="hover:opacity-80">
                    <Image
                        src="/icons/whatsapp.svg"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
                        style={{filter: 'invert(0)'}}
                    />
                  </a>
                  <a href="tel:+79992738008" className="hover:opacity-80">
                    <Image
                        src="/icons/phone.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
                        style={{filter: 'invert(0)'}}
                    />
                  </a>
                  <a href="https://go.2gis.com/3P17i" className="hover:opacity-80">
                    <Image
                        src="/icons/maps.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"

                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Футер */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t-[3px] border-gray-500 pt-8 mt-8">
              <nav className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-0">
                <Link
                    href="#about"
                    className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
                >
                  О школе
                </Link>
                <Link
                    href="#results"
                    className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
                >
                  Результаты
                </Link>
                <Link
                    href="#quiz"
                    className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
                >
                  Квиз
                </Link>
              </nav>
              <div className="flex flex-col gap-2">
                <p className="text-white font-raleway font-medium text-lg md:text-2xl">
                  Хабаровск, ул. Истомина, 39а
                </p>
                <p className="text-white font-raleway font-medium text-lg md:text-2xl">
                  Ежедневно с 10:00-22:00
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default ContactsSection;