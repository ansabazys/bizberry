'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  containerClassName = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className={`mx-auto max-w-6xl ${containerClassName}`}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-[#941c1e] uppercase">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-zinc-600">{description}</p> : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
          className="mt-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
