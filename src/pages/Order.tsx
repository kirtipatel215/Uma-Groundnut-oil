import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Info } from "lucide-react";
import product5L from "@/assets/product-5l.jpg";
import product15kg from "@/assets/product-15kg.jpg";

const Order = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Order Now</h1>
            <p className="text-xl text-muted-foreground">
              Choose your pack size and order instantly via WhatsApp
            </p>
          </div>

          <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-8 flex items-start gap-3">
            <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Clicking the order button will redirect you to WhatsApp with a pre-filled message. 
              Simply send it to complete your order!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Package className="text-primary" />
                  5 Litre Bottle
                </CardTitle>
                <CardDescription>Perfect for regular household use</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={product5L} 
                  alt="5 Litre Bottle" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">₹1050
</p>
                  <p className="text-sm text-muted-foreground mb-4">5 Litres</p>
                  <WhatsAppButton 
                    message="Hello, I'd like to order Gorounet Oil 5 Litre Bottle."
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Package className="text-primary" />
                  15 Kg Drum
                </CardTitle>
                <CardDescription>Ideal for bulk usage and businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src={product15kg} 
                  alt="15 Kg Drum" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">₹3,100
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">15 Kilograms</p>
                  <WhatsAppButton 
                    message="Hello, I'd like to order Gorounet Oil 15 Kg Drum."
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Your Order?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is ready to assist you with any questions about products, delivery, or bulk orders.
            </p>
            <WhatsAppButton message="Hello, I need help with my Gorounet Oil order." />
          </div>
        </div>
      </main>

      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
};

export default Order;
