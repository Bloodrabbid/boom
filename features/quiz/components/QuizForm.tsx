'use client';

import { useState } from 'react';
import { type QuizFormData } from '../types';
import Input from '@/shared/components/Input';
import Button from '@/shared/components/Button';

interface QuizFormProps {
  onSubmit: (data: QuizFormData) => void;
  answers: Record<string, string>;
  className?: string;
}

/**
 * Форма контактных данных для квиза
 */
const QuizForm = ({ onSubmit, answers, className }: QuizFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      answers
    });
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <Input
          label="Имя"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          placeholder="Введите ваше имя"
        />
        <Input
          label="Телефон"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          required
          placeholder="+7 (999) 999-99-99"
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          placeholder="example@mail.com"
        />
      </div>
      <Button type="submit" className="mt-6 w-full">
        Отправить
      </Button>
    </form>
  );
};

export default QuizForm;
