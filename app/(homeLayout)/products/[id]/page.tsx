import CertificationsSlider from "@/components/products/CertificationSlider";
import GetInTouch from "@/components/products/GetInTouch";
import ProductsPage from "@/components/products/Products";
import TopServicesPage from "@/components/products/TopService";
import TrustedBy from "@/components/products/TrustedBy";
import { certificate } from "@/components/static/certificate.data";
import { allProducts } from "@/components/static/product.data";
import { ProductItem } from "@/types/item.type";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const item = allProducts.find((el) => el.id === Number(id))!;
  console.log({ item });
  return (
    <main className="w-full bg-white">
      {/* ================= HERO ================= */}
      <section className="w-full">
        <div className="mx-auto grid max-w-350 grid-cols-12">
          {/* Left */}
          <div className="col-span-12 flex min-h-[72vh] flex-col justify-center px-8 py-14 md:col-span-4 md:px-8">
            <h1 className="text-[44px] font-extrabold tracking-wide text-black">
              {item.hero.title}
            </h1>

            <p className="mt-6 max-w-sm text-[18px] leading-8 text-gray-600">
              {item.hero.description}
            </p>

            <div className="mt-24 flex items-center gap-3 text-gray-600">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-400">
                i
              </span>
              <div className="flex flex-col leading-5">
                <span className="text-[16px]">Scroll</span>
                <span className="text-[22px] leading-5">↓</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-12 md:col-span-8">
            <div className="relative h-[72vh] w-full md:h-[84vh]">
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
      <section className="w-full  border-t border-gray-100">
        <div className="mx-auto grid max-w-350 grid-cols-12 gap-8 px-8 py-16 md:px-14">
          {/* Left Content */}
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-[38px] font-extrabold tracking-wide text-black">
              {item.details.title}
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-gray-500">
              {item.details.intro}
            </p>

            <div className="mt-10 space-y-7">
              {item.details.bullets.map((b) => (
                <div key={b.heading}>
                  <h3 className="text-[16px] font-semibold text-black">
                    {b.heading}
                  </h3>
                  <p className="mt-1 text-[14px] leading-6 text-gray-500">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Image */}
            <div className="mt-10">
              <div className="relative h-70 w-full md:h-85">
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
          <div className="col-span-12 md:col-span-6">
            <div className="relative h-130 w-full md:h-195">
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
