'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/content';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Nama
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" required type="email" autoComplete="email" />
      </label>
      <label>
        WhatsApp
        <input name="whatsapp" required type="tel" autoComplete="tel" />
      </label>
      <label>
        Brand / Perusahaan
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        Jenis layanan
        <select name="service" required defaultValue="">
          <option value="">Pilih layanan</option>
          {SERVICES.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <label>
        Budget range
        <select name="budget">
          <option>[ISI BUDGET RANGE]</option>
        </select>
      </label>
      <label className="wide">
        Pesan
        <textarea name="message" rows={4} required />
      </label>
      <button className="dark" type="submit" disabled={sent}>
        {sent ? 'Terkirim — kami akan hubungi lo.' : 'Kirim →'}
      </button>
    </form>
  );
}
