'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type GalleryItem = {
  title: string;
  image: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.figure
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="group overflow-hidden rounded-2xl border border-zinc-300/80 bg-[#ece8e2]"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 text-sm font-medium text-white">{item.title}</figcaption>
          </div>
        </motion.figure>
      ))}
    </div>
  );
}
