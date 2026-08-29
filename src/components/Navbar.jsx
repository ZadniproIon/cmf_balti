'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

const Navbar = () => {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('up');

  const navItems = [
    {
      href: '/',
      label: t('home'),
    },
    {
      href: '/despre-noi',
      label: t('about'),
    },
    {
      href: '/generale',
      label: t('general'),
    },
    {
      href: '/transparenta',
      label: t('transparenta'),
    },
    {
      href: '/contacte',
      label: t('contact'),
    },
  ];

  useEffect(() => {
    document.body.classList.toggle('menu-lock', menuOpen);

    return () => {
      document.body.classList.remove('menu-lock');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        scrollDirection.current = 'up';
        setIsHidden(false);
        lastScrollY.current = 0;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;
      if (Math.abs(delta) < 5) {
        return;
      }

      const nextDirection = delta > 0 ? 'down' : 'up';
      if (nextDirection !== scrollDirection.current) {
        scrollDirection.current = nextDirection;
        setIsHidden(nextDirection === 'down');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setIsHidden(false);
    }
  }, [menuOpen]);

  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`navbar${isHidden ? ' navbar-hidden' : ''}`}>
      <Link className="left-side" href="/">
        <img
          src="/images/logo-cmf.png"
          alt="Logo-ul CMF Bălți"
        />
        <p>
          Centrul Medicilor de
          <br />
          Familie mun. Bălți
        </p>
      </Link>

      <nav className="right-side" aria-label="Navigare principală">
        <ul>
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={active ? 'active' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <LanguageSwitcher className="language-switcher-desktop" />
      </nav>

      <button
        type="button"
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
      >
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </button>

      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' menu-open' : ''}`}
        aria-label="Navigare mobilă"
      >
        <ul>
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <li key={`${item.href}-mobile`}>
                <Link
                  href={item.href}
                  className={active ? 'active' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <LanguageSwitcher className="language-switcher-mobile" />
      </nav>
    </header>
  );
};

export default Navbar;
