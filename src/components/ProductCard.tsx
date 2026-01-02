import { motion } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  size: string;
  price: string;
  image: string;
  highlight?: string;
  features?: string[];
  description?: string;
}

const ProductCard = ({ title, size, price, image, highlight, features, description }: ProductCardProps) => {
  const message = `Hello, I'd like to order Gorounet Oil ${size}.`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-lg transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:bg-white/90" />

      <div className="relative p-6 md:p-8 flex flex-col h-full z-10">
        {highlight && (
          <div className="absolute top-6 right-6 z-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-primary/90 shadow-sm backdrop-blur-sm">
              {highlight}
            </span>
          </div>
        )}

        {/* Image Container with Soft Glow */}
        <div className="relative mb-8 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50/50 to-transparent p-6 flex items-center justify-center group-hover:from-blue-100/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-contain drop-shadow-xl z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>

        <div className="space-y-6 flex-grow">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-2">{title}</h3>
            <p className="text-lg text-slate-500 font-medium">{size}</p>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-3xl font-bold text-primary tracking-tight leading-tight">{price}</span>
          </div>

          {description && (
            <p className="text-slate-600 leading-relaxed font-light">{description}</p>
          )}

          {features && (
            <div className="space-y-3 pt-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 group/item">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100/50">
          <WhatsAppButton
            message={message}
            className="w-full h-12 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-primary hover:bg-primary/90"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
