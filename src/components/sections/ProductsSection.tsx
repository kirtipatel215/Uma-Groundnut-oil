import { Button } from "@/components/ui/button";
import product5L from "@/assets/product-5l.jpg";
import product15kg from "@/assets/product-15kg.jpg";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const ProductsSection = () => {
    const products = [
        {
            id: 1,
            name: "5 Liter Can",
            size: "5 Litres",
            description: "Ideal for monthly home consumption. Easy to handle and store.",
            price: "Price on Request",
            image: product5L,
            highlight: "Popular Choice",
            features: ["Ergonomic Handle", "Freshness Seal", "Recyclable Bottle"]
        },
        {
            id: 2,
            name: "20 Liter Drum",
            size: "20 Litres",
            description: "Perfect for restaurants, large families, and bulk usage.",
            price: "Price on Request",
            image: product15kg,
            highlight: "Best Value",
            features: ["Bulk Savings", "Sturdy Packaging", "Long Shelf Life"]
        }
    ];

    return (
        <section id="products" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-20 animate-fade-up">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase bg-blue-50 px-4 py-2 rounded-full">Our Collection</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight">Premium Products</h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto font-light">Choose the perfect size for your needs. Always pure, always fresh.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="h-full">
                            <ProductCard
                                title={product.name}
                                size={product.size}
                                price={product.price}
                                image={product.image}
                                highlight={product.highlight}
                                description={product.description}
                                features={product.features}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link to="/products">
                        <Button className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/25 transition-all group">
                            View All Products <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
