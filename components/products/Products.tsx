"use client";

import { useMemo, useState } from "react";
import { motion, LayoutGroup } from "motion/react";
import ProductCard from "./productCard";
import { ProductItem } from "@/components/types/item.type";

export default function ProductsPage({
  products,
  selectedId,
}: {
  products: ProductItem[];
  selectedId?: string;
}) {
  const defaultId = selectedId ?? "1";
  const [activeId, setActiveId] = useState(defaultId);

  return (
    <section className="w-full bg-white ">
      <div className=" ">
        <LayoutGroup>
          <div
            className="grid grid-cols-1 gap-2 md:grid-cols-4"
            onMouseLeave={() => setActiveId(defaultId)}
          >
            {products.map((p) => {
              const isActive = p.id === activeId;

              return (
                <motion.div
                  key={p.id}
                  layout
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  onMouseEnter={() => setActiveId(p.id as string)}
                  className={isActive ? "md:col-span-2" : "md:col-span-1"}
                >
                  <ProductCard item={p} active={isActive} />
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
