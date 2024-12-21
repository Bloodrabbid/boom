'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/shared/components/Button';
import { useToast } from '@/shared/components/ui/use-toast';
import { styles } from '@/shared/styles/constants';
import { instruments, questions } from '../data/quizData';
import Image from 'next/image';
import { transitions } from '@/config/transitions';

interface QuestionCondition {
 key: string;
 value: string;
}

interface Question {
 key: string;
 question: string;
 answers: string[];
 dynamic_answers?: Record<string, string[]>;
 condition?: QuestionCondition;
}

type Questions = Record<string, Question[]>;

const instrumentEmojis = [
 { emoji: '🎸', className: 'absolute top-[8%] left-[12%] text-4xl' },
 { emoji: '🥁', className: 'absolute top-[45%] right-[8%] text-4xl' },
 { emoji: '🎹', className: 'absolute bottom-[15%] left-[13%] text-4xl' },
 { emoji: '🎸', className: 'absolute top-[67%] right-[15%] text-4xl' },
 { emoji: '🥁', className: 'absolute top-[25%] left-[18%] text-4xl' },
 { emoji: '🎹', className: 'absolute bottom-[33%] right-[22%] text-4xl' },
 { emoji: '🎸', className: 'absolute bottom-[42%] left-[7%] text-4xl' },
 { emoji: '🎸', className: 'absolute top-[38%] right-[23%] text-4xl' },
 { emoji: '🥁', className: 'absolute bottom-[12%] right-[9%] text-4xl' },
 { emoji: '🎹', className: 'absolute top-[50%] left-[20%] text-4xl' },
 { emoji: '🎹', className: 'absolute bottom-[68%] right-[17%] text-4xl' },
];

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

export const QuizSection = () => {
 const [currentStep, setCurrentStep] = useState(0);
 const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null);
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [answers, setAnswers] = useState<{ [key: string]: string }>({});
 const { toast } = useToast();

 const findNextQuestion = (current: number, questions: Question[]): number => {
   let next = current + 1;
   
   if (next >= questions.length) {
     return next;
   }

   const nextQuestion = questions[next];
   if (!nextQuestion.condition) {
     return next;
   }

   const { key, value } = nextQuestion.condition;
   if (answers[key] === value) {
     return next;
   }

   return findNextQuestion(next, questions);
 };

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
   
   const currentQuestions = questions[selectedInstrument] as Question[];
   if (!currentQuestions) return;

   const question = currentQuestions[currentQuestion];
   if (!question) return;

   setAnswers(prev => ({
     ...prev,
     [question.key]: answer
   }));

   const nextQuestion = findNextQuestion(currentQuestion, currentQuestions);
   
   if (nextQuestion < currentQuestions.length) {
     setCurrentQuestion(nextQuestion);
   } else {
     toast({
       title: 'Спасибо за ваши ответы!',
       description: 'Мы подобрали для вас идеальную программу обучения и свяжемся с вами в ближайшее время.',
     });
     handleReset();
   }
 };

    const renderContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="flex-col space-y-4 md:space-y-6 lg:space-y-8">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
                                ПРОЙДИ ТЕСТ И УЗНАЙ,
                            </h3>
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 mb-4 md:mb-6 lg:mb-8">
                                КАКОЙ МУЗЫКАЛЬНЫЙ<br className="hidden md:block" /> ИНСТРУМЕНТ ТЕБЕ ПОДХОДИТ
                            </p>
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
                                <Image
                                    src="/icons/thinking.png"
                                    alt="thinking"
                                    fill
                                    className="object-contain z-10"
                                    priority
                                />
                            </div>
                        </div>
                        <Button
                            onClick={handleStart}
                            className="w-48 md:w-56 lg:w-64 h-14 md:h-16 lg:h-20 text-lg md:text-xl lg:text-2xl bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full z-50"
                        >
                            ПОЕХАЛИ!
                        </Button>
                    </div>
                );

            case 1:
                return (
                    <div className="space-y-4 md:space-y-6 max-w-[640px] mx-auto">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 md:mb-6">
                            Выберите инструмент:
                        </h3>
                        <div className="grid gap-3 md:gap-4">
                            {instruments.map((instrument) => (
                                <Button
                                    key={instrument}
                                    onClick={() => handleInstrumentSelect(instrument)}
                                    variant="primary"
                                    className="w-full text-left text-base md:text-lg py-3 md:py-4 px-4 md:px-6 bg-[#FF4B26] border-none text-white hover:bg-[#FF0000] transition-all whitespace-normal break-words min-h-[50px] md:min-h-[60px] flex items-center relative z-20"
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

                return (
                    <div className="space-y-4 md:space-y-6 max-w-[600px] mx-auto">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 md:mb-6">
                            {formatQuestion(question.question)}
                        </h3>
                        <div className="grid gap-3 md:gap-4">
                            {getCurrentAnswers(question).map((answer: string) => (
                                <Button
                                    key={answer}
                                    onClick={() => handleAnswer(answer)}
                                    variant="primary"
                                    className="w-full min-h-[77px] py-4 px-6 text-left text-base sm:text-lg whitespace-normal break-words bg-[#FF4B26] hover:bg-[#FF0000] text-white rounded-full z-50 relative transition-all duration-300 flex items-center"
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
   <section className="relative bg-[#FF4B26] text-white lg:py-20 py-5 overflow-hidden" id="quiz">
     <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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

     <div className={styles.container.narrow}>
       <div className="relative z-10 flex flex-col items-center space-y-12 text-center mb-24">
         <h2 className="text-4xl md:text-[64px] font-bold mt-12">
           <span className="text-black leading-[1.5]">Почему стоит </span>
           <span className="text-white">попробовать?</span>
         </h2>
         
         <div className="bg-black rounded-3xl p-8 w-full max-w-[980px] mx-auto relative mt-12">
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