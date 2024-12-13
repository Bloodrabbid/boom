/**
 * Текстовый контент для всего приложения
 */
export const APP_CONTENT = {
  hero: {
    logo: 'БУМ',
    subtitle: {
      line1: 'школа-студия',
      line2: 'музыки'
    },
    cta: 'Записаться на пробное занятие'
  },
  contacts: {
    title: 'Контакты',
    form: {
      name: {
        label: 'Имя',
        placeholder: 'Введите ваше имя'
      },
      phone: {
        label: 'Телефон',
        placeholder: '+7 (___) ___-__-__'
      },
      submit: 'Отправить'
    }
  }
} as const;
