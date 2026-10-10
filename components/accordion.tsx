'use client';

import { useId, useState } from 'react';

type AccordionItem = { title: string; body: string };

export function Accordion({ items, id }: { items: AccordionItem[]; id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="accordion" id={id}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.title} className={`acc${isOpen ? ' open' : ''}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{item.title}</strong>
              <em aria-hidden="true">{isOpen ? '−' : '+'}</em>
            </button>
            <p id={panelId}>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
