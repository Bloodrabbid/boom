'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/shared/components/Button';
import { useToast } from '@/shared/components/ui/use-toast';
import { styles } from '@/shared/styles/constants';
import { instruments, questions } from '../data/quizData';
import Image from 'next/image';
import { transitions } from '@/config/transitions';

// Массив эмодзи инструментов с их позиционированием
// Каждый элемент содержит:
// - emoji: символ эмодзи
// - className: позиционирование (absolute) и размер (text-4xl = 2.25rem = 36px)
const instrumentEmojis = [
  { emoji: '🎸', className: 'absolute top-[8%] left-[12%] text-4xl' },
  { emoji: '🥁', className: 'absolute top-[45%] right-[8%] text-4xl' },
  { emoji: '🎹', className: 'absolute bottom-[15%] left-[23%] text-4xl' },
  { emoji: '🎸', className: 'absolute top-[67%] right-[15%] text-4xl' },
  { emoji: '🥁', className: 'absolute top-[25%] left-[18%] text-4xl' },
  { emoji: '🎹', className: 'absolute bottom-[33%] right-[22%] text-4xl' },
  { emoji: '🎸', className: 'absolute bottom-[42%] left-[7%] text-4xl' },
  { emoji: '🎸', className: 'absolute top-[38%] right-[23%] text-4xl' },
  { emoji: '🥁', className: 'absolute bottom-[12%] right-[9%] text-4xl' },
  { emoji: '🎹', className: 'absolute top-[50%] left-[20%] text-4xl' },
  { emoji: '🎹', className: 'absolute bottom-[68%] right-[17%] text-4xl' },
];

/**
 * Компонент анимированного эмодзи
 * Анимация:
 * - Начальное состояние: невидимый и уменьшенный (opacity: 0, scale: 0)
 * - Анимация: пульсация прозрачности (0.2-0.4) и размера (0.8-1.2)
 * - Поворот: от -10 до 10 градусов
 * - Длительность: случайная от 2 до 4 секунд
 * - Бесконечное повторение с реверсом
 */
function AnimatedEmoji({ emoji, className }: { emoji: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.2, 0.4],
        scale: [0.8, 1.2],
        rotate: [-10, 10],
      }}
      transition={{
        duration: Math.random() * 2 + 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className={className}
    >
      {emoji}
    </motion.div>
  );
}

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedInstrument(null);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleInstrumentSelect = (instrument: string) => {
    setSelectedInstrument(instrument);
    setCurrentStep(2);
  };

  const formatQuestion = (question: string) => {
    return question.replace(/\{(\w+)\}/g, (match, key) => answers[key] || match);
  };

  const getCurrentAnswers = (question: any) => {
    if (!question.dynamic_answers || !answers[question.key]) {
      return question.answers;
    }

    const dynamicAnswers = question.dynamic_answers[answers[question.key]] || [];
    return [...question.answers, ...dynamicAnswers];
  };

  const handleAnswer = (answer: string) => {
    if (!selectedInstrument) return;
    
    const currentQuestions = questions[selectedInstrument];
    if (!currentQuestions) return;

    const question = currentQuestions[currentQuestion];
    if (!question) return;

    setAnswers(prev => ({
      ...prev,
      [question.key]: answer
    }));

    if (currentQuestion < currentQuestions.length - 1) {
      // Skip questions with unmet conditions
      let nextQuestion = currentQuestion + 1;
      while (
        nextQuestion < currentQuestions.length &&
        currentQuestions[nextQuestion].condition &&
        answers[currentQuestions[nextQuestion].condition.key] !== currentQuestions[nextQuestion].condition.value
      ) {
        nextQuestion++;
      }
      setCurrentQuestion(nextQuestion);
    } else {
      toast({
        title: 'Спасибо за ваши ответы!',
        description: 'Мы подобрали для вас идеальную программу обучения и свяжемся с вами в ближайшее время.',
      });
      // Reset quiz
      setCurrentStep(0);
      setSelectedInstrument(null);
      setCurrentQuestion(0);
      setAnswers({});
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return (
          // Начальный экран
          // - space-y-6: вертикальные отступы между элементами 1.5rem (24px)
          <div className="space-y-6">
            {/* Заголовок
                - text-[32px]: размер текста
                - font-bold: жирный шрифт */}
            <div className="space-y-2">
              <h3 className="text-[32px] font-bold">
                ПРОЙДИ ТЕСТ И УЗНАЙ,
              </h3>
              {/* Подзаголовок с желтым текстом
                  - text-yellow-400: желтый цвет */}
              <p className="text-[32px] font-bold text-yellow-400">
                КАКОЙ МУЗЫКАЛЬНЫЙ<br />
                ИНСТРУМЕНТ ТЕБЕ ПОДХОДИТ
              </p>
            </div>
            {/* Контейнер с изображением
                - flex justify-center: центрирование */}
            <div className="flex justify-center">
              <Image
                src="/icons/thinking.png"
                alt="thinking"
                width={250}
                height={250}
              />
            </div>
            {/* Кнопка "ПОЕХАЛИ!"
                - bg-[#FF0000]: красный фон
                - hover:bg-[#CC0000]: темно-красный при наведении
                - w-[208px] h-[77px]: фиксированные размеры
                - rounded-full: полное скругление углов
                - text-xl: размер текста */}
            <Button
              onClick={handleStart}
              className="bg-[#FF0000] w-[208px] h-[77px] hover:bg-[#CC0000] text-white px-8 py-3 rounded-full text-xl"
            >
              ПОЕХАЛИ!
            </Button>
          </div>
        );
      case 1:
        return (
          // Экран выбора инструмента
          <div className="space-y-6">
            {/* Заголовок
                - text-xl: размер текста
                - mb-6: отступ снизу 1.5rem (24px) */}
            <h3 className="text-xl font-bold text-center mb-6">
              Выберите инструмент:
            </h3>
            {/* Сетка кнопок
                - grid gap-4: отступы между кнопками 1rem (16px) */}
            <div className="grid gap-4">
              {instruments.map((instrument) => (
                // Кнопка инструмента
                // - w-full: полная ширина
                // - bg-[#FF4B26]: оранжевый фон
                // - hover:bg-[#FF0000]: красный при наведении
                // - min-h-[60px]: минимальная высота
                // - z-20: поверх других элементов
                <Button
                  key={instrument}
                  onClick={() => handleInstrumentSelect(instrument)}
                  variant="primary"
                  className="w-full text-left text-lg py-4 px-6 bg-[#FF4B26] border-none text-white hover:bg-[#FF0000] transition-all whitespace-normal break-words min-h-[60px] flex items-center relative z-20"
                >
                  {instrument}
                </Button>
              ))}
            </div>
          </div>
        );
      case 2:
        if (!selectedInstrument) return null;
        const currentQuestions = questions[selectedInstrument];
        const question = currentQuestions[currentQuestion];
        if (!question) return null;

        // Skip questions with unmet conditions
        if (
          question.condition &&
          answers[question.condition.key] !== question.condition.value
        ) {
          handleAnswer('');
          return null;
        }
        
        return (
          // Экран вопросов
          <div className="space-y-6">
            {/* Текст вопроса
                - text-xl: размер текста
                - mb-6: отступ снизу 1.5rem (24px) */}
            <h3 className="text-xl font-bold text-center mb-6">
              {formatQuestion(question.question)}
            </h3>
            {/* Сетка вариантов ответов
                - grid gap-4: отступы между кнопками 1rem (16px) */}
            <div className="grid gap-4">
              {getCurrentAnswers(question).map((answer) => (
                // Кнопка ответа (стили аналогичны кнопкам инструментов)
                <Button
                  key={answer}
                  onClick={() => handleAnswer(answer)}
                  variant="primary"
                  className="w-full text-left text-lg py-4 px-6 bg-[#FF4B26] border-none text-white hover:bg-[#FF0000] transition-all whitespace-normal break-words min-h-[60px] flex items-center relative z-20"
                >
                  {answer}
                </Button>
              ))}
            </div>
          </div>
        );
    }
  };

  const topTransition = transitions.quiz?.top;
  const bottomTransition = transitions.quiz?.bottom;

  return (
    // Основной контейнер секции
    // - bg-[#FF4B26]: оранжевый фон
    // - py-20: вертикальные отступы 5rem (80px)
    // - overflow-hidden: скрытие выходящего за пределы контента
    <section className="relative bg-[#FF4B26] text-white py-20 overflow-hidden" id="quiz">
      {/* Декоративные ноты
          - absolute inset-0: растягивание на всю секцию
          - pointer-events-none: игнорирование событий мыши */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ноты размещены аналогично другим секциям */}
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
      </div>

      {/* Верхний и нижний переходы между секциями */}
      {topTransition && (
        <div
          className={topTransition.className}
          style={{
            height: topTransition.height,
            backgroundColor: topTransition.backgroundColor
          }}
        >
          <Image
            src={topTransition.image}
            alt="Top transition"
            width={1440}
            height={topTransition.height}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {bottomTransition && (
        <div
          className={bottomTransition.className}
          style={{
            height: bottomTransition.height,
            backgroundColor: bottomTransition.backgroundColor
          }}
        >
          <Image
            src={bottomTransition.image}
            alt="Bottom transition"
            width={1440}
            height={bottomTransition.height}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Основной контент
          - styles.container.narrow: узкий контейнер с центрированием
          - space-y-12: вертикальные отступы 3rem (48px)
          - mb-24: отступ снизу 6rem (96px) */}
      <div className={styles.container.narrow}>
        <div className="relative z-10 flex flex-col items-center space-y-12 text-center mb-24">
          {/* Заголовок
              - text-4xl md:text-[64px]: адаптивный размер текста
              - mt-12: отступ сверху 3rem (48px) */}
          <h2 className="text-4xl md:text-[64px] font-bold mt-12">
            <span className="text-black">Почему стоит </span>
            <span className="text-white">попробовать?</span>
          </h2>
          
          {/* Черный контейнер с контентом
              - bg-black: черный фон
              - rounded-3xl: скругление углов 1.5rem (24px)
              - p-8: внутренние отступы 2rem (32px)
              - max-w-4xl: максимальная ширина */}
          <div className="bg-black rounded-3xl p-8 w-full max-w-4xl mx-auto relative">
            {/* Декоративные молнии по углам
                - hidden md:block: скрыты на мобильных
                - transform rotate-XX: повороты
                - -left/right-[215px]: отступы от контейнера */}
            <Image
              src="/icons/lightning.png"
              alt="lightning"
              width={190}
              height={190}
              className="absolute -left-[215px] -top-[50px] transform -rotate-45 hidden md:block"
            />
            <Image
              src="/icons/lightning.png"
              alt="lightning"
              width={190}
              height={190}
              className="absolute -right-[215px] -top-[50px] transform rotate-45 hidden md:block"
            />
            <Image
              src="/icons/lightning.png"
              alt="lightning"
              width={190}
              height={190}
              className="absolute -left-[215px] -bottom-[50px] transform -rotate-45 hidden md:block"
            />
            <Image
              src="/icons/lightning.png"
              alt="lightning"
              width={190}
              height={190}
              className="absolute -right-[215px] -bottom-[50px] transform rotate-45 hidden md:block"
            />
            
            {/* Кнопка "Начать заново"
                - flex justify-end: выравнивание вправо
                - mb-6: отступ снизу 1.5rem (24px) */}
            <div className="flex justify-end mb-6">
              {currentStep > 0 && (
                <Button
                  onClick={handleReset}
                  variant="primary"
                  className="bg-[#FF4B26] text-white px-4 py-2 rounded-full hover:bg-[#FF0000] transition-all"
                >
                  Начать заново
                </Button>
              )}
            </div>

            {/* Анимированный контент
                Анимация:
                - Появление: сдвиг снизу на 20px с появлением
                - Исчезновение: сдвиг вверх на 20px с исчезновением */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentStep}-${currentQuestion}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>

            {/* Анимированные эмодзи инструментов */}
            {instrumentEmojis.map((item, index) => (
              <AnimatedEmoji
                key={index}
                emoji={item.emoji}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
