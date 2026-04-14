'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`rounded-2xl border border-zinc-300/80 bg-[#f3f0eb] p-6 shadow-[0_8px_22px_rgba(24,24,27,0.05)] ${className}`}
    >
      {children}
    </motion.article>
  );
}
