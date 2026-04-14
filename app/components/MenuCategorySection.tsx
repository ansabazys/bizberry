"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import menuData from "../data/menu.json";

type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  note?: string;
};

type MenuCategorySectionProps = {
  enablePagination?: boolean;
  itemsPerPage?: number;
  showViewMore?: boolean;
  enableSearch?: boolean;
};

const allItems = menuData.items as MenuItem[];
const minimalCategories = ["ALL", "DRINKS", "FOOD", "DESSERTS"] as const;
type MinimalCategory = (typeof minimalCategories)[number];

const categoryToGroup: Record<string, Exclude<MinimalCategory, "ALL">> = {
  Tea: "DRINKS",
  Coffee: "DRINKS",
  Frappe: "DRINKS",
  "Mojito & Mocktail": "DRINKS",
  Smoothies: "DRINKS",
  "Signature Shakes": "DRINKS",
  "French Fries": "FOOD",
  Starters: "FOOD",
  Momos: "FOOD",
  "Wrap Roll": "FOOD",
  "Rumali Roll": "FOOD",
  "Tizza Roll": "FOOD",
  Burger: "FOOD",
  Sandwich: "FOOD",
  Dessert: "DESSERTS",
  Falooda: "DESSERTS",
};

export default function MenuCategorySection({
  enablePagination = false,
  itemsPerPage = 20,
  showViewMore = false,
  enableSearch = false,
}: MenuCategorySectionProps) {
  const [activeCategory, setActiveCategory] = useState<MinimalCategory>("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const grouped = allItems.reduce<Record<MinimalCategory, number>>(
      (acc, item) => {
        const group = categoryToGroup[item.category] ?? "FOOD";
        acc[group] += 1;
        return acc;
      },
      { ALL: allItems.length, DRINKS: 0, FOOD: 0, DESSERTS: 0 }
    );

    return minimalCategories.map((label) => ({ label, count: grouped[label] }));
  }, []);

  const filteredItems = useMemo(() => {
    let items = activeCategory === "ALL"
      ? allItems
      : allItems.filter((item) => (categoryToGroup[item.category] ?? "FOOD") === activeCategory);

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery) ||
          (item.note && item.note.toLowerCase().includes(lowerQuery))
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const totalPages = enablePagination ? Math.max(1, Math.ceil(filteredItems.length / itemsPerPage)) : 1;

  const visibleItems = useMemo(() => {
    if (!enablePagination) return filteredItems.slice(0, itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [enablePagination, filteredItems, currentPage, itemsPerPage]);

  const visibleCategories = categories.length > 0
    ? categories
    : [
        { label: "ALL" as MinimalCategory, count: allItems.length },
        { label: "DRINKS" as MinimalCategory, count: 0 },
        { label: "FOOD" as MinimalCategory, count: 0 },
        { label: "DESSERTS" as MinimalCategory, count: 0 },
      ];

  return (
    <div id="menu" className="mt-16 grid gap-6 lg:grid-cols-[260px_1fr]">
      <motion.aside initial={false} animate={{ opacity: 1, y: 0 }} className="pt-2 flex flex-col gap-6">
        {enableSearch && (
          <div className="px-2 w-full lg:px-0">
            <input
              type="text"
              placeholder="Search drinks & food..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full rounded-md border border-zinc-300 bg-transparent px-4 py-2 text-zinc-800 placeholder:text-zinc-500 focus:border-[#941c1e] focus:outline-none focus:ring-1 focus:ring-[#941c1e]"
            />
          </div>
        )}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 lg:block lg:space-y-2 lg:gap-0">
          {visibleCategories.map((category, index) => {
            const isActive = category.label === activeCategory;
            return (
              <motion.li
                key={category.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: 0.03 * index }}
                whileHover={{ x: 2 }}
                className="text-lg font-medium lg:text-2xl"
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.label);
                    setCurrentPage(1);
                  }}
                  className={`cursor-pointer text-left transition ${
                    isActive ? "text-[#941c1e]" : "text-zinc-500 hover:text-[#941c1e]"
                  }`}
                >
                  {category.label.toUpperCase()} {category.count}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </motion.aside>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${currentPage}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleItems.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="bg-[#ebe7e2] p-4 font-mono"
            >
              <p className="text-xs tracking-wider text-zinc-500 uppercase">{item.category}</p>
              <h3 className="mt-2 text-xl leading-tight font-medium text-[#941c1e] uppercase">{item.name}</h3>
              {item.note ? <p className="mt-2 text-sm text-zinc-600">{item.note}</p> : null}
              <p className="mt-3 text-lg text-zinc-800">Rs {item.price}</p>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {enablePagination && totalPages > 1 ? (
        <div className="col-span-full mt-2 flex flex-wrap items-center justify-center gap-2 ">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded border px-3 py-1.5 text-sm ${
                currentPage === page ? "border-[#941c1e] bg-[#941c1e] text-white" : "border-zinc-300 text-zinc-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      ) : null}

      {showViewMore && !enablePagination && filteredItems.length > itemsPerPage ? (
        <div className="col-span-full mt-8 flex justify-center">
          <Link
            href="/menu"
            className="rounded-full border border-zinc-300 bg-transparent px-8 py-3 text-sm font-medium tracking-wide text-zinc-800 transition hover:border-[#941c1e] hover:text-[#941c1e]"
          >
            VIEW MORE
          </Link>
        </div>
      ) : null}
    </div>
  );
}
