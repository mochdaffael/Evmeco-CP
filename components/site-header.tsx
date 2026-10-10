'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const clockFormat = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const tick = () => setTime(clockFormat.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header>
        <a className="logo" href="#top">
          EVERYTHING
          <br />
          MATTERS™
        </a>
        <div className="ticker">Digital Marketing Agency — Based in Indonesia</div>
        <span className="clock">{time} WIB</span>
        <button className="menu" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="overlay">
          Menu ↗
        </button>
      </header>
      <nav className={`overlay${open ? ' open' : ''}`} id="overlay" aria-label="Main navigation">
        <button onClick={() => setOpen(false)}>Close ×</button>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
