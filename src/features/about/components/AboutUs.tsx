'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import StickerRenderer from '@/shared/components/StickerRenderer';
import { defaultStickers } from '@/config/stickers';
import { transitions } from '@/config/transitions';
import TornPaper from '@/shared/components/TornPaper';
import SectionTitle from '@/shared/components/SectionTitle';
import Photos from '@/components/Photos';
import { aboutStyles } from '../styles';
import { aboutConfig } from '../config';

const AboutUs = () => {
  return (
    <>
      <div className={aboutStyles.titleContainer}>
        <h2 className={aboutStyles.title}>Что такое БУМ?</h2>
      </div>
      
      <section className={aboutStyles.section} id="about">
        {/* Decorative Notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top area notes */}
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={53}
            height={53}
            className="absolute top-[5%] left-[15%] rotate-[-15deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={40}
            height={40}
            className="absolute top-[8%] right-[20%] rotate-[25deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={45}
            height={45}
            className="absolute top-[12%] left-[40%] rotate-[10deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={48}
            height={48}
            className="absolute top-[7%] right-[35%] rotate-[-22deg]"
          />
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={42}
            height={42}
            className="absolute top-[15%] left-[25%] rotate-[18deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={46}
            height={46}
            className="absolute top-[3%] right-[45%] rotate-[-12deg]"
          />

          {/* Upper middle area notes */}
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={44}
            height={44}
            className="absolute top-[25%] left-[12%] rotate-[28deg]"
          />
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={51}
            height={51}
            className="absolute top-[28%] right-[18%] rotate-[-8deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={47}
            height={47}
            className="absolute top-[22%] left-[32%] rotate-[15deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={43}
            height={43}
            className="absolute top-[30%] right-[28%] rotate-[-25deg]"
          />

          {/* Left side notes */}
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={47}
            height={47}
            className="absolute top-[50%] left-[3%] rotate-[-20deg]"
          />
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={43}
            height={43}
            className="absolute top-[70%] left-[5%] rotate-[15deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={49}
            height={49}
            className="absolute top-[40%] left-[8%] rotate-[22deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={45}
            height={45}
            className="absolute top-[60%] left-[12%] rotate-[-18deg]"
          />
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={41}
            height={41}
            className="absolute top-[80%] left-[6%] rotate-[25deg]"
          />

          {/* Right side notes */}
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={50}
            height={50}
            className="absolute top-[45%] right-[4%] rotate-[-10deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={45}
            height={45}
            className="absolute top-[65%] right-[6%] rotate-[20deg]"
          />
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={48}
            height={48}
            className="absolute top-[35%] right-[8%] rotate-[-15deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={44}
            height={44}
            className="absolute top-[55%] right-[10%] rotate-[28deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={46}
            height={46}
            className="absolute top-[75%] right-[5%] rotate-[-22deg]"
          />

          {/* Bottom area notes */}
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={43}
            height={43}
            className="absolute bottom-[5%] left-[90%] rotate-[-25deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={47}
            height={47}
            className="absolute bottom-[30%] right-[48%] rotate-[15deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={40}
            height={40}
            className="absolute bottom-[2%] right-[47%] rotate-[-15deg]"
          />
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={45}
            height={45}
            className="absolute bottom-[8%] left-[75%] rotate-[20deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={42}
            height={42}
            className="absolute bottom-[25%] right-[35%] rotate-[-18deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={49}
            height={49}
            className="absolute bottom-[4%] right-[60%] rotate-[25deg]"
          />
          <Image
            src="/icons/note1.svg"
            alt="Musical note"
            width={46}
            height={46}
            className="absolute bottom-[15%] left-[55%] rotate-[-12deg]"
          />
          <Image
            src="/icons/note3.svg"
            alt="Musical note"
            width={44}
            height={44}
            className="absolute bottom-[20%] right-[25%] rotate-[18deg]"
          />
          <Image
            src="/icons/note2.svg"
            alt="Musical note"
            width={41}
            height={41}
            className="absolute bottom-[12%] left-[40%] rotate-[-20deg]"
          />
        </div>

                {/* Верхний переход */}
                {transitions.about.top && (
                    <TornPaper config={transitions.about.top} position="top" />
                )}

                {/* Заголовок секции */}
                {transitions.about.titleStrip && (
                    <SectionTitle config={transitions.about.titleStrip} />
                )}

                {/* Нижний переход */}
                {transitions.about.bottom && (
                    <TornPaper config={transitions.about.bottom} position="bottom" />
                )}

                {/* Основное содержание */}
                <div className={aboutStyles.content}>
                    <div className={aboutStyles.cardsContainer}>
                        {/* Информационные карточки */}
                        <div className={aboutStyles.cardsGrid}>
                            {aboutConfig.cards.map((card, index) => {
                                const imageConfig = defaultStickers.aboutImages[card.imageKey];
                                if (!imageConfig?.src) return null;

                                return (
                                    <motion.div
                                        key={card.title.bold + card.title.rest}
                                        className={aboutStyles.card.container}
                                        initial={{ opacity: 0, x: card.position === 'left' ? -50 : 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <div className={aboutStyles.card.wrapper}>
                                            {/* Текстовая карточка */}
                                            <div className={`${aboutStyles.card.textContainer} ${card.position === 'right' ? 'lg:order-2' : ''}`}>
                                                <div className={aboutStyles.card.content}>
                                                    <h3 className={aboutStyles.card.title}>
                                                        <span className={aboutStyles.card.titleHighlight}>{card.title.bold}</span>
                                                        {card.title.rest}
                                                    </h3>
                                                    <p className={aboutStyles.card.text}>{card.content}</p>
                                                </div>
                                            </div>

                                            {/* Изображение карточки */}
                                            <div className={`${aboutStyles.card.imageContainer} ${card.position === 'right' ? 'lg:order-1' : ''}`}>
                                                <div className={aboutStyles.card.imageWrapper}>
                                                    <StickerRenderer
                                                        stickers={defaultStickers.about.filter(sticker =>
                                                            sticker.imageKey === card.imageKey
                                                        )}
                                                        containerClassName="w-full h-full"
                                                        imageProps={{
                                                            src: imageConfig.src,
                                                            alt: imageConfig.alt,
                                                            fill: true,
                                                            style: { objectFit: 'cover', borderRadius: '30px' }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Блок "Для кого" */}
                        <div className={aboutStyles.forWhom.container}>
                            <div className={aboutStyles.forWhom.titleImage}>
                                <Image
                                    src="/komu.png"
                                    alt="Для кого"
                                    width={700}
                                    height={80}
                                    priority
                                />
                            </div>

                            <div className={aboutStyles.forWhom.content}>
                                {/* Стикеры */}
                                <div className="hidden md:block absolute inset-0">
                                    <StickerRenderer
                                        stickers={defaultStickers.aboutGeneral}
                                        containerClassName="relative w-full h-full"
                                    />
                                </div>

                                <div className={aboutStyles.forWhom.text}>
                                    <p className={aboutStyles.forWhom.paragraph}>
                                        Возраст, профессия, пол - для занятия музыкой всё это не имеет значения,
                                        даже если вы раньше пробовали самостоятельно и у вас ничего не получилось,
                                        мы обязательно найдём к вам нужный ключик и вы поймёте, что играть может каждый!
                                    </p>
                                    <p className={aboutStyles.forWhom.paragraph}>
                                        Дети от 5 лет
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Фото-карусель */}
                        <div className={aboutStyles.photos}>
                            <Photos />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;