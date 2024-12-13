'use client';

import { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { styles } from '@/shared/styles/constants';

interface Section {
  id: string;
  title: string;
  type: string;
  isVisible: boolean;
}

const initialSections: Section[] = [
  { id: '1', title: 'Главный экран', type: 'hero', isVisible: true },
  { id: '2', title: 'О нас', type: 'about', isVisible: true },
  { id: '3', title: 'Результаты', type: 'results', isVisible: true },
  { id: '4', title: 'Преимущества', type: 'advantages', isVisible: true },
  { id: '5', title: 'Отзывы', type: 'reviews', isVisible: true },
  { id: '6', title: 'Квиз', type: 'quiz', isVisible: true },
];

export default function PagesPage() {
  const [sections, setSections] = useState(initialSections);

  const toggleVisibility = (id: string) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, isVisible: !section.isVisible } : section
    ));
  };

  const handleEdit = (id: string) => {
    // TODO: Implement section editing
    console.log('Edit section:', id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={styles.heading.h2}>Структура страниц</h1>
        <p className={styles.text.large}>
          Управляйте порядком и видимостью разделов сайта
        </p>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <Reorder.Group axis="y" values={sections} onReorder={setSections}>
          {sections.map((section) => (
            <Reorder.Item
              key={section.id}
              value={section}
              as={motion.div as any}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-4 flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="cursor-move p-2">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.heading.h3}>{section.title}</h3>
                  <p className={styles.text.body}>Тип: {section.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleVisibility(section.id)}
                  className={`${styles.button.outline} px-3`}
                >
                  {section.isVisible ? 'Скрыть' : 'Показать'}
                </button>
                <button
                  onClick={() => handleEdit(section.id)}
                  className={`${styles.button.primary} px-3`}
                >
                  Редактировать
                </button>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
