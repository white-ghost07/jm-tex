import CategorySection from "@/components/products/CategorySection";
import FullFamilySection from "@/components/products/FullFamilySection";
import ProductTrustedBy from "@/components/products/ProductTrustedBy";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <FullFamilySection />
      <CategorySection />
      <ProductTrustedBy />
    </div>
  );
}
