'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { styles } from '@/shared/styles/constants';

const menuItems = [
  {
    title: 'Общие настройки',
    href: '/admin/settings',
    icon: 'settings',
  },
  {
    title: 'Структура страниц',
    href: '/admin/pages',
    icon: 'layout',
  },
  {
    title: 'Преимущества',
    href: '/admin/advantages',
    icon: 'star',
  },
  {
    title: 'Отзывы',
    href: '/admin/reviews',
    icon: 'message',
  },
  {
    title: 'Квиз',
    href: '/admin/quiz',
    icon: 'help',
  },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Боковое меню */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ x: isSidebarOpen ? 0 : -200 }}
        className="fixed left-0 top-0 z-40 h-screen w-64 bg-white shadow-lg"
      >
        <div className="flex h-full flex-col">
          {/* Заголовок */}
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className={styles.heading.h3}>Админ панель</h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="rounded p-2 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isSidebarOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                />
              </svg>
            </button>
          </div>

          {/* Навигация */}
          <nav className="flex-1 space-y-1 px-2 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Основной контент */}
      <main
        className={`transition-all duration-200 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
