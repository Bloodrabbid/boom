export const SLIDER_CONFIG = {
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    enabled: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 7,
    }
  }
} as const;

export const SLIDER_CLASSES = {
  base: "photo-swiper min-h-[350px]",
  slide: "!w-auto"
} as const; 