import { products } from "@/data/product";
import ProductsPage from "@/components/ProductPage";
import EzerLanding from "@/components/products/EzerLanding";
import SchoolLanding from "@/components/products/SchoolLanding";
import ClassifiedsLanding from "@/components/products/ClassifiedsLanding";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isEzer = product.slug === 'ezer-home-care-management';
  const isSchool = product.slug === 'school-management-system';
  const isClassifieds = product.slug === 'classified-ads-directory-platform';

  return (
    <div className="animate-fade-in">
      {isEzer ? (
        <EzerLanding product={product} />
      ) : isSchool ? (
        <SchoolLanding product={product} />
      ) : isClassifieds ? (
        <ClassifiedsLanding product={product} />
      ) : (
        <ProductsPage product={product} />
      )}
      {!isEzer && !isSchool && !isClassifieds && <CTA />}
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
