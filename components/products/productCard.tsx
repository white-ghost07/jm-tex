"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "motion/react";
import { ProductItem } from "@/components/types/item.type";

export default function ProductCard({
  item,
  active,
}: {
  item: ProductItem;
  active: boolean;
}) {
  return (
    <div
      className={clsx(
        "group relative h-120 overflow-hidden border border-neutral-200 bg-neutral-100",
        active ? "shadow-lg" : "shadow-sm",
      )}
    >
      <Image
        src={item?.image}
        alt={item?.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        priority={active}
      />

      <div className="absolute inset-0 bg-black/30 transition-colors duration-1000 group-hover:bg-black/40" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Smooth text reveal */}
        <motion.div
          layout
          initial={false}
          animate={{
            opacity: active ? 1 : 0,
            y: active ? 0 : 10,
            height: active ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-2 overflow-hidden text-sm text-white/90"
        >
          <h3 className="text-4xl mb-3 font-semibold">{item?.title}</h3>
          <p className="text-lg max-w-3/4"> {item?.description}</p>
        </motion.div>
      </div>
    </div>
  );
}
