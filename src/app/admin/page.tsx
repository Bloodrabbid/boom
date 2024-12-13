'use client';

import { styles } from '@/shared/styles/constants';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className={styles.heading.h2}>Добро пожаловать в панель управления</h1>
        <p className={styles.text.large}>
          Здесь вы можете управлять содержимым вашего сайта
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Статистика */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className={styles.heading.h3}>Разделы</h3>
          <p className="mt-2 text-3xl font-bold">4</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className={styles.heading.h3}>Отзывы</h3>
          <p className="mt-2 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className={styles.heading.h3}>Заявки</h3>
          <p className="mt-2 text-3xl font-bold">25</p>
        </div>
      </div>

      {/* Быстрые действия */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className={styles.heading.h3}>Быстрые действия</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <button className={styles.button.primary}>
            Добавить отзыв
          </button>
          <button className={styles.button.primary}>
            Изменить контакты
          </button>
          <button className={styles.button.primary}>
            Обновить расписание
          </button>
          <button className={styles.button.primary}>
            Добавить преимущество
          </button>
        </div>
      </div>
    </div>
  );
}
