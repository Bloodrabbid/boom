'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings } from 'lucide-react';
import DrumLogo from './DrumLogo';
import { headerStyles } from './styles/header';

interface MenuItem {
  href: string;
  title: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [headerHidden, setHeaderHidden] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuItems: MenuItem[] = [
    { href: '#about', title: 'О школе' },
    { href: '#advantages', title: 'Результаты' },
    { href: '#reviews', title: 'Отзывы' },
    { href: '#contacts', title: 'Контакты' },
  ];

  return (
    <header
      className={`app-header ${scrolled ? 'scrolled' : ''} ${
        headerHidden ? 'header-hidden' : ''
      } ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className={headerStyles.inner}>
        <div className={headerStyles.logo.wrapper}>
          <Link href="/" className={headerStyles.logo.link}>
            <DrumLogo className={headerStyles.logo.icon} />
          </Link>
        </div>

        <div className="flex items-center">
          <button
            className="burger md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>

        <nav
          className={`w-full md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ul className={headerStyles.nav.list}>
            {menuItems.map((item: MenuItem) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={headerStyles.nav.item}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
