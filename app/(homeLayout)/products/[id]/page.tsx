import CertificationsSlider from "@/components/products/CertificationSlider";
import GetInTouch from "@/components/products/GetInTouch";
import ProductsPage from "@/components/products/Products";
import ScrollButton from "@/components/products/ScrollButton";
import TopServicesPage from "@/components/products/TopService";
import TrustedBy from "@/components/products/TrustedBy";
import { certificate } from "@/components/static/certificate.data";
import { allProducts } from "@/components/static/product.data";
import { ProductItem } from "@/components/types/item.type";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  const item = allProducts.find((el) => el.id === Number(id))!;
  return (
    <main className="w-full my-20 bg-white">
      {/* ================= HERO ================= */}
      <section className="w-full px-4 ">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12  lg:flex-row lg:gap-8">
          {/* Left */}
          <div className="w-full flex-1 flex-col justify-center">
            <h1 className="text-3xl font-semibold uppercase tracking-wide text-black sm:text-4xl">
              {item.hero.title}
            </h1>

            <p className="mt-6 max-w-sm text-[16px] leading-7 text-gray-600 sm:text-[18px] sm:leading-8">
              {item.hero.description}
            </p>

            <ScrollButton />
          </div>

          {/* Right Image */}
          <div className="w-full flex-1">
            <div
              className="relative w-full
        h-80 sm:h-105 md:h-130 lg:h-150"
            >
              <Image
                src={item.hero.image}
                alt={item.hero.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="w-full border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12  lg:flex-row lg:gap-8">
          {/* Left Content */}
          <div className="w-full flex-1">
            <h2 className="text-[28px] font-semibold tracking-wide text-black sm:text-[38px]">
              {item.details.title}
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-gray-700">
              {item.details.intro}
            </p>

            <div className="mt-6 space-y-4">
              {item.details.bullets.map((b) => (
                <div key={b.heading}>
                  <h3 className="text-[16px] font-semibold text-black">
                    {b.heading}
                  </h3>
                  <p className="mt-1 text-[14px] leading-6 text-gray-700">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Image */}
            <div className="mt-6">
              <div className="relative h-65 w-full sm:h-80 md:h-85">
                <Image
                  src={item.hero.image}
                  // src={item.details.image2.src}
                  alt={item.details.image2.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Big Image */}
          <div className="w-full flex-1">
            <div className="relative h-105 w-full sm:h-130 md:h-175 lg:h-200">
              <Image
                src={item.hero.image}
                // src={item.details.image1.src}
                alt={item.details.image1.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="w-full border-t border-gray-100">
        <div className="mx-auto  px-6 py-12 md:px-0">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-semibold  text-black">OUR PRODUCTS</h2>
            <p className="mx-auto mt-4 mb-6 max-w-4xl text-lg leading-relaxed text-gray-500">
              Offering a wide range of hosiery products tailored to our customer
              needs, across all ages and genders.
              <br />
              We use the finest raw materials including natural, man-made, and
              recycled fibres.
            </p>
            <p className=" cursor-pointer text-xl font-bold text-gray-800">
              <span className="hover:text-sky-500 transition-colors duration-150">
                Digital Showroom
              </span>{" "}
              |{" "}
              <span className="hover:text-sky-500 transition-colors duration-150">
                {" "}
                Catalogue
              </span>
            </p>
          </div>

          {/* Mosaic Layout based on index */}
          <div className="space-y-2">
            <ProductsPage
              selectedId="1"
              products={item?.products?.slice(0, 3) as ProductItem[]}
            />
            <ProductsPage
              selectedId="5"
              products={item?.products?.slice(3) as ProductItem[]}
            />
          </div>
          <TopServicesPage />
          <TrustedBy />
          <CertificationsSlider items={certificate} />
          <GetInTouch />
        </div>
      </section>
    </main>
  );
}
