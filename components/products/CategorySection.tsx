// components/CategorySection.tsx
import Image from "next/image";
import { allProducts } from "../static/product.data";
import Link from "next/link";

const categories = [
  {
    title: "Hosiery",
    image: "/images/hosiery.jpg",
  },
  {
    title: "Denim",
    image: "/images/denim.jpg",
  },
  {
    title: "Apparel",
    image: "/images/apparel.jpg",
  },
  {
    title: "Activewear",
    image: "/images/activewear.jpg",
  },
];

export default function CategorySection() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {allProducts.map((item, index) => (
            <Link
              href={`/products/${item.id}`}
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-105 overflow-hidden">
                <Image
                  src={item.hero.image}
                  alt={item.hero.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl uppercase font-semibold tracking-wide">
                {item.hero.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
