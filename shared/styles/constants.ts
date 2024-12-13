export const styles = {
  // Контейнеры и секции
  section: {
    default: 'w-full py-12 md:py-24 lg:py-32',
    withBg: 'w-full py-12 md:py-24 lg:py-32 bg-white',
  },
  container: {
    default: 'container px-4 md:px-6',
    narrow: 'container px-4 md:px-6 max-w-5xl mx-auto',
  },

  // Заголовки
  heading: {
    h1: 'text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl',
    h3: 'text-xl font-bold',
  },

  // Текст
  text: {
    body: 'text-gray-500 dark:text-gray-400',
    large: 'text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400',
  },

  // Сетки
  grid: {
    advantages: 'mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-12',
    reviews: 'mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-12',
  },

  // Карточки
  card: {
    default: 'flex flex-col items-center space-y-4',
    withHover: 'flex flex-col items-center space-y-4 hover:transform hover:scale-105 transition-transform duration-200',
  },

  // Иконки
  icon: {
    default: 'h-10 w-10 text-[#FF4B26]',
    container: 'flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800',
  },

  // Анимации
  animation: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
  },

  // Кнопки
  button: {
    primary: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#FF4B26] text-white hover:bg-[#FF4B26]/90 h-10 px-4 py-2',
    secondary: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
    outline: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
  },

  // Изображения
  image: {
    avatar: 'relative h-20 w-20 overflow-hidden rounded-full',
    cover: 'object-cover w-full h-full',
  },
}
