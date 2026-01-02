import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import product5L from "@/assets/product-5l.jpg";
import product15kg from "@/assets/product-15kg.jpg";
import { MoveRight } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      {/* Premium Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 -z-10" />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6">
              Pure. Natural. <span className="text-primary">Healthy.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Experience the finest filtered groundnut oil, crafted for those who don't compromise on quality or taste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            <ProductCard
              title="5 Litre Can"
              size="5 Litres"
              price="Price on Request"
              image={product5L}
              description="Ideal for monthly home consumption. Easy to handle and store."
              features={["Ergonomic Handle", "Freshness Seal", "Recyclable"]}
            />

            <ProductCard
              title="15 Kg Drum"
              size="15 Kilograms"
              price="Price on Request"
              image={product15kg}
              highlight="Best Value"
              description="Perfect for large families and heavy usage. Maximum savings."
              features={["Bulk Savings", "Sturdy Metal", "Long Shelf Life"]}
            />

            <ProductCard
              title="15 Litre Drum"
              size="15 Litres"
              price="Price on Request"
              image={product15kg}
              description="The standard choice for consistent quality cooking."
              features={["Standard Size", "Easy Pour", "Flavor Lock"]}
            />
          </div>

          <div className="mt-24 text-center">
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-10 max-w-3xl mx-auto shadow-xl">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Bulk Orders & Business</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Running a restaurant or need a custom supply? We offer special rates for bulk orders.
              </p>
              <WhatsAppButton
                message="Hello, I'd like to discuss a custom order for Gorounet Oil."
                className="inline-flex h-12 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              />
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
};

export default Products;
