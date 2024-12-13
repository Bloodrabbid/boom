'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { styles } from '@/shared/styles/constants';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual authentication
      if (email === 'admin@boom.school' && password === 'admin') {
        // Имитация задержки сети
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push('/admin');
      } else {
        alert('Неверные учетные данные');
      }
    } catch (error) {
      console.error('Ошибка входа:', error);
      alert('Произошла ошибка при входе');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
      >
        <div className="text-center">
          <h1 className={styles.heading.h2}>Вход в админ-панель</h1>
          <p className={styles.text.body}>
            Введите свои учетные данные для входа
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FF4B26] focus:outline-none focus:ring-1 focus:ring-[#FF4B26]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FF4B26] focus:outline-none focus:ring-1 focus:ring-[#FF4B26]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`${styles.button.primary} w-full`}
            disabled={isLoading}
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
