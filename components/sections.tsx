import { Accordion } from './accordion';
import { ContactForm } from './contact-form';
import { Eyes } from './eyes';
import {
  CLIENTS, FAQS, MARQUEE_TEXT, PILLARS, POSTS, PROBLEMS, PROJECTS, SERVICES, STATS, STEPS,
} from '@/lib/content';

const pad = (n: number) => String(n).padStart(2, '0');

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="vertical">DIGITAL MARKETING AGENCY</div>
      <div className="marquee" aria-hidden="true">
        <span>{MARQUEE_TEXT}</span>
        <span>{MARQUEE_TEXT}</span>
      </div>
      <div className="hero-copy">
        <p className="eyebrow">BASED IN INDONESIA / READY 24/7</p>
        <h1>
          Every
          <br />
          <i>thing</i>
          <br />
          matters<span>.</span>
        </h1>
        <Eyes />
        <p className="lede">Kami bikin strategi digital yang punya arah, lalu eksekusi sampai performanya kelihatan.</p>
        <div className="actions">
          <a className="dark" href="#contact">Mulai Project ↗</a>
          <a className="line" href="#projects">Lihat Portofolio ↓</a>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="intro" id="about">
      <div>
        <p className="label">WHO WE ARE</p>
        <h2>
          Kenapa harus
          <br />
          <em>Everything Matters?</em>
        </h2>
      </div>
      <div>
        <p className="big">Kami selalu up to date untuk setiap perkembangan digital, dengan tim yang capable di bidangnya.</p>
        <p>
          Digital marketing agency yang berobjective mengelola aktivasi marketing dan branding: concept brand, digital
          campaign, sosial media, affiliate marketing, dan performa iklan dengan optimal. Kami monitoring iklan, socmed,
          sampai performa revenue brand, jadi ready 24/7 untuk bisnis kalian.
        </p>
        <div className="problems">
          <b>MENJAWAB SETIAP PERMASALAHAN DALAM BRAND:</b>
          {PROBLEMS.map((p) => (
            <span key={p}>✦ {p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pillars() {
  return (
    <section className="pillars">
      {PILLARS.map((name, i) => (
        <div key={name} className={`pillar${i ? ` p${i}` : ''}`}>
          <div className="oval" />
          <h2>{name}</h2>
          <span>{pad(i + 1)}</span>
        </div>
      ))}
    </section>
  );
}

export function Numbers() {
  return (
    <section className="numbers">
      <p className="label">BY THE NUMBERS</p>
      <h2>Proof, not promise.</h2>
      <div className="stats">
        {STATS.map((s, i) => (
          <div key={i}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="work" id="projects">
      <p className="label">FEATURED WORK</p>
      <h2>
        Kerja yang bikin
        <br />
        <em>impact nyata.</em>
      </h2>
      {PROJECTS.map((p, i) => (
        <article className="project" key={p.category}>
          <div className="visual">
            <span>[GANTI DENGAN SCREENSHOT]</span>
            <div className="screen">
              <small>{p.channel}</small>
              <b>{p.headline}</b>
              <i>{p.detail}</i>
            </div>
            <mark>{i + 1}</mark>
          </div>
          <div className="meta">
            <span>{`${pad(i + 1)} / ${p.category}`}</span>
            <h3>{`“${p.category}”`}</h3>
            <p>{p.client}</p>
            <a href="#contact">Lihat studi kasus ↗</a>
          </div>
        </article>
      ))}
    </section>
  );
}

export function Services() {
  return (
    <section className="services">
      <div>
        <p className="label">PRODUCTS & SERVICES</p>
        <h2>
          Online <em>&</em> Offline.
        </h2>
      </div>
      <Accordion items={SERVICES} id="services" />
    </section>
  );
}

export function Process() {
  return (
    <section className="process">
      <div>
        <p className="label">PROCESS / [DRAFT]</p>
        <h2>
          Clear path,
          <br />
          <em>real progress.</em>
        </h2>
      </div>
      <div>
        {STEPS.map((s, i) => (
          <div className="step" key={s.title}>
            <span>{pad(i + 1)}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <small>
              Outcome: {s.outcome}
              <br />
              Timeframe: [DRAFT]
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section className="clients">
      <p className="label">TRUSTED BY</p>
      <div className="client-grid">
        {CLIENTS.map((c) => (
          <b key={c}>{c}</b>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials">
      <p className="label">TESTIMONIALS</p>
      <Eyes />
      <blockquote>
        {'“[ISI TESTIMONI ASLI]”'}
        <cite>— [ISI NAMA, BRAND]</cite>
      </blockquote>
    </section>
  );
}

export function Faq() {
  return (
    <section className="faq">
      <div>
        <p className="label">FAQ / [DRAFT]</p>
        <h2>
          Yang sering
          <br />
          <em>ditanyain.</em>
        </h2>
      </div>
      <Accordion items={FAQS} />
    </section>
  );
}

export function Blog() {
  return (
    <section className="blog" id="blog">
      <p className="label">FROM THE STUDIO</p>
      <h2>Fresh thoughts.</h2>
      <div>
        {POSTS.map((title, i) => (
          <article key={title}>
            <div>[BLOG IMAGE]</div>
            <small>{`${pad(i + 1)} · [ISI TANGGAL]`}</small>
            <h3>{title}</h3>
            <a href="#contact">Baca artikel ↗</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <p className="label">WORK WITH US</p>
        <h2>
          Let&apos;s make
          <br />
          <em>it matter.</em>
        </h2>
        <p>Punya brief atau masih mau ngobrol? Ceritain dulu aja.</p>
      </div>
      <ContactForm />
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <h2>
        Every thing
        <br />
        matters<span>.</span>
      </h2>
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <span>
          [ISI EMAIL]
          <br />
          [ISI WHATSAPP]
        </span>
        <span>
          Instagram ↗
          <br />
          LinkedIn ↗
          <br />
          TikTok ↗
        </span>
      </div>
      <small>©2026 Everything Matters Studio. All things matter.</small>
    </footer>
  );
}
