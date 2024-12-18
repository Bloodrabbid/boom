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

      {/* Основной контейнер секции
          - bg-black: черный фон
          - pt-16: верхний отступ 64px
          - pb-8: нижний отступ 32px
          - relative: для позиционирования декоративных элементов
          - overflow-hidden: скрытие выходящего контента */}
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
          {/* Дополнительные ноты */}
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

        {/* Контейнер контента
            - container: максимальная ширина из темы
            - mx-auto: центрирование по горизонтали
            - px-4: горизонтальные отступы 16px */}
        <div className="container mx-auto px-[150px]">
          {/* Основной контент (карта + форма)
              - flex-col: вертикальное расположение на мобильных
              - lg:flex-row: горизонтальное расположение от 1024px
              - items-start: выравнивание по верхнему краю
              - gap-8: отступ между элементами 32px
              - mb-16: нижний отступ 64px */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
            {/* Контейнер карты
                - w-[694px]: фиксированная ширина 694px
                - h-[485px]: фиксированная высота 485px
                - rounded-[32px]: скругление углов 32px */}
            <div
              id="map"
              className="mt-[40px] w-[694px] h-[485px] rounded-[32px] overflow-hidden"
            />

            {/* Форма и контакты
                - w-full: полная ширина на мобильных
                - lg:w-1/2: 50% ширины от 1024px
                - flex flex-col: вертикальное расположение
                - items-center: центрирование по горизонтали */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              {/* Логотип и название
                  - mb-8: нижний отступ 32px
                  - text-center: центрирование текста */}
              <div className="mb-2 text-center">
                {/* Контейнер логотипа и названия
                    - gap-4: отступ между элементами 16px
                    - mb-2: нижний отступ 8px */}
                <div className="flex items-center justify-center gap-4 mb-2">
                  {/* Логотип 100x100px */}
                  <DrumLogo className="mt-12 w-[100px] h-[100px]" />
                  {/* Заголовок
                      - text-6xl: размер текста 60px
                      - font-bold: жирный шрифт */}
                  <h1 className="-mb-[50px] text-[115px] font-bold text-white">БУМ</h1>
                </div>
                {/* Подзаголовок
                    - text-2xl: размер текста 24px */}
                <div className="text-[40px] font-bold text-white uppercase">
                  ШКОЛА-СТУДИЯ<br />МУЗЫКИ
                </div>
              </div>

              {/* Форма
                  - w-full: полная ширина
                  - max-w-md: максимальная ширина 448px
                  - space-y-4: вертикальный отступ между элементами 16px */}
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                {/* Поля ввода
                    - h-[50px]: высота 50px
                    - rounded-[14px]: скругление углов 14px
                    - px-6: горизонтальные отступы 24px
                    - text-lg: размер текста 18px */}
                <Input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" w-[448px] h-[76px] bg-white rounded-[14px] text-[#666666] placeholder:text-[#666666] px-6 text-[24px] font-raleway font-normal"
                />
                <Input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-[448px] h-[76px] bg-white rounded-[14px] text-[#666666] placeholder:text-[#666666] px-6 text-[24px] font-raleway font-normal"
                />
                {/* Кнопка отправки
                    - h-[50px]: высота 50px
                    - rounded-[14px]: скругление углов 14px
                    - bg-[#FF0000]: красный цвет фона
                    - hover:bg-[#FF0000]/90: затемнение при наведении */}
                <Button
                  type="submit"
                  className="w-[448px] h-[76px] bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-[14px] text-[24px] font-raleway font-normal px-8"
                >
                  Записаться на пробный урок
                </Button>
              </form>

              {/* Социальные сети
                  - gap-4: отступ между иконками 16px
                  - mt-8: верхний отступ 32px */}
              <div className="flex gap-4 mt-8">
                {/* Telegram
                    - rounded-full: круглая форма
                    - p-3: внутренний отступ 12px
                    - hover:opacity-80: прозрачность при наведении */}
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/icons/telegram.svg"
                    alt="Telegram"
                    width={24}
                    height={24}
                    className="w-[48px] h-[48px]"
                    style={{ filter: 'invert(0)' }}
                  />
                </a>
                {/* WhatsApp */}
                <a href="#" className="hover:opacity-80">
                  <Image
                      src="/icons/whatsapp.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="w-[48px] h-[48px]"
                      style={{filter: 'invert(0)'}}
                  />
                </a>
                {/* Phone */}
                <a href="#" className="hover:opacity-80">
                  <Image
                      src="/icons/phone.svg"
                      alt="Phone"
                      width={24}
                      height={24}
                      className="w-[48px] h-[48px]"
                      style={{filter: 'invert(0)'}}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Навигация и контактная информация
              - border-t: верхняя граница
              - border-gray-800: цвет границы
              - pt-8: верхний отступ 32px */}
          <div
              className="flex flex-col md:flex-row justify-between items-start md:items-center border-t-[3px] border-gray-500 pt-8 mt-8">
            {/* Навигация
                - flex-col: вертикальное расположение на мобильных
                - md:flex-row: горизонтальное от 768px
                - gap-4 md:gap-8: отступы между ссылками 16px/32px */}
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
                  href="#reviews"
                  className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
              >
                Отзывы
              </Link>
              <Link
                  href="#contacts"
                  className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
              >
                Контакты
              </Link>
            </nav>
            {/* Контактная информация
                - gap-2: отступ между строками 8px */}
            <div className="flex flex-col gap-2">
              <p className="text-white font-raleway font-medium text-lg md:text-2xl">
                Хабаровск, ул. Истоимина, 39а
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